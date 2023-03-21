import React, { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/contact-form.module.css'

const contactForm = () => {

    const [firstName, setFirstName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()

        //perform client side validation
    
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

        if (response.ok) setFirstName(data.firstName);
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
            {firstName && <p className={styles.successMsg}>Your contact info has been received, thank you for reaching out {firstName}!</p>}
            <Footer />
        </>
    );
};

export default contactForm;