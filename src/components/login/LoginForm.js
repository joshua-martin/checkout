import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { increment } from '../../reducers/stepperSlice'
import { login } from '../../reducers/userSlice'

function LoginForm() {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [fetching, setFetching] = useState(false)
    const [isLogged, setIsLogged] = useState(false)
    const [showError, setShowError] = useState(false)

    const handleEmail = (e) => {
        const { value } = e.target
        if (value === '') {
            setEmailError('Add email')
            setShowError(true)
        } else {
            setEmail(value)
        }
    }

    const handlePassword = (e) => {
        const { value } = e.target
        if (value === '') {
            setPasswordError('Add password')
            setShowError(true)
        } else {
            setPassword(value)
        }
    }

    const handleLogin = (e) => {
        e.preventDefault()
        if (emailError || passwordError) return
        if (!email) setEmailError('Add email')
        if (!password) setPasswordError('Add password')
        else {
            setFetching(true)
            fetch('http://www.mocky.io/v2/5d9d9219310000153650e30b', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
                .then((res) => {
                    if (res.status >= 200 && res.status <= 300) return res.json()
                    else throw new Error('Request Failed ', res.status)
                })
                .then((data) => {
                    setFetching(false)
                    dispatch(login('email'))
                    setIsLogged(true)
                    dispatch(increment())
                })
                .catch((error) => {
                    setFetching(false)
                    setShowError(true)
                    console.error(error)
                })
        }
    }

    if (isLogged) return <Navigate to="/delivery" replace />

    return (
        <form className="my-4" onSubmit={handleLogin}>
            {showError && <p className="text-red-400">Login Failed</p>}
            <label className="mb-2 block">
                <span className="font-semibold">Email Address</span>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                    className="border-grey-600 mt-1 w-full rounded-md border p-2"
                />
                {emailError && <p className="text-red-400">{emailError}</p>}
            </label>
            <label>
                <span className="font-semibold">Password</span>
                <input
                    type="password"
                    name="password"
                    error={passwordError}
                    value={password}
                    onChange={handlePassword}
                    className="border-grey-600 mt-1 w-full rounded-md border p-2"
                />
                {passwordError && <p className="text-red-400">{passwordError}</p>}
            </label>
            <button
                type="submit"
                disabled={fetching}
                onClick={handleLogin}
                className="mt-4 w-full rounded-lg border border-green-500 bg-green-500 py-4 font-bold tracking-wide text-white shadow-sm transition-colors hover:bg-green-700"
            >
                {fetching ? 'Loading' : 'Sign in'}
            </button>
        </form>
    )
}

export default LoginForm
