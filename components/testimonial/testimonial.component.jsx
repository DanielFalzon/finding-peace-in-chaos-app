import React, {useEffect} from "react";
import { RichText } from "prismic-reactjs";

const Testimonial = ({testimonial}) => {
    useEffect(() => {
        console.log(testimonial);
    }, [])

    return (
        <>
            <span>{testimonial.client_name}</span><br/>
            <span>{testimonial.rating}</span>
            <RichText render={testimonial.testimonial} />
        </>
    )
}

export default Testimonial;