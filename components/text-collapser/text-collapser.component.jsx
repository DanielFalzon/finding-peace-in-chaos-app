import React, {useEffect, useState} from "react";

const TextCollapser = ({content}) => {
    const [paragraphs, setParagraphs] = useState(null);
    const [excerpt, setExcerpt] = useState(null)

    //If on desktop, add a read more button and render the dditional paragraphs

    useEffect(() => {
        setParagraphs(content);
        if(content) setExcerpt(content[0])
    }, [content])

    return(
        <>
            <p className="mb-6">
            { excerpt ? excerpt.text : ''}
            </p>
        </>
    )
}

export default TextCollapser;