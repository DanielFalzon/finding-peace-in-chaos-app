import React from "react";
import styles from "./contact-card.module.css";
import Image from "next/image";

import ContactIcons from "../contact-icons/contact-icons.component";

export const ContactCard = () => {
    return (
        <div className={styles["contact-card-container"]}>
            <h1 className={styles["inverse-h3"]}>
                Contact Me
            </h1>
            <div className={styles["envelope-image-container"]}>
                <Image 
                    src="/envelope.svg" 
                    layout="fill"
                    className={styles['envelope-image']}
                    priority
                    unoptimized
                />
            </div>
            <div className={styles["contact-icons-container"]}>
                <ContactIcons color="purple" />
            </div>
            
        </div>
    )
}

export default ContactCard;