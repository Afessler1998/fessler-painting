import React from 'react'
import Link from 'next/link'
import styles from "../styles/header.module.css"

const header = () => {
    return (
        <header className={styles.header}>
            <Link href={"/"}>
                <span className={styles.logoContainer}>
                    <img src="/fessler-painting-logo.svg" alt="Fessler Painting Logo" className={styles.headerLogo} />
                    <h1 className={styles.heading}>Fessler Painting</h1>
                </span>
            </Link>
            <Link href={"/interior-services"}><div className={styles.navButton}>Interior</div></Link>
            <Link href={"/exterior-services"}><div className={styles.navButton}>Exterior</div></Link>
            <Link href={"/why-us"}><div className={styles.navButton}>Why us?</div></Link>
            <a className={styles.callUsCta} href="tel:515-238-4466">Call us at 515-238-4466</a>
            <Link href={"/contact-form"}><div className={styles.contactUsCta}>Contact us today for a free estimate!</div></Link>
        </header>
    );
};

export default header;