import React, {useEffect, useState} from "react";
import styles from './text-collapser.module.css';

const TextCollapser = ({content}) => {
    const [paragraphs, setParagraphs] = useState(null);
    const [excerpt, setExcerpt] = useState(null)

    //If on desktop, add a read more button and render the dditional paragraphs

    useEffect(() => {
        setParagraphs(content);
        if(content) setExcerpt(content[0])
        console.log(paragraphs);
    }, [content])

    return(
        <div className={styles['container']}>
            <p className={styles["mobile-text"]}>
                { excerpt ? excerpt.text : ''}
            </p>
            <div className={styles["desktop-text"]}>
                { paragraphs ? paragraphs.slice(0,2).map(({text}, index) => (
                    <div key={index}>
                        <p>{text}</p><br/>
                    </div>
                )): ""}
            </div>
            
        </div>
    )
}

export default TextCollapser;