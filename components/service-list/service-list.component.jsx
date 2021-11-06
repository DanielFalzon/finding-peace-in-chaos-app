import React from "react";
import ServiceCard from "../service-card/service-card.component";

const ServiceList = ({services}) => (
    <>
        <h2>Available Services</h2>
        {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
        ))}
    </>
)

export default ServiceList;