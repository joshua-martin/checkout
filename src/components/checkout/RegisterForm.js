import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { increment } from "../../reducers/stepperSlice";
import { login } from "../../reducers/userSlice";

function RegisterForm() {
    const dispatch = useDispatch()

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [addressOne, setAddressOne] = useState("");
    const [addressOneError, setAddressOneError] = useState("");
    const [town, setTown] = useState("");
    const [townError, setTownError] = useState("");
    const [postcode, setPostcode] = useState("");
    const [postcodeError, setPostcodeError] = useState("");

    const [fetching, setFetching] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleEmail = (e) => {
        const { value } = e.target;
        if (value === '') return setEmailError('Add email');
        setEmail(value);
    };

    const handleName = (e) => {
        const { value } = e.target;
        if (value === '') return setNameError('Add name');
        setName(value);
    };

    const handlePhoneNumber = (e) => {
        const { value } = e.target;
        if (value === '') return setPhoneNumberError('Add number');
        setPhoneNumber(value);
    };

    const handleAddressOne = (e) => {
        const { value } = e.target;
        if (value === '') return setAddressOneError('Add address line');
        setAddressOne(value);
    };

    const handleTown = (e) => {
        const { value } = e.target;
        if (value === '') return setTownError('Add town');
        setTown(value);
    };

    const handlePostcode = (e) => {
        const { value } = e.target;
        if (value === '') return setPostcodeError('Add postcode');
        setPostcode(value);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (emailError || nameError || phoneNumberError || addressOneError || townError || postcodeError) return;
        if (!email) setEmailError("Add email");
        if (!name) setNameError('Add name');
        if (!phoneNumber) setPhoneNumberError('Add number');
        if (!addressOne) setAddressOneError('Add address line');
        if (!town) setTownError('Add town');
        if (!postcode) setPostcodeError('Add postcode');

        else {
            setFetching(true);
            fetch("http://www.mocky.io/v2/5d9d9219310000153650e30b", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, name, phoneNumber, addressOne, town, postcode }),
            })
                .then((res) => {
                    if (res.status >= 200 && res.status <= 300) return res.json();
                    else throw new Error("Request Failed ", res.status);
                })
                .then((data) => {
                    setFetching(false);
                    dispatch(login('email'));
                    setIsLogged(true);
                    dispatch(increment());
                })
                .catch((error) => {
                    setFetching(false);
                    setShowError(true);
                    console.error(error);
                });
        }
    };


    if (isLogged) return <Navigate to="/delivery" replace />;

    return (
        <form className='my-4' onSubmit={handleRegister}>
            {showError && <p className="text-red-400">Please correct the below errors</p>}
            <label className='block mb-2'>
                <span className='font-semibold'>Email Address</span>
                <input type='text' name='email' value={email} onChange={handleEmail} className='rounded-md border border-grey-600 w-full p-2 mt-1' />
                {emailError && (
                    <p className="text-red-400">
                        {emailError}
                    </p>
                )}
            </label>
            <label className='block mb-2'>
                <span className='font-semibold'>Name</span>
                <input type='text' name='name' value={name} onChange={handleName} className='rounded-md border border-grey-600 w-full p-2 mt-1' />
                {nameError && (
                    <p className="text-red-400">
                        {nameError}
                    </p>
                )}
            </label>
            <label className='block mb-2'>
                <span className='font-semibold'>Phone Number</span>
                <input type='text' name='phoneNumber' value={phoneNumber} onChange={handlePhoneNumber} className='rounded-md border border-grey-600 w-full p-2 mt-1' />
                {phoneNumberError && (
                    <p className="text-red-400">
                        {phoneNumberError}
                    </p>
                )}
            </label>
            <label className='block mb-2'>
                <span className='font-semibold'>Address Line 1</span>
                <input type='text' name='addressOne' value={addressOne} onChange={handleAddressOne} className='rounded-md border border-grey-600 w-full p-2 mt-1' />
                {addressOneError && (
                    <p className="text-red-400">
                        {addressOneError}
                    </p>
                )}
            </label>
            <label className='block mb-2'>
                <span className='font-semibold'>Town</span>
                <input type='text' name='town' value={town} onChange={handleTown} className='rounded-md border border-grey-600 w-full p-2 mt-1' />
                {townError && (
                    <p className="text-red-400">
                        {townError}
                    </p>
                )}
            </label>
            <label className='block mb-2'>
                <span className='font-semibold'>Postcode</span>
                <input type='text' name='email' value={postcode} onChange={handlePostcode} className='rounded-md border border-grey-600 w-full p-2 mt-1' />
                {postcodeError && (
                    <p className="text-red-400">
                        {postcodeError}
                    </p>
                )}
            </label>

            <button type='submit' disabled={fetching} onClick={handleRegister} className='rounded-lg shadow-sm border border-green-500 text-white bg-green-500 w-full py-4 mt-4 font-bold tracking-wide transition-colors hover:bg-green-700'>{fetching ? "Loading" : "Register"}</button>
        </form >
    )
}

export default RegisterForm

