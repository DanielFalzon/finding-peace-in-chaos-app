
import { useEffect } from 'react';
import axios from 'axios';

export const Home = ({config}) => {
  useEffect(() => {
    console.log(config);
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Hello there.....general kenobi</h1>
    </div>
  )
}

//Change this to get the homepage content instead
export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.BASE_URL}/api/config`);
  const config = res.data;

  return {
    props: {config}
  }
}

export default Home;