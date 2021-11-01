import React from "react";
import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa";
import styles from './contact-icons.module.css';

const ContactIcons = ({color='purple', facebookColor='blue-600', size=38}) => (
    <div className={styles['contact-icons']}>
        <span><FaPhone className={`text-${color}`} size={size}/></span>
        <span><FaEnvelope className={`text-${color}`} size={size}/></span>
        <span><FaFacebook className={`text-${facebookColor}`} size={size}/></span>
    </div>
)

export default ContactIcons