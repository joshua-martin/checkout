import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../reducers/stepperSlice'

import { login } from '../../reducers/userSlice'
import { useMutation } from '@apollo/client'
import { graphql } from '../../gql'

import Validate from '../utils/Validate'
import Input from '../ui/Input'
import Button from '../ui/Button'

const LOGIN_USER = graphql(`
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
`)

const LoginForm = () => {
    const dispatch = useDispatch()
    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        onError: (error) => {
            setGlobalError(error.message)
        },
        onCompleted: (data) => {
            if (!data.login.success) {
                setGlobalError(data.login.message)
            } else {
                dispatch(login(data.login.user))
                dispatch(increment())
            }
        }
    })

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
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

    const handleLogin = (e) => {
        e.preventDefault()

        if (emailError || passwordError) return
        if (!email) setEmailError('This field is required')
        if (!password) setPasswordError('This field is required')
        else {
            loginUser({ variables: { email } })
        }
    }

    if (loading) {
        return (
            <div className="mb-2 rounded-lg border-2 border-blue-400 px-4 py-2 font-bold text-blue-400">
                Please wait...
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
                title={loading ? 'Loading...' : 'Sign in'}
                onClick={handleLogin}
                disabled={loading}
                classOverrides="mt-4 py-3"
            />
        </form>
    )
}

export default LoginForm
