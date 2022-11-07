function AddressBlock({ user }) {
    return (
        <>
            {user.name}
            <br />
            {user.addressLine}, {user.town}, {user.postcode}
            <br />
            {user.phone}
        </>
    )
}

export default AddressBlock
