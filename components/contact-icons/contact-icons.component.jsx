import React, {useEffect, useState} from "react";
import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa";
import styles from './contact-icons.module.css';

const ContactIcons = ({color='purple', facebookColor='blue-600', size=38, widthClass='w-full', withBackground=false}) => { 
    
    const [containerClasses, setContainerClasses] = useState([]);

    useEffect(() => {
        let classes = [
            styles['contact-icons'],
            widthClass,
            'mx-auto'
        ]

        if(withBackground) classes.push(styles['contact-icons__background']);

        setContainerClasses(classes);
    }, [])

    return(
        <div className={containerClasses.join(' ')} >
            <span><FaPhone className={`text-${color}`} size={size}/></span>
            <span><FaEnvelope className={`text-${color}`} size={size}/></span>
            <span><FaFacebook className={`text-${facebookColor}`} size={size}/></span>
        </div>
    )
}

export default ContactIcons