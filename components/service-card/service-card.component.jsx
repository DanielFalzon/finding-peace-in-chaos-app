import React from "react";
import Image from "next/image";
import styles from "./service-card.module.css";

const imageLoader = ({src}) => {
    return src;
}

const ServiceCard = ({title, summary, image}) => (
    <div className={styles["service-card-container"]}> 
        <h3 className={styles["service-card-header"]}>{title}</h3>
        <div className={styles["service-card-image-container"]} >
            <Image 
                loader={imageLoader}
                alt={image.alt}
                src={image.url}
                layout="fill"
                className={styles['image']}
                unoptimized
            />
        </div>
        <p className={styles["service-card-text"]}>{summary}</p>

        <a className={styles['service-card-button']}>
            <span className="mr-4">Read More</span>
        </a>
    </div>
)

export default ServiceCard;