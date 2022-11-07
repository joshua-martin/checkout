function Error({ err }) {
    return (
        <div className="container mx-auto my-8 flex max-w-5xl flex-row space-x-6">
            <div className="w-full flex-shrink-0 rounded-lg p-6 shadow-lg">
                <div className="prose">
                    <h1>Error</h1>
                    <p>
                        Sorry, there&apos;s been an error. Please take note of the error message(s)
                        below.
                    </p>
                    <ul>
                        {err.graphQLErrors.map(({ message }, i) => (
                            <li key={i}>{message}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Error
