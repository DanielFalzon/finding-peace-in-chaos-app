import React, {useEffect} from "react";
import { RichText } from "prismic-reactjs";
import styles from './testimonial.module.css';
import { BsStarFill, BsStarHalf, BsStar} from "react-icons/bs"

const Testimonial = ({testimonial}) => {
    const maxStars = 5;
    const starSize = 25;
    useEffect(() => {
        console.log(testimonial);
    }, [])

    const starRating = () => {
        const stars = [];
        const hasDecimal = testimonial.rating % 1 != 0;
        const wholeRating = Math.trunc(testimonial.rating);

        for (let i = 0; i <  maxStars; i++){
            if(wholeRating == 0){
                if(hasDecimal && i == 0){
                    stars.push(<BsStarHalf size={starSize} />);
                    continue;
                }
                stars.push(<BsStar size={starSize} />);
                continue;
            }

            if(i+1 <= wholeRating){
                stars.push(<BsStarFill size={starSize} />);
                continue;
            }

            if(i+1 == wholeRating+1 && hasDecimal){
                stars.push(<BsStarHalf size={starSize} />)
                continue;
            }

            if(i+1 > wholeRating){
                stars.push(<BsStar size={starSize}/>)
            }
        }
        return stars;
    }

    return (
        <div className={styles["testimonial-container"]}>
            <div className={styles["top-container"]}>
                <div>
                    <span>{testimonial.client_name}</span><br />
                    <small>client</small>
                </div>
                <div className={styles["star-container"]}>{starRating()}</div>
            </div>
            
            <RichText render={testimonial.testimonial} />
        </div>
    )
}

export default Testimonial;