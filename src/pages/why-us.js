import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/why-us.module.css'

const whyUs = () => {
    return (
        <>
            <Header />
            <div className={styles.mainTextContainer}>
                <h2 className={styles.mainHeading}>Why us?</h2>
                <p className={styles.mainParagraph}>
                    When you choose Fessler Painting, you can rest assured that your painting project is in good hands.
                    With 10 years of experience in the industry, we have the knowledge, skills, and expertise to transform
                    your walls and spaces with beautiful, high-quality finishes. We take great pride in our workmanship and
                    attention to detail, and we use only the best materials and techniques to ensure a long-lasting and
                    durable result. As a licensed and insured painting contractor, we are committed to delivering exceptional
                    customer service and exceeding your expectations every step of the way. Whether you need interior or
                    exterior painting, fence or deck painting, power washing, or wallpaper removal, we have the experience and
                    expertise to get the job done right. Let us help you transform your property with our tagline:
                    "Transforming walls, transforming spaces".
                </p>
            </div>
            <Footer />
        </>
    );
};

export default whyUs;