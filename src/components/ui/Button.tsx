import { MouseEventHandler, ComponentPropsWithoutRef } from 'react'
import './Button.css'

interface Button {
    title: string
    onClick?: MouseEventHandler
    classOverrides?: string
    props?: ComponentPropsWithoutRef<'button'>
}

const Button = ({ title, onClick, classOverrides, ...props }: Button) => {
    return (
        <button type="submit" onClick={onClick} className={`btn ${classOverrides}`} {...props}>
            {title}
        </button>
    )
}

export default Button
