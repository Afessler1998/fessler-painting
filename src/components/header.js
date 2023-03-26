import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "../styles/header.module.css"

const header = () => {
    const [active, setActive] = useState(false);
    const router = useRouter();
    const { pathname } = router;

    return (
        <>  
            <div onClick={() => setActive(!active)} className={active ? styles.pageMaskActive : styles.pageMask}></div>
            <header className={styles.header}>
                <div className={styles.headerTop}>
                    <h1 className={styles.heading}><Link href="/">Fessler Painting</Link></h1>
                    <img src="/fessler-painting-logo.svg" alt="Fessler Painting Logo" className={styles.headerLogo} />
                    <a className={styles.phoneNumber} href="tel:515-238-4466"><div>515-238-4466</div></a>
                </div>
                <div className={styles.headerBottom}>
                    <div className={styles.tagline}>Transforming Walls, Transforming Spaces</div>
                    <ul className={active ? styles.navListActive : styles.navList}>
                        <li className={styles.navItem}>
                            <div className={pathname === "/" ? styles.selectedNavButton : styles.navButton}><Link href={"/"}>Home</Link></div>
                            <img src="/brushstroke.svg" alt="brushstroke" className={styles.brushstroke} />
                        </li>
                        <li className={styles.navItem}>
                            <div className={pathname === "/interior-services" ? styles.selectedNavButton : styles.navButton}><Link href={"/interior-services"}>Interior</Link></div>
                            <img src="/brushstroke.svg" alt="brushstroke" className={styles.brushstroke} />
                        </li>
                        <li className={styles.navItem}>
                            <div className={pathname === "/exterior-services" ? styles.selectedNavButton : styles.navButton}><Link href={"/exterior-services"}>Exterior</Link></div>
                            <img src="/brushstroke.svg" alt="brushstroke" className={styles.brushstroke} />
                        </li>
                        <li className={styles.navItem}>
                            <div className={pathname === "/why-us" ? styles.selectedNavButton : styles.navButton}><Link href={"/why-us"}>Why us?</Link></div>
                            <img src="/brushstroke.svg" alt="brushstroke" className={styles.brushstroke} />
                        </li>
                    </ul>
                    <div className={active ? styles.menuActive : styles.menu} onClick={() => {
                        setActive(!active);
                    }}>
                        <span className={styles.menuBar} onClick={() => setActive(!active)}></span>
                        <span className={styles.menuBar} onClick={() => setActive(!active)}></span>
                        <span className={styles.menuBar} onClick={() => setActive(!active)}></span>
                    </div>
                </div>
            </header>
        </>
    );
};

export default header;