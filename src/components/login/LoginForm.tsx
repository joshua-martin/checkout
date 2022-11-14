import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../reducers/stepperSlice'
import { login } from '../../reducers/userSlice'
import { gql, useMutation } from '@apollo/client'
import Validate from '../utils/Validate'
import Input from '../ui/Input'
import Button from '../ui/Button'

const LOGIN_USER = gql`
    mutation Login($email: String!) {
        login(email: $email) {
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

const LoginForm = () => {
    const dispatch = useDispatch()
    const [loginUser, { loading, error }] = useMutation(LOGIN_USER)

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [fetching, setFetching] = useState(false)
    const [globalError, setGlobalError] = useState('')

    const handleEmail = (e) => {
        const { value } = e.target
        setEmail(value)
        setEmailError(Validate({ value, type: 'email' }))
    }

    const handlePassword = (e) => {
        const { value } = e.target
        setPassword(value)
        setPasswordError(Validate({ value }))
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        if (emailError || passwordError) return
        if (!email) setEmailError('This field is required')
        if (!password) setPasswordError('This field is required')
        else {
            setFetching(true)

            await loginUser({ variables: { email } })
                .then((res) => {
                    if (!res) throw new Error('Request Failed ')

                    return res.data.login
                })
                .then((data) => {
                    if (!data.success) {
                        setGlobalError(data.message)
                        setFetching(false)
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
        <form className="my-4" onSubmit={handleLogin}>
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
                type="password"
                name="password"
                label="Password"
                onChange={handlePassword}
                value={password}
                error={passwordError}
                classOverrides="w-full"
            />

            <Button
                title={fetching ? 'Loading...' : 'Sign in'}
                onClick={handleLogin}
                disabled={fetching}
                classOverrides="mt-4 py-3"
            />
        </form>
    )
}

export default LoginForm
