import React, { useContext, useEffect } from "react";
import Image from "next/image";
import styles from  './profile.module.css';
import {ConfigurationContext} from "../../providers/configuration.provider";

import FeatureCard from "../feature-card/feature-card.component";

const imageLoader = ({src}) => {
    return src;
}

const Profile = () => {
    const {configuration, loading} = useContext(ConfigurationContext);

    return (<>
        {loading?
            <div className={styles["profile-container animate-pulse"]} >
                <div className={styles["image bg-gray-300 rounded-full "]}></div>
            </div> 
            :
            <div className={styles["profile-container"]} >
                <div className={styles["image-container"]}>
                    <Image 
                        loader={imageLoader}
                        alt="Profile"
                        src={configuration.profilePicture.image}
                        layout="fill"
                        className={styles['image']}
                        priority
                        unoptimized
                    />
                </div>
                
                <div className={styles["feature-cards-container"]}>
                    {configuration.featureCards.map(({...otherProps}, index) => (
                        <FeatureCard key={index} {...otherProps} />
                    ))}
                </div> 
            </div>
        }
        </>)
        
}

export default Profile;