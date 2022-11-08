const Validate = ({ value, type }) => {
    let regex = /./
    switch (type) {
        case 'email':
            regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
            if (!regex.test(value) || value === '') return 'Please enter a valid email'
            else return ''
        default:
            if (value === '') return 'This field is required'
            else return ''
    }
}

export default Validate
