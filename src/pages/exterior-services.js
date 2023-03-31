import React from 'react'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/services.module.css'

const exteriorServices = () => {
    return (
        <div className="spacingWrapper">
            <Header />
            <div className={styles.mainTextContainer}>
                <h2 className={styles.mainHeading}>Exterior Painting Services</h2>
                <p className={styles.mainParagraph}>
                At Fessler Painting, we understand that the exterior of your property is the first impression visitors
                and guests have of your home or business. That's why we are committed to providing high-quality exterior
                painting services that will enhance the curb appeal and overall value of your property.
                With 10 years of experience in the industry, we have the knowledge and expertise to handle any exterior
                painting project, from small touch-ups to complete overhauls. We use only the best quality paints and
                materials to ensure a durable and long-lasting finish that will protect your property against
                harsh weather conditions. We pay close attention to detail, ensuring that every inch of your property is
                painted to perfection. We pride ourselves on our exceptional customer service and strive to exceed our clients'
                expectations on every project we undertake. Choose Fessler Painting for your exterior painting needs,
                and let us transform your property into a beautiful and welcoming space that will leave a lasting impression.
                To get a FREE estimate, give us a call or fill
                out <Link href={"/contact-form"}><span className={styles.contactLink}>this form</span></Link> and
                we'll get back to you within two business days.
                </p>
            </div>
            <div className={styles.servicesContainer}>
                <div className={styles.service}>
                    <h3 className={styles.serviceHeading}>Fences</h3>
                    <p className={styles.serviceDescription}>
                        Having your fence painted or stained can not only enhance its visual appeal but also protect it
                        against weather-related damage. A fresh coat of paint or stain can revive the look of your fence,
                        making it more attractive and increasing its curb appeal. Additionally, painting or staining your fence
                        can help prevent it from rotting, warping, or cracking due to exposure to the elements.
                        With a wide range of colors and finishes available, you can choose the perfect look for your fence that
                        complements your property's overall aesthetic.
                    </p>
                </div>
                <div className={styles.service}>
                    <h3 className={styles.serviceHeading}>Decks</h3>
                    <p className={styles.serviceDescription}>
                        Deck painting or staining can revitalize the look of your outdoor space while also protecting
                        it from wear and tear. A fresh coat of paint or stain can help to prevent your deck from rotting,
                        fading, or cracking due to exposure to harsh weather conditions. Moreover, painting or staining your
                        deck can help to maintain its appearance, making it more attractive and inviting for entertaining
                        or relaxation. With a variety of colors and finishes to choose from, you can customize the look of
                        your deck to match your style and preferences. By investing in professional deck painting or staining,
                        you can transform your outdoor space into a beautiful and inviting area that you can enjoy for years to come.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default exteriorServices;