import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../reducers/stepperSlice'
import { login } from '../../reducers/userSlice'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { gql, useMutation } from '@apollo/client'

const REGISTER_USER = gql`
    mutation Register(
        $email: String!
        $name: String
        $phone: String
        $addressLine: String
        $town: String
        $postcode: String
    ) {
        register(
            email: $email
            name: $name
            phone: $phone
            addressLine: $addressLine
            town: $town
            postcode: $postcode
        ) {
            success
            message
            user {
                id
                email
                name
                phone
                addressLine
                town
                postcode
            }
        }
    }
`

function RegisterForm() {
    const dispatch = useDispatch()
    const [registerUser, { loading, error }] = useMutation(REGISTER_USER)

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [addressLine, setAddressLine] = useState('')
    const [addressLineError, setAddressLineError] = useState('')
    const [town, setTown] = useState('')
    const [townError, setTownError] = useState('')
    const [postcode, setPostcode] = useState('')
    const [postcodeError, setPostcodeError] = useState('')

    const [fetching, setFetching] = useState(false)
    const [globalError, setGlobalError] = useState(false)

    const handleEmail = (e) => {
        const { value } = e.target
        setEmail(value)
        if (value === '') return setEmailError('Add email')
    }

    const handleName = (e) => {
        const { value } = e.target
        setName(value)
        if (value === '') return setNameError('Add name')
    }

    const handlePhone = (e) => {
        const { value } = e.target
        setPhone(value)
        if (value === '') return setPhoneError('Add number')
    }

    const handleAddressLine = (e) => {
        const { value } = e.target
        setAddressLine(value)
        if (value === '') return setAddressLineError('Add address line')
    }

    const handleTown = (e) => {
        const { value } = e.target
        setTown(value)
        if (value === '') return setTownError('Add town')
    }

    const handlePostcode = (e) => {
        const { value } = e.target
        setPostcode(value)
        if (value === '') return setPostcodeError('Add postcode')
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        if (emailError || nameError || phoneError || addressLineError || townError || postcodeError)
            return

        if (!email) setEmailError('Add email')
        if (!name) setNameError('Add name')
        if (!phone) setPhoneError('Add number')
        if (!addressLine) setAddressLineError('Add address line')
        if (!town) setTownError('Add town')
        if (!postcode) setPostcodeError('Add postcode')
        else {
            setFetching(true)
            await registerUser({
                variables: { email, name, phone, addressLine, town, postcode }
            })
                .then((res) => {
                    if (!res) throw new Error('Request Failed ', res.status)

                    return res.data.register
                })
                .then((data) => {
                    if (!data.success) {
                        setGlobalError(data.message)
                    } else {
                        dispatch(login(data.user))
                        dispatch(increment())
                    }
                })
                .catch((error) => {
                    setFetching(false)
                    setGlobalError(error.message)
                })
        }
    }

    if (loading) {
        return (
            <div className="mb-2 rounded-lg border-2 border-blue-400 px-4 py-2 font-bold text-blue-400">
                Please wait...
            </div>
        )
    }

    if (error) {
        return (
            <div className="mb-2 rounded-lg border-2 border-red-400 px-4 py-2 font-bold text-red-400">
                {error.message}
            </div>
        )
    }

    return (
        <form className="my-4" onSubmit={handleRegister}>
            {globalError != '' && (
                <div className="mb-2 rounded-lg border-2 border-red-400 px-4 py-2 font-bold text-red-400">
                    {globalError}
                </div>
            )}

            <Input
                type="text"
                name="email"
                label="Email Address"
                onChange={handleEmail}
                value={email}
                error={emailError}
                classOverrides="w-full"
            />

            <Input
                type="text"
                name="name"
                label="Name"
                onChange={handleName}
                value={name}
                error={nameError}
                classOverrides="w-full"
            />

            <Input
                type="text"
                name="phoneNumber"
                label="Phone Number"
                onChange={handlePhone}
                value={phone}
                error={phoneError}
                classOverrides="w-full"
            />

            <Input
                type="text"
                name="addressOne"
                label="Address Line 1"
                onChange={handleAddressLine}
                value={addressLine}
                error={addressLineError}
                classOverrides="w-full"
            />

            <Input
                type="text"
                name="town"
                label="Town"
                onChange={handleTown}
                value={town}
                error={townError}
                classOverrides="w-full"
            />
            <Input
                type="text"
                name="postcode"
                label="Postcode"
                onChange={handlePostcode}
                value={postcode}
                error={postcodeError}
                classOverrides="w-full"
            />

            <Button
                title={fetching ? 'Loading...' : 'Register'}
                onClick={handleRegister}
                disabled={fetching}
                classOverrides="mt-4 py-3"
            />
        </form>
    )
}

export default RegisterForm
