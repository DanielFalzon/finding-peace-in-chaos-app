import React from "react";
import EventCard from "../event-card/event-card.component";
import styles from "./event-list.module.css";

export const EventList = ({events}) => (
    <>
        <h2 id="events">Upcoming Events</h2>
        <div className={styles['event-list-container']}>
            {events.map((event, index) => (
                <EventCard key={index} {...event} />
            ))}
        </div>
    </>
    

)

export default EventList