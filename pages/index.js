//https://nextjs.org/docs/basic-features/data-fetching
//Incremental static page regeneration
//https://prismic.io/docs/technologies/send-slices-prismic-nextjs
//Dev environment for prismic data when site is on prod

import React from 'react';
import Head from 'next/head';

import { getPrismicDocByType } from "../lib/api";
import { getFeaturedServices } from "../lib/api";
import { getServiceModel } from "../lib/models";
import { getEventModel } from "../lib/models";

import IndexTop from '../components/index-top/index-top.component';
import ServiceList from '../components/service-list/service-list.component';
import EventList from '../components/event-list/event-list.component';
import Button from '../components/button/button.component';

export const Home = ({homepageData, servicesData, eventsData}) => {
  return (
    <div>
      <Head>
        <title>Finding Peace in Chaos</title>
        <meta property="og:title" content="Finding Peace in Chaos | Homepage" key="title" />
        <meta property="og:site_name" content="findingpeaceinchaos.com.mt" key="site_name" />
      </Head>
      <h1>{homepageData.title.text}</h1>
      <IndexTop content={homepageData.content} />
      <ServiceList services={servicesData}/>
      <Button text="More Services" link="/service"/>
      <EventList events={eventsData} />
    </div>
  )
}

export const getStaticProps = async () => {

  const getHomepage = async () => {
    try{
        const output = await getPrismicDocByType('homepage');
        const resultData = output.results[0].data;

        const homepage = {
            title: resultData.title[0],
            content: resultData.content
        }
        
        return homepage
    }catch(err){
      throw new Error(err)
    }
  }

  const getHomeServices = async () => {
    try{
      const output = await getFeaturedServices();
      const resultData = output.results;

      const services = resultData.map((item) => {
        return getServiceModel(item);
      })

      return services;
    }catch(err){
      throw new Error(err);
    }
  }

  const getEvents = async () => {
    const output = await getPrismicDocByType('event');
    const resultData = output.results;

    const events = resultData.map((item) => {
        return getEventModel(item);
    })
    
    return events
}

  const [homepageData, servicesData, eventsData] = await Promise.all([
    getHomepage(),
    getHomeServices(),
    getEvents()
  ])

  return {
    props: {
      homepageData,
      servicesData,
      eventsData
    },
    revalidate: 60
  }
}

export default Home;