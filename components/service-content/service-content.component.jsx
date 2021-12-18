import React, {useState, useEffect} from "react";
import styles from "./service-content.module.css";
import Image from "next/image";
import { RichText } from "prismic-reactjs";

import Button from "../button/button.component";
import QuestionList from "../question-list/question-list.component";

const imageLoader = ({src}) => {
    return src;
}

export const ServiceContent = ({cardImage, pageImage, introContent, contentTitle, mainContent, questions}) => {
    const [image, setImage] = useState(null);
    const [seperatedContent, setSeperatedContent] = useState(null);

    const seperateContent = () => {
        const content = RichText.render(mainContent);
        let children = React.Children.toArray(content.props.children);

        let result = { leftItems: [], rightItems: [] }

        children.map((item) => {
            while(result.leftItems.length < Math.round(children.length / 2)){
                result.leftItems.push(item);
                return
            }
            result.rightItems.push(item);
        })

        setSeperatedContent(result);
    }

    useEffect(() => {
        if(pageImage.url){
            setImage(pageImage);
        } else {
            setImage(cardImage);
        }
        seperateContent();
    }, [])

    return (
        <>
            <div className={styles["service-top-container"]}>
                {image? 
                    <div className={styles["image-container"]}>
                        <Image 
                            loader={imageLoader}
                            alt={image.alt}
                            src={image.url}
                            layout="fill"
                            className={styles['image']}
                            unoptimized
                        />
                    </div>
                    :
                    <span>Skeleteon CSS HERE</span>
                }

                <div className={styles["service-intro-content"]}>
                    <RichText render={introContent} />
                </div>
                
            </div>
            <Button text="Book an Appointment" link="/contact" />
            {contentTitle[0]? 
                <h2>{contentTitle[0].text}</h2> : <span></span>
            }
            {seperatedContent?
                <div className={styles["service-main-content-container"]}>
                    <div className={styles["service-main-content"]}>{seperatedContent.leftItems}</div>
                    <div className={styles["service-main-content"]}>{seperatedContent.rightItems}</div>
                </div>
                :
                <span>Skeleteon CSS HERE</span>
            }
            {questions.length > 0?
                <>
                    <h2>Frequently Asked Questions</h2>
                    <QuestionList questions={questions} />
                </>
                :
                <></>

            }
            <Button text="Book an Appointment" link="/contact" />
        </>
    )
}

export default ServiceContent;