
import { useEffect, useState } from 'react';
import axios from 'axios';
import TextCollapser from '../components/text-collapser/text-collapser.component';
import Profile from '../components/profile/profile.component';

export const Home = ({homepageData}) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(homepageData.content);
  }, [homepageData])

  return (
    <div className="container mx-auto">
      <h1>{homepageData.title.text}</h1>
      <TextCollapser content={content} />
      <Profile />
    </div>
  )
}

//Change this to get the homepage content instead
export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.BASE_URL}/api/homepage`);
  const homepageData = res.data;

  return {
    props: {homepageData}
  }
}

export default Home;