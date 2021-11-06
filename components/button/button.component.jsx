import React from "react";
import styles from './button.module.css';
import {BsArrowRightShort} from "react-icons/bs";

const Button = ({text, link}) => (
    <div className={styles['button-container']}>
        <a className={styles['button']}>
            <span className="mr-4">{text}</span>
            <BsArrowRightShort size={26} />
        </a>
    </div>
)

export default Button;