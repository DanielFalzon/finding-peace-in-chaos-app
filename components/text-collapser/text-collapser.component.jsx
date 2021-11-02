import React, {useEffect, useState} from "react";

const TextCollapser = ({content}) => {
    const [paragraphs, setParagraphs] = useState(null);

    //If on desktop, add a read more button and render the dditional paragraphs

    useEffect(() => {
        setParagraphs(content);
        console.log(content);
    }, [content])

    return(
        <p className="mb-6">
            tes
        </p>
    )
}

export default TextCollapser;