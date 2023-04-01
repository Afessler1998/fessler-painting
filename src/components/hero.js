import React from 'react'
import Link from 'next/link'
import styles from '../styles/hero.module.css'

const hero = ({ heading, text, img, imgAlt }) => {
    return (
        <div className={styles.ctaContainer}>
            <div className={styles.ctaBox}>
                <h3 className={styles.ctaHeading}>{heading}</h3>
                <span className={styles.ctaText}>
                    {text}
                </span>
                <Link href="https://forms.gle/rkWsRgqs4vtFD6WZ7">
                    <div className={styles.ctaButton}>Get your free estimate!</div>
                </Link>
            </div>
            <img src={img} alt={imgAlt} className={styles.ctaImg} />
        </div>
    );
};

export default hero;