import './Button.css'

function Button({ title, onClick, classOverrides, ...props }) {
    return (
        <button type="submit" onClick={onClick} className={`btn ${classOverrides}`} {...props}>
            {title}
        </button>
    )
}

export default Button
