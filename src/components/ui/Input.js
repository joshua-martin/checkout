import './Input.css'

function Input({ onChange, error, name, label, showLabel, classOverrides, ...props }) {
    return (
        <>
            <label htmlFor={name} className={`block mb-2 font-semibold ${showLabel && 'hidden'}`}>{label}</label>
            <input onChange={onChange} className={`rounded-md border border-grey-600 p-2 mt-1 ${classOverrides}`} {...props} />
            {
                error && (
                    <p className="text-red-400">
                        {error}
                    </p>
                )
            }
        </>
    )
}

export default Input