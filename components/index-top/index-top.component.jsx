import React from "react";
import styles from './index-top.module.css';

import TextCollapser from "../text-collapser/text-collapser.component";
import Profile from "../profile/profile.component";
import Button from "../button/button.component";

const IndexTop = ({content}) => (
    <>
    <div className={styles['index-top-container']}>
        <TextCollapser className={styles['text-collapser-container']} content={content} />
        <div>
            <Profile />

        </div>
        
    </div>
    <Button text="Contact Me" />
    </>
)

export  default IndexTop;