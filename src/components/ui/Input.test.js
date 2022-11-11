import React from 'react'
import { render } from '@testing-library/react'
import { toHaveClass, toBeInTheDocument } from '@testing-library/jest-dom'
import Input from './Input'

describe('Test input', () => {
    it('renders input and label', () => {
        const { container } = render(<Input type="text" name="email" label="Email Address" />)

        const inputElement = container.querySelectorAll('input')
        const labelElement = container.querySelectorAll('label')

        expect(inputElement.length).toBe(1)
        expect(labelElement.length).toBe(1)
    })
    it('sets up input and label correctly', () => {
        const { container } = render(<Input type="text" name="email" label="Email Address" />)

        const inputElement = container.querySelector('input')
        const labelElement = container.querySelector('label')

        expect(inputElement.name).toBe('email')
        expect(inputElement.type).toBe('text')
        expect(labelElement.textContent).toBe('Email Address')
    })
    it('hide labels', () => {
        const { container } = render(
            <Input type="text" name="email" label="Email Address" showLabel={false} />
        )

        const labelElement = container.querySelector('label')
        expect(labelElement).toHaveClass('hidden')
    })
    it('show error if passed', () => {
        const { container } = render(
            <Input type="text" name="email" label="Email Address" error={'Test Error'} />
        )

        const errorElement = container.querySelector('[role=alert]')
        expect(errorElement).toBeInTheDocument()
    })
})
