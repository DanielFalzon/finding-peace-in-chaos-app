import React, { useEffect } from "react";

import ServiceList from "../../components/service-list/service-list.component";

import { getPrismicDocByType } from "../../lib/api";
import { getServiceModel } from "../../lib/models";

export const ServicesPage = ({servicesData}) => {
  
  useEffect(() => {
    console.log(servicesData);
  }, [])

  return (
      <ServiceList services={servicesData}/>
  )
}

export const getStaticProps = async () => {
  
  const getServices = async () => {

    const output = await getPrismicDocByType('service');
    const resultData = output.results;

    const services = resultData.map((item) => { 
        return getServiceModel(item);
    })
    
    return services;
  }

  const servicesData = await getServices();

  return {
    props: {
      servicesData
    }
  }
}

export default ServicesPage;