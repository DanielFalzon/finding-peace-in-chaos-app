import { getPrismicDocByType } from "../../lib/api";

export const getConfig = async (req, res) => {
    try{
        const output = await getPrismicDocByType('configuration');
        const resultData = output.results[0].data;
        const config = {
            featureCards: resultData.feature_cards,
            logo: {
                image: resultData.company_logo.url,
                alt: resultData.company_logo.alt
            },
            profilePicture: {
                image: resultData.profile_picture.url,
                alt: resultData.profile_picture.alt
            }
        }
        res.status(200).json(config);
    }catch(err){
        throw new Error(err)
    }
}

export default getConfig;
