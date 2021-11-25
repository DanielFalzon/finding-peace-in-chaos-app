import React from "react";
import styles from "./footer.module.css";
import MenuItems from "../menu-items/menu-items.component";

export const Footer = () => {

    return(
        <footer className={styles["footer-container"]}>
            <div className={styles["footer-top-content"]}>
                <img className={styles["footer-icon"]} src="/fpic-logo.png"></img>
                <div className={styles["footer-menu-items-container"]}>
                    <MenuItems />
                </div>
            </div>
            <div className={styles["footer-bottom-content"]}>
                All rights reserved - {new Date().getFullYear().toString()}
            </div>
            
        </footer>
    )
    

}

export default Footer;