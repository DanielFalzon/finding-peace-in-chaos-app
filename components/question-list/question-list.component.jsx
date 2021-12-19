import React from "react";
import styles from './question-list.module.css';
import QuestionCollapser from "../question-collapser/question-collapser.component";

export const QuestionList = ({questions}) => (
    <div className={styles['question-list-container']}>
        {questions.map((item, index) => {
            return (
                <>
                    {"question_" + index}
                    <QuestionCollapser key={"question_" + index} question={item}/>
                    
                </>
            )
        })}
    </div>
)

export default QuestionList;