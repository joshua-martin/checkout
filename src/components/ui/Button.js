import './Button.css'

function Button({ title, onClick, classOverrides }) {
    return (
        <button type='submit' onClick={onClick} className={`btn ${classOverrides}`}>
            {title}
        </button>
    )
}

export default Button