import React from "react";
import { RichText } from "prismic-reactjs";
import Collapsible from "react-collapsible";
import styles from './question-collapser.module.css';

export const QuestionCollapser = ({question}) => { 
    return(
        <div className={styles['question-container']}>
            <Collapsible 
                trigger={question.question[0].text}
                triggerTagName="h3" 
                triggerClassName={styles['question']}
                triggerOpenedClassName={styles['question']}
                transitionTime={200}
            >
                <div className={styles['answer']}>   
                    <RichText render={question.answer} /><br />
                </div>
                
            </Collapsible>
        </div>
    )
}
        
export default QuestionCollapser;