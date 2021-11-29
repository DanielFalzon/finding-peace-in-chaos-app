import React from "react";
import { RichText } from "prismic-reactjs";

export const QuestionCollapser = ({questions}) => (
    <>
        {questions.map(item => {
            return (
                <div>
                    <RichText render={item.question} /> <br />
                    <RichText render={item.answer} /><br />
                </div>
            )
        })}
    </>
)

export default QuestionCollapser;