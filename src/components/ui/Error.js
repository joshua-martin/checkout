function Error({ err }) {
    return (
        <div className='container max-w-5xl mx-auto flex flex-row my-8 space-x-6'>
            <div className='rounded-lg shadow-lg p-6 w-full flex-shrink-0'>
                <div className='prose'>
                    <h1>Error</h1>
                    <p>Sorry, there's been an error. Please take note of the error message(s) below.</p>
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

