import React, { useContext, useEffect } from "react";
import styles from  './profile.module.css';
import {ConfigurationContext} from "../../providers/configuration.provider";

import FeatureCard from "../feature-card/feature-card.component";

const Profile = () => {
    const {configuration, loading} = useContext(ConfigurationContext);

    return (<>
        {loading?
            <div className={styles["profile-container animate-pulse"]} >
                <div className={styles["image bg-gray-300 rounded-full "]}></div>
            </div> 
            :
            <div className={styles["profile-container"]} >
                <img className={styles["image"]} src={configuration.profilePicture.image} alt="Profile" />
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