import React from "react";
import styles from "./footer.module.css";
import MenuItems from "../menu-items/menu-items.component";
import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa";

export const Footer = () => {

    return(
        <footer className={styles["footer-container"]}>
            <div className={styles["footer-top-content"]}>
                
                <div className={styles["footer-menu-items-container"]}>
                    <MenuItems />
                </div>
                <img className={styles["footer-icon"]} src="/fpic-logo.png"></img>
                <div className={styles["footer-contact-icons"]}>
                    <div className={styles["footer-conctact-icons-row"]}>
                        <span><FaPhone className={`text-purple row-span-1`} size={24}/></span>
                        <span className={"ml-4"}>+356 99 77 36 47</span>
                    </div>
                    
                    <div className={styles["footer-conctact-icons-row"]}>
                        <span><FaEnvelope className={`text-purple`} size={24}/></span>
                        <span className={"ml-4"}>findingpeaceinchaos@gmail.com</span>
                    </div>  
                    
                    <span><FaFacebook className={`text-blue-600`} size={24}/></span>
                </div>
            </div>
            <div className={styles["footer-bottom-content"]}>
                All rights reserved - {new Date().getFullYear().toString()}
            </div>
            
        </footer>
    )
    

}

export default Footer;