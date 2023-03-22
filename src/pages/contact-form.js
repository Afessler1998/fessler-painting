import React, { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/contact-form.module.css'

const contactForm = () => {

    const [firstName, setFirstName] = useState('');
    const [statusCode, setStatusCode] = useState(0);
    const [message, setMessage] = useState('');

    const nameRegex = /^[a-zA-Z]+$/;
    const phoneRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!nameRegex.test(event.target.firstName.value) || !nameRegex.test(event.target.lastName.value)) {
            alert('Please enter a valid name');
            return;
        }

        if (!phoneRegex.test(event.target.phoneNumber.value)) {
            alert('Please enter a valid phone number');
            return;
        }
        
        if (!emailRegex.test(event.target.email.value)) {
            alert('Please enter a valid email');
            return;
        }

        if (!event.target.message.value) {
            alert('Please add a description of your project');
            return;
        }
    
        const data = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            phoneNumber: event.target.phoneNumber.value,
            email: event.target.email.value,
            message: event.target.message.value,
        }
    
        const JSONdata = JSON.stringify(data)
    
        const endpoint = '/api/contact-form'
    
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
    
        const response = await fetch(endpoint, options);
        const responseData = await response.json();

        if (response.ok) {
            if (statusCode !== 0) {
                setStatusCode(0);
                setMessage("");
            }
            setFirstName(data.firstName);
        } else {
            setStatusCode(response.status);
            setMessage(responseData.data);
        }
    }

    return (
        <>
            <Header />
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <label htmlFor="firstName" className={styles.label}>First name:</label>
                <input id="firstName" name="firstName" type="text" className={styles.input} placeholder="First name" />

                <label htmlFor="lastName" className={styles.label}>Last name:</label>
                <input id="lastName" name="lastName" type="text" className={styles.input} placeholder="Last name" />

                <label htmlFor="phoneNumber" className={styles.label}>Phone number:</label>
                <input id="phoneNumber" name="phoneNumber" type="text" className={styles.input} placeholder="Phone number" />

                <label htmlFor="email" className={styles.label}>Email:</label>
                <input id="email" name="email" type="text" className={styles.input} placeholder="Email" />

                <label htmlFor="message" className={styles.label}>Describe your project:</label>
                <textarea id="message" name="message" type="text" className={styles.input} placeholder="Describe your project" />

                <button type="submit" className={styles.submitBtn}>Submit</button>
            </form>
            {statusCode === 400 && <p className={styles.errorMsg}>{message}</p>}
            {statusCode === 500 && <p className={styles.errorMsg}>Something went wrong, please try again later</p>}
            {firstName && <p className={styles.successMsg}>Your contact info has been received, thank you for reaching out {firstName}!</p>}
            <Footer />
        </>
    );
};

export default contactForm;