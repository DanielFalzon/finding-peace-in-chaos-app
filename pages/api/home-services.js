import { getFeaturedServices } from "../../lib/api";
import { getServiceModel } from "../../lib/models";

//Refactor this to go through the services api files.
//This should be in route /services/featured
const HomeServices = async (req, res) => {
    const output = await getFeaturedServices();
    const resultData = output.results;

    const services = resultData.map((item) => {
            return getServiceModel(item);
    })
    res.status(200).json(services);
}

export default HomeServices;