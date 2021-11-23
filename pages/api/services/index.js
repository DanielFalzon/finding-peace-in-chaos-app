import { getPrismicDocByType } from "../../../lib/api";
import { getServiceModel } from "../../../lib/models";

export const getServices = async (req, res) => {
    const output = await getPrismicDocByType('service');
    const resultData = output.results;

    const services = resultData.map((item) => { 
        return getServiceModel(item);
    })
    
    res.status(200).json(services);
}

export default getServices;