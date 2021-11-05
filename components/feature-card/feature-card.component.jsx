import React from "react";
import styles from './feature-card.module.css';

const FeatureCard = ({main_text, secondary_text}) => (
    <div className={styles['feature-card-container']}>
        <span className={styles['feature-card-text', 'feature-card-text--main']}>{main_text}</span>
        <span className={styles['feature-card-text', 'feature-card-text--sub']}>{secondary_text}</span>
    </div>
)

export default FeatureCard;