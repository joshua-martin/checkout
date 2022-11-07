import './Input.css'

function Input({ onChange, error, name, label, showLabel, classOverrides, ...props }) {
    return (
        <>
            <label
                htmlFor={name}
                className={`mb-1 mt-2 block font-semibold ${showLabel && 'hidden'}`}>
                {label}
            </label>
            <input
                onChange={onChange}
                className={`border-grey-600 mt-1 rounded-md border p-2 ${classOverrides}`}
                {...props}
            />
            {error && <p className="mt-1 text-sm font-bold text-red-400">{error}</p>}
        </>
    )
}

export default Input
