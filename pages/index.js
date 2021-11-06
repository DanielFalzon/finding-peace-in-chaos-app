
import { useEffect, useState } from 'react';

import TextCollapser from '../components/text-collapser/text-collapser.component';
import Profile from '../components/profile/profile.component';
import Button from '../components/button/button.component';
import ServiceList from '../components/service-list/service-list.component';

export const Home = ({homepageData, servicesData}) => {

  return (
    <div className="container mx-auto">
      <h1>{homepageData.title.text}</h1> 
      <TextCollapser content={homepageData.content} /> 
      <Profile />
      <Button text="Contact Me" />
      <ServiceList services={servicesData}/>
    </div>
  )
}

export const getStaticProps = async () => {

  const [homepageData, servicesData] = await Promise.all([
    fetch(`${process.env.BASE_URL}/api/homepage`).then(r => r.json()),
    fetch(`${process.env.BASE_URL}/api/services`).then(r => r.json()),
  ])

  return {
    props: {
      homepageData,
      servicesData
    }
  }
}

export default Home;