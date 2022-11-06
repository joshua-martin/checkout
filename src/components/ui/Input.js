import './Input.css'

function Input({ onChange, error, name, label, showLabel, classOverrides, ...props }) {
    return (
        <>
            <label htmlFor={name} className={`mb-2 block font-semibold ${showLabel && 'hidden'}`}>
                {label}
            </label>
            <input
                onChange={onChange}
                className={`border-grey-600 mt-1 rounded-md border p-2 ${classOverrides}`}
                {...props}
            />
            {error && <p className="text-red-400">{error}</p>}
        </>
    )
}

export default Input
