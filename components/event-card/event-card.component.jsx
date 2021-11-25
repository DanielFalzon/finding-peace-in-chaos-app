import React, {useState, useEffect} from "react";
import styles from "./event-card.module.css";
import { HiLocationMarker } from "react-icons/hi";
import {BsFillClockFill} from "react-icons/bs";
import Link from "next/link";

export const EventCard = ({dateTime, duration, eventDetails, locationUrl, locationName, title}) => {
    const [eventDate, setEventDate] = useState(null);
    const [eventTime, setEventTime] = useState(null);

    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]

    const formatDate = () => {
        const dateTimeObj = new Date(dateTime);
        const date = months[dateTimeObj.getMonth()] + " " + dateTimeObj.getDate().toString().padStart(2, "0");
        const time = dateTimeObj.getHours().toString().padStart(2, "0") + ":" +  dateTimeObj.getMinutes().toString().padStart(2, "0");

        setEventDate(date);
        setEventTime(time);
    }

    useEffect(() => {
        formatDate();
    }, [])


    return(
        <div className={styles['event-card-container']}>
            <div className={styles['event-card-top-details']}>
                <div className={styles['date-time-container']}>
                    <span>{eventDate}</span>
                    <span>{eventTime}</span>
                </div>
                <div className={styles['location-container']}>
                    {/* <span>{locationUrl}</span> */}
                    <div className={styles["location-text"]}>{locationName}</div>
                    <a target="_blank" href={locationUrl}>
                        <HiLocationMarker size={35} />
                    </a>                    
                </div>
            </div>
            
            <div className={styles['event-card-description']}>
                <div className={styles['event-duration']}>
                    <BsFillClockFill size={20} />
                    <span className={styles['event-duration-text']}>{duration} Days</span>
                </div>
                <h3>{title}</h3>
                <p>{eventDetails}</p>

                <Link href="/contact" >
                    <div className={styles['event-card-button']} >
                        <span  className="mr-4">Book Now!</span>
                    </div>
                    
                </Link>
            </div>
            
        </div>
    )
}

export default EventCard;

