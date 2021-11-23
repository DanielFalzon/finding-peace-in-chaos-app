import React from "react";
import Image from "next/image";
import styles from "./service-card.module.css";
import Link from "next/link";

const imageLoader = ({src}) => {
    return src;
}

const ServiceCard = ({title, summary, image, slug}) => (
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
        <Link href={slug}>
            <a className={styles['service-card-button']}>
                <span className="mr-4">Read More</span>
            </a>
        </Link>
    </div>
)

export default ServiceCard;