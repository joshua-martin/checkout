import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
import LoginForm from './LoginForm'

describe('Test login form', () => {
    const mocks = []

    it('Errors when the user types an invalid email', () => {
        const { container } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Provider store={store}>
                    <LoginForm />
                </Provider>
            </MockedProvider>
        )
        const emailInput = container.querySelector('input[name=email]')
        fireEvent.change(emailInput, { target: { value: 'fake@email' } })
        expect(emailInput.nextElementSibling.textContent).toBe('Please enter a valid email')
    })
    it('Errors if user tries to submit an empty form', () => {
        const { container } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Provider store={store}>
                    <LoginForm />
                </Provider>
            </MockedProvider>
        )
        const submitButton = container.querySelector('button[type=submit]')
        fireEvent.click(submitButton)
        expect(container.querySelectorAll('[role=alert]').length).toBe(2)
    })
    it('Errors if user tries to submit with a valid email but an empty password', () => {
        const { container } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Provider store={store}>
                    <LoginForm />
                </Provider>
            </MockedProvider>
        )
        const emailInput = container.querySelector('input[name=email]')
        const submitButton = container.querySelector('button[type=submit]')
        fireEvent.change(emailInput, { target: { value: 'fake@email.com' } })
        fireEvent.click(submitButton)
        expect(container.querySelectorAll('[role=alert]').length).toBe(1)
    })
    it('Accepts emails with a valid format', () => {
        const { container } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Provider store={store}>
                    <LoginForm />
                </Provider>
            </MockedProvider>
        )
        const emailInput = container.querySelector('input[name=email]')
        fireEvent.change(emailInput, { target: { value: 'fake@email.com' } })
        expect(container.querySelectorAll('[role=alert]').length).toBe(0)
    })
    it('Accepts a valid form submission', () => {
        const { container } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Provider store={store}>
                    <LoginForm />
                </Provider>
            </MockedProvider>
        )
        const emailInput = container.querySelector('input[name=email]')
        const passwordInput = container.querySelector('input[name=password]')
        const submitButton = container.querySelector('button[type=submit]')
        fireEvent.change(emailInput, { target: { value: 'fake@email.com' } })
        fireEvent.change(passwordInput, { target: { value: 'password' } })
        fireEvent.click(submitButton)
        expect(container.querySelectorAll('[role=alert]').length).toBe(0)
    })
})
