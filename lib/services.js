import { getPrismicDocByType, getPrismicDocBySlug } from "./api"
import { getServiceModel } from "./models";

export const getAllServiceUids = async () => {
    const output = await getPrismicDocByType('service');
    const resultData = output.results;

    const services = resultData.map((item) => { 
        return {
            params: {
                uid: item.uid
            }
        }
    })
    
    return services;
}

export const getService = async (uid) => {
    const output = await getPrismicDocBySlug(uid);
    const services = getServiceModel(output);
    
    return services;
}

export default getService;