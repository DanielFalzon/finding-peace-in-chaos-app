
import { useEffect, useState } from 'react';

import TextCollapser from '../components/text-collapser/text-collapser.component';
import Profile from '../components/profile/profile.component';
import Button from '../components/button/button.component';

export const Home = ({homepageData, servicesData}) => {
  const [content, setContent] = useState(null);
  const [services, setServices] = useState(null);

  useEffect(() => {
    setContent(homepageData.content);
    console.log(servicesData);
  }, [homepageData])

  return (
    <div className="container mx-auto">
      <h1>{homepageData.title.text}</h1>
      <TextCollapser content={content} />
      <Profile />
      <Button text="Contact Me" />
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