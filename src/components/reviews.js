import React from 'react'
import styles from '../styles/reviews.module.css'

const Reviews = () => {
    return (
        <>
            <h1 className={styles.heading}>Here's what people are saying</h1>
            <div className={styles.reviewsContainer}>
                <div className={styles.review}>
                    <img src="/Lacey-Brown-google-profile-image.png" className={styles.profilePicture} alt="google profile image" />
                    <h1 className={styles.name}>Lacey Brown</h1>
                    <div className={styles.rating}>
                        <img src="/star.svg" alt="rating star" className={styles.star} />
                        <img src="/star.svg" alt="rating star" className={styles.star} />
                        <img src="/star.svg" alt="rating star" className={styles.star} />
                        <img src="/star.svg" alt="rating star" className={styles.star} />
                        <img src="/star.svg" alt="rating star" className={styles.star} />
                    </div>
                    <p className={styles.comment}>
                        I can't say enough great things about Alec and the quality of work he does!
                        He's very professional, meticulous and trustworthy. Hire him, you will not be disappointed!
                        I will be using him for all my paint projects from now on.
                    </p>
                </div>
                <div className={styles.review}>
                    <img src="/Paige-Coale-google-profile-image.png" className={styles.profilePicture} alt="google profile image" />
                    <h1 className={styles.name}>Paige Coale</h1>
                    <div className={styles.rating}>
                        <img src="/star.svg" alt="rating star" className={styles.star} />
                        <img src="/star.svg" alt="rating star" className={styles.star} />
                        <img src="/star.svg" alt="rating star" className={styles.star} />
                        <img src="/star.svg" alt="rating star" className={styles.star} />
                        <img src="/star.svg" alt="rating star" className={styles.star} />
                    </div>
                    <p className={styles.comment}>
                        Alec did a phenomenal job on our house. He was very professional, responsive,
                        and even finished the job ahead of schedule. 
                        You can really tell that he cares about the quality of his work.
                        After this experience, I wouldn't consider hiring anyone else.
                        Easy 5 stars, would highly recommend!
                    </p>
                </div>
                <div className={styles.review}>
                    <img src="/Nicki-Drake-google-profile-image.png" className={styles.profilePicture} alt="google profile image" />
                    <h1 className={styles.name}>Nicki Drake</h1>
                    <div className={styles.rating}>
                        <img src="/star.svg" alt="rating star" className={styles.star} />
                        <img src="/star.svg" alt="rating star" className={styles.star} />
                        <img src="/star.svg" alt="rating star" className={styles.star} />
                        <img src="/star.svg" alt="rating star" className={styles.star} />
                        <img src="/star.svg" alt="rating star" className={styles.star} />
                    </div>
                    <p className={styles.comment}>
                        Alec takes great care in his work! His experience was clear in the work that he did.
                        Will definitely using Fessler Painting again!!
                    </p>
                </div>
            </div>
        </>
    );
};

export default Reviews;