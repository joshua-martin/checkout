import { MouseEventHandler, ComponentPropsWithoutRef } from 'react'
import './Button.css'

interface Button {
    title: string
    onClick?: MouseEventHandler
    classOverrides?: string
    disabled?: boolean
}

const Button = ({ title, onClick, classOverrides, disabled }: Button) => {
    return (
        <button
            type="submit"
            onClick={onClick}
            className={`btn ${classOverrides}`}
            disabled={disabled}>
            {title}
        </button>
    )
}

export default Button
