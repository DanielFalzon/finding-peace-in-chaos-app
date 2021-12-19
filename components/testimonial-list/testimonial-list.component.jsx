import React, {useState, useEffect} from "react";
import Testimonial from "../testimonial/testimonial.component";

import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';
import styles from './testimonial-list.module.css';

const TestimonialList = ({testimonials}) => { 
    const [testimonialCount, setTestimonialCount] = useState(null);
    const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

    useEffect(() => {
        setTestimonialCount(testimonials.length);
    }, [])

    const [refCallback, slider] = useKeenSlider(
        {
          animationStarted() {
            updateDotCounter()
          },
        }
      )

    const updateDotCounter = () => {
        setCurrentSlideIdx(slider.current.animator.targetIdx);
    }

    const dots = () => {
        let dots = [];
        for (var count=0; count<testimonialCount; count++){
            let classes = `${styles.dot}`
            if(count == currentSlideIdx){
                classes = `${styles.dot} ${styles.selected}`
            }
            dots.push(<span key={'dot_' + count} className={classes} />);
        }
        return dots;
    }

    return(
        <>
            <div ref={refCallback} className="keen-slider">
                {testimonials.map((testimonial, index) => {
                    return(
                        <div key={index} className="keen-slider__slide">
                            <Testimonial key={"testimonial_" + index} testimonial={testimonial} />
                        </div>
                    )
                })
                }
            </div>
            <div className={styles['dots-container']}>
                {dots()}
            </div>
            
        </>
    )
}

export default TestimonialList;