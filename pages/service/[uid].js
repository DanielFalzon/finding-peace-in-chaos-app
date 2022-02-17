import React, {useEffect} from "react";
import { getAllServiceUids, getService } from "../../lib/services";
import ServiceContent from "../../components/service-content/service-content.component";

export const ServicePage = ({ serviceData }) => { 
    
    useEffect(() => {
        console.log(serviceData)
    })

    return(
        <>
            <h1>{serviceData.title}</h1>
            <ServiceContent
                cardImage={serviceData.image}
                pageImage={serviceData.pageImage}
                introContent={serviceData.pageIntro}
                contentTitle={serviceData.contentTitle}
                mainContent={serviceData.pageContent}
                questions={serviceData.questions}
                testimonials={serviceData.testimonials}
            />
        </>
    )
}

export const getStaticPaths = async () => {
    const paths = await getAllServiceUids();

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const serviceData = await getService(params.uid);

    return{
        props: {
            serviceData
        },
        revalidate: 60
    }
}

export default ServicePage;