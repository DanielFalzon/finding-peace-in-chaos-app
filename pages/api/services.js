import { getFeaturedServices } from "../../lib/api";

const Services = async (req, res) => {
    const output = await getFeaturedServices();
    const resultData = output.results;

   const services = resultData.map((item) => {
        return {
            title: item.data.tite[0].text,
            summary: item.data.summary[0].text,
            image: {
                alt: item.data.image.alt,
                url: item.data.image.url
            }
        }
   })
    res.status(200).json(services);
}

export default Services;