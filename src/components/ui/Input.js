import './Input.css'

const Input = ({ onChange, error, name, label, showLabel, classOverrides, ...props }) => {
    return (
        <>
            <label
                htmlFor={name}
                id={'label_' + name}
                className={`mb-1 mt-2 block font-semibold ${!showLabel ? 'hidden' : ''}`}>
                {label}
            </label>
            <input
                aria-labelledby={'label_' + name}
                name={name}
                onChange={onChange}
                className={`border-grey-600 mt-1 rounded-md border p-2 ${classOverrides}`}
                {...props}
            />
            {error && (
                <p className="error mt-1 text-sm font-bold text-red-400" role="alert">
                    {error}
                </p>
            )}
        </>
    )
}

export default Input
