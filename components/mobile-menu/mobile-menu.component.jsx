import React from "react";
import styles from './mobile-menu.module.css'

import ContactIcons from "../contact-icons/contact-icons.component";

const MobileMenu = ({hidden}) => (
    <div className={hidden ? styles['mobile-menu'] + " translate-x-full" : styles['mobile-menu']}>
        <div className={styles["mobile-menu-nav-items"]}>
            <a href="http://localhost:3000#boop">home</a>
            <a href="http://localhost:3000#boop">services</a>
            <a href="http://localhost:3000#boop">events</a>
        </div>
        <ContactIcons />
    </div>
)

export default MobileMenu;