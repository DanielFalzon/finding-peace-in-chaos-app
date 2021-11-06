import Prismic from '@prismicio/client';

const REPOSITORY = 'finding-peace-in-chaos';
const REF_API_URL = `https://${REPOSITORY}.cdn.prismic.io/api/v2`;
const API_TOKEN = process.env.PRISMIC_TOKEN;

const PrismicClient = Prismic.client(REF_API_URL, {
    accessToken: API_TOKEN,
})

//This function for now will only be used to get a single type
export const getPrismicDocByType = async (documentType) => {
    const api = await PrismicClient.getApi();
    const res = await api.query(Prismic.Predicates.at('document.type', documentType));

    return res;
} 

//Check how to pass params via predicates.
export const getFeaturedServices = async () => {
    const api = await PrismicClient.getApi();
    const res = await api.query([
        Prismic.Predicates.at('document.type', 'service'),
        Prismic.Predicates.at('my.service.featured', true)
    ]);

    return res;
}