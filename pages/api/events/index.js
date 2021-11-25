import { getPrismicDocByType } from "../../../lib/api";
import { getEventModel } from "../../../lib/models";

export const getEvents = async (req, res) => {
    const output = await getPrismicDocByType('event');
    const resultData = output.results;

    const events = resultData.map((item) => { 
        return getEventModel(item);
    })
    
    res.status(200).json(events);
}

export default getEvents;