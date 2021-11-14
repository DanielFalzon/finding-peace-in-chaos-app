import React from "react";
import styles from './mobile-menu.module.css'

import MenuItems from "../menu-items/menu-items.component";

const MobileMenu = ({hidden}) => (
    <div className={hidden ? styles['mobile-menu'] + " translate-x-full" : styles['mobile-menu']}>
        <div className={styles["mobile-menu-nav-items"]}>
            <MenuItems />
        </div>
    </div>
)

export default MobileMenu;