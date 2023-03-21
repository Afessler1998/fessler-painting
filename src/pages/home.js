import React from 'react'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/home.module.css'

const home = () => {
    return (
        <>
            <Header />
                {/*REMOVE THIS BEFORE PUBLISHING SITE*/}
                <h1 className={styles.underConstruction}>Fessler Painting is currently under construction.
                Please visit again at a future date to view the full completed website</h1>
                <p className={styles.mainParagraph}>
                    At Fessler Painting, we specialize in transforming walls and spaces with our interior and exterior painting
                    services. Our skilled professionals have 10 years of experience and are dedicated to delivering exceptional
                    results for every project we undertake. Whether you need a fresh coat of paint for your living room,
                    a complete exterior painting overhaul, or any other painting service in between, we have the expertise and knowledge to get the job done right.
                    Our tagline "transforming walls, transforming spaces" embodies our commitment to enhancing the aesthetic appeal and
                    overall feel of any space we work on. We use only the highest quality paints and materials, combined with expert
                    techniques and attention to detail, to ensure that our clients' visions are brought to life.
                    With Fessler Painting, you can trust that your painting project is in good hands,
                    and we will work closely with you to ensure your complete satisfaction.
                    To get a FREE estimate, give us a call or fill
                    out <Link href={"/contact-form"}><span className={styles.contactLink}>this form</span></Link> and
                    we'll get back to you within two business days.
                </p>
                <Link href={"/interior-services"}>
                    <div className={styles.serviceSection}>
                        <h2 className={styles.sectionHeading}>Interior Painting</h2>
                        <p className={styles.sectionDescription}>
                            Transform the look and feel of your space, making it more attractive, welcoming, and inviting.
                            Whether you want to create a cozy and intimate atmosphere or a bright and modern space,
                            a fresh coat of paint can help you achieve your desired aesthetic.
                        </p>
                    </div>
                </Link>
                <Link href={"/exterior-services"}>
                    <div className={styles.serviceSection}>
                        <h2 className={styles.sectionHeading}>Exterior Painting</h2>
                        <p className={styles.sectionDescription}>
                            Exterior painting can enhance the curb appeal and overall value of your property while protecting it
                            from the elements. A fresh coat of paint can update the look of your home or business,
                            making it more attractive and welcoming to visitors and guests.
                        </p>
                    </div>
                </Link>
            <Footer />
        </>
    );
};

export default home;