import React from "react";
import styles from "./service-list.module.css";

import ServiceCard from "../service-card/service-card.component";

const ServiceList = ({services}) => (
    <>
        <h2>Available Services</h2>
        <div className={styles['service-list-container']}>
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
    </>
)

export default ServiceList;