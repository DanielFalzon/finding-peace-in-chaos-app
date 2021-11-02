import { getPrismicDocByType } from "../../lib/api";

export const getHomepage = async (req, res) => {
    try{
        const output = await getPrismicDocByType('homepage');
        const resultData = output.results[0].data;

        const homepage = {
            title: resultData.title[0],
            content: resultData.content
        }
        
        res.status(200).json(homepage);
    }catch(err){
        throw new Error(err)
    }
}

export default getHomepage;