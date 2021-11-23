import React from "react";
import { useRouter } from "next/router";

export const ServicePage = () => {
    const router = useRouter();
    const { serviceSlug } = router.query;

    return <p>Service: {serviceSlug}</p>
}

export default ServicePage;