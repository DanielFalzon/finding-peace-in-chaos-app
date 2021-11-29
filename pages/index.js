//https://nextjs.org/docs/basic-features/data-fetching
//Incremental static page regeneration
//https://prismic.io/docs/technologies/send-slices-prismic-nextjs
//Dev environment for prismic data when site is on prod

import React, { useEffect } from 'react';

import IndexTop from '../components/index-top/index-top.component';
import ServiceList from '../components/service-list/service-list.component';
import EventList from '../components/event-list/event-list.component';
import Button from '../components/button/button.component';

export const Home = ({homepageData, servicesData, eventsData}) => {

  useEffect(() => {
    console.log(eventsData);
  }, [])

  return (
    <div >
      <h1>{homepageData.title.text}</h1>
      <IndexTop content={homepageData.content} />
      <ServiceList services={servicesData}/>
      <Button text="More Services" link="/service"/>
      <EventList events={eventsData} />
    </div>
  )
}

export const getStaticProps = async () => {

  const [homepageData, servicesData, eventsData] = await Promise.all([
    fetch(`${process.env.BASE_URL}/api/homepage`).then(r => r.json()),
    fetch(`${process.env.BASE_URL}/api/home-services`).then(r => r.json()),
    fetch(`${process.env.BASE_URL}/api/events`).then(r => r.json())
  ])

  return {
    props: {
      homepageData,
      servicesData,
      eventsData
    }
  }
}

export default Home;