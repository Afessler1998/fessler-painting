import React from 'react'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'
import homeInteriorImg from '../../public/stock-photo-home-interior-2.jpg'
import styles from '../styles/services.module.css'

const interiorServices = () => {
    return (
        <div className="spacingWrapper">
            <Header />
            <Hero
                heading={"Transform"}
                text={"your space with our full suite of interior painting services"}
                img={homeInteriorImg}
                imgAlt={"kitchen interior"}
            />
            <div className={styles.mainTextContainer}>
                <h2 className={styles.mainHeading}>Interior Painting Services</h2>
                <p className={styles.mainParagraph}>
                    Fessler Painting is the right company for your interior painting job because we are skilled and experienced
                    professionals who are committed to providing exceptional customer service and high-quality results.
                    With 10 years of experience, we have the knowledge and expertise to handle any interior painting project,
                    big or small. We take pride in our work and pay close attention to detail to ensure a flawless finish every time.
                    We use only the highest quality paints and materials to ensure long-lasting results,
                    and we work closely with our clients to ensure that their vision is brought to life.
                    Additionally, we are fully licensed and insured, providing our clients with the peace of mind
                    they need when working with a contractor. Choose Fessler Painting for your interior painting needs,
                    and let us help you transform your space into the beautiful and inviting home you've always dreamed of.
                    To get a FREE estimate, give us a call or fill
                    out <Link href={"https://forms.gle/rkWsRgqs4vtFD6WZ7"}><span className={styles.contactLink}>this form</span></Link> and
                    we'll get back to you within two busines days.
                </p>
            </div>
            <div className={styles.servicesContainer}>
                <div className={styles.service}>
                    <h3 className={styles.serviceHeading}>Accent Walls</h3>
                    <p className={styles.serviceDescription}>
                        Adding an accent wall is an easy and cost-effective way to breathe new life into any room.
                        An accent wall can instantly elevate your space and create a focal point.
                        It's a simple yet effective way to add visual interest and personality to any room in your home.
                    </p>
                </div>
                <div className={styles.service}>
                    <h3 className={styles.serviceHeading}>Trim and Doors</h3>
                    <p className={styles.serviceDescription}>
                        Painting or staining your trim can enhance the overall aesthetic appeal of your home's interior.
                        Freshly painted or stained trim adds a crisp and polished look,
                        creating a visually appealing contrast against the walls.
                        It also protects the wood from wear and tear,
                        ensuring your home's trim looks beautiful and lasts for years to come.
                    </p>
                </div>
                <div className={styles.service}>
                    <h3 className={styles.serviceHeading}>Cabinets</h3>
                    <p className={styles.serviceDescription}>
                        Painting or staining your cabinets is an affordable way to give your kitchen or bathroom a
                        fresh and updated look without the expense of a full renovation. With a wide range of colors
                        and finishes to choose from, you can transform your cabinets to match any decor style and
                        create a welcoming and inviting space.
                    </p>
                </div>
                <div className={styles.service}>
                    <h3 className={styles.serviceHeading}>Hardwood Floors</h3>
                    <p className={styles.serviceDescription}>
                        Properly finishing your hardwood floors not only enhances their natural beauty but also
                        protects them from wear and tear. A quality finish will make your floors more durable, easy to clean,
                        and resistant to scratches, stains, and water damage. With a variety of finishes available,
                        from oil-based to water-based and matte to high gloss,
                        you can choose the perfect one to complement your decor style and bring out the best in your hardwood floors.
                    </p>
                </div>
                <div className={styles.service}>
                    <h3 className={styles.serviceHeading}>Popcorn Ceiling Removal</h3>
                    <p className={styles.serviceDescription}>
                        Removing a popcorn ceiling can transform the look and feel of any room,
                        giving it a fresh, modern, and updated look. Popcorn ceilings were a popular trend in the past,
                        but they can be difficult to clean and may contain asbestos, making them a health hazard.
                        By removing them, you'll create a smoother, cleaner, and safer surface that can add value to your home.
                        Plus, removing popcorn ceilings can also improve the acoustics of your room,
                        as the textured surface tends to trap sound.
                    </p>
                </div>
                <div className={styles.service}>
                    <h3 className={styles.serviceHeading}>Wallpaper Removal</h3>
                    <p className={styles.serviceDescription}>
                        Hiring us for wallpaper removal can save you time, stress, and the risk of damaging your walls.
                        Wallpaper removal requires specific tools and techniques, and without proper knowledge and experience,
                        it can be a time-consuming and frustrating process. Our experts will have the skills and equipment
                        to remove the wallpaper efficiently, leaving your walls in pristine condition.
                        We will assess any underlying damage, prepare the surface for new wallpaper or paint,
                        and ensure that the job is done safely and effectively.
                    </p>
                </div>
                <div className={styles.service}>
                    <h3 className={styles.serviceHeading}>Murals</h3>
                    <p className={styles.serviceDescription}>
                        A mural is not just a piece of art, it's a statement. It can evoke emotions, spark conversation,
                        and create a focal point that will enhance the overall look and feel of your space.
                        Whether you're looking to add some color and vibrancy to a dull room or showcase your brand's values
                        and identity in a corporate office, a mural is a powerful and effective way to achieve your vision.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default interiorServices;