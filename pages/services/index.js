import React, { useEffect } from "react";

import ServiceList from "../../components/service-list/service-list.component";

export const Services = ({servicesData}) => {
    return (
        <ServiceList services={servicesData}/>
    )
}

export const getStaticProps = async () => {

    const servicesRes = await fetch(`${process.env.BASE_URL}/api/services`);
    const servicesData = await servicesRes.json();

    return {
      props: {
        servicesData
      }
    }
  }

export default Services;