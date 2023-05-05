import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import homeExteriorImg2 from '../../public/stock-photo-home-exterior-2.png'
import homeExteriorImg from '../../public/stock-photo-home-exterior.jpg'
import homeInteriorImg from '../../public/stock-photo-home-interior.jpg'
import arrowRightSvg from '../../public/arrow-right.svg'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Reviews from '../components/reviews'
import styles from '../styles/home.module.css'

const home = () => {
    return (
        <div className="spacingWrapper">
            <Header />
            <Hero
                heading="Fessler Painting"
                text="Proudly serving the Des Moines area with unparalleled expertise and craftsmanship"
                img={homeExteriorImg2}
                imgAlt="home exterior"
            />
            <div className={styles.mainSection}>
                <p className={styles.mainParagraph}>
                At Fessler Painting, we specialize in transforming walls and spaces with our interior and exterior painting services.
                Our skilled professionals have 10 years of experience and are dedicated to delivering exceptional results for every
                project we undertake. Whether you need a fresh coat of paint for your living room, a complete exterior painting overhaul,
                or any other painting service in between, we have the expertise and knowledge to get the job done right.
                Our tagline "transforming walls, transforming spaces" embodies our commitment to enhancing the aesthetic
                appeal and overall feel of any space we work on. We use only the highest quality paints and materials,
                combined with expert techniques and attention to detail, to ensure that our clients' visions are brought to life.
                With Fessler Painting, you can trust that your painting project is in good hands, and we will work closely with you
                to ensure your complete satisfaction. To get a FREE estimate, give us a call or fill
                out <span className={styles.contactLink}><Link href="https://forms.gle/rkWsRgqs4vtFD6WZ7">this form</Link></span> and
                get back to you within two business days.
                </p>
                <div className={styles.serviceSection}>
                    <Image src={homeInteriorImg} alt="home interior" width={612} height={420} className={styles.serviceSectionImg} />   
                    <div className={styles.serviceSectionTextContainer}>
                        <h2 className={styles.sectionHeading}>Interior Painting</h2>
                        <p className={styles.sectionDescription}>
                            Transform the look and feel of your space, making it more attractive, welcoming, and inviting.
                            Whether you want to create a cozy and intimate atmosphere or a bright and modern space,
                            a fresh coat of paint can help you achieve your desired aesthetic.
                        </p>
                        <div className={styles.buttonPositioner}>
                            <Link href={"/interior-services"}>
                                <div className={styles.serviceSectionButton}>
                                    <span>Interior Services</span>
                                    <Image src={arrowRightSvg} alt="arrow right" width={500} height={500} className={styles.buttonArrow} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.serviceSection}>
                    <Image src={homeExteriorImg} alt="home exterior" width={612} height={420} className={styles.serviceSectionImg} />
                    <div className={styles.serviceSectionTextContainer}>
                        <h2 className={styles.sectionHeading}>Exterior Painting</h2>
                        <p className={styles.sectionDescription}>
                            Exterior painting can enhance the curb appeal and overall value of your property while protecting it
                            from the elements. A fresh coat of paint can update the look of your home or business,
                            making it more attractive and welcoming to visitors and guests.
                        </p>
                        <div className={styles.buttonPositioner}>
                            <Link href={"/exterior-services"}>
                                <div className={styles.serviceSectionButton}>
                                    <span>Exterior Services</span>
                                    <Image src={arrowRightSvg} alt="arrow right" width={500} height={500} className={styles.buttonArrow} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Reviews />
            <Footer />
        </div>
    );
};

export default home;