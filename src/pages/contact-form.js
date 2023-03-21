import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/contact-form.module.css'

const contactForm = () => {
    return (
        <>
            <Header />
            <form className={styles.formContainer}>
                <input type="text" className={styles.input} placeholder="First name" />
                <input type="text" className={styles.input} placeholder="Last name" />
                <input type="text" className={styles.input} placeholder="Phone number" />
                <input type="text" className={styles.input} placeholder="Email" />
                <textarea type="text" className={styles.input} placeholder="Describe your project" />
                <button className={styles.submitBtn}>Submit</button>
            </form>
            <Footer />
        </>
    );
};

export default contactForm;