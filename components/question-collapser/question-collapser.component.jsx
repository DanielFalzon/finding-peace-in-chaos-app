import React, {useState} from "react";
import { RichText } from "prismic-reactjs";
import styles from './question-collapser.module.css';

export const QuestionCollapser = ({question}) => { 

    const [active, setActive] = useState(false);

    return(
        <div className={styles['question-container']}>
            <div className={styles['question']} onClick={() => setActive(!active)}>
                <h3>{question.question[0].text}</h3>
            </div>
            <div className={active? styles['answer'] : styles['answer', 'hidden']}>
                <RichText render={question.answer} /><br />
            </div>
        </div>
    )
}
        
export default QuestionCollapser;