import Button from '../components/button/button.component';
import ServiceList from '../components/service-list/service-list.component';
import IndexTop from '../components/index-top/index-top.component';

export const Home = ({homepageData, servicesData}) => {

  return (
    <div >
      <h1>{homepageData.title.text}</h1>
      <IndexTop content={homepageData.content} />

      <ServiceList services={servicesData}/>
      <Button text="More Services" link="/service"/>
    </div>
  )
}

export const getStaticProps = async () => {

  const [homepageData, servicesData] = await Promise.all([
    fetch(`${process.env.BASE_URL}/api/homepage`).then(r => r.json()),
    fetch(`${process.env.BASE_URL}/api/home-services`).then(r => r.json()),
  ])

  return {
    props: {
      homepageData,
      servicesData
    }
  }
}

export default Home;