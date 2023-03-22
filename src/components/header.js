import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "../styles/header.module.css"

const header = () => {
    const [active, setActive] = useState(false);
    const router = useRouter();
    const { pathname } = router;

    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
                <Link href={"/"}><img src="/fessler-painting-logo.svg" alt="Fessler Painting Logo" className={styles.headerLogo} /></Link>
                <a className={styles.phoneNumber} href="tel:515-238-4466"><div>515-238-4466</div></a>
            </div>
            <div className={styles.headerBottom}>
                <Link href={"/"}><h1 className={pathname === "/interior-services" ? styles.headingSelected : styles.heading}>Fessler Painting</h1></Link>
                <ul className={active ? styles.navListActive : styles.navList}>
                    <li className={styles.navItem}>
                        <div className={pathname === "/interior-services" ? styles.selectedNavButton : styles.navButton}><Link href={"/interior-services"}>Interior</Link></div>
                    </li>
                    <li className={styles.navItem}>
                        <div className={pathname === "/exterior-services" ? styles.selectedNavButton : styles.navButton}><Link href={"/exterior-services"}>Exterior</Link></div>
                    </li>
                    <li className={styles.navItem}>
                        <div className={pathname === "/why-us" ? styles.selectedNavButton : styles.navButton}><Link href={"/why-us"}>Why us?</Link></div>
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
    );
};

export default header;