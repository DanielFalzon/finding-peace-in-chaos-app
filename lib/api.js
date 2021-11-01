import Prismic from '@prismicio/client';

const REPOSITORY = 'finding-peace-in-chaos';
const REF_API_URL = `https://${REPOSITORY}.cdn.prismic.io/api/v2`;
const API_TOKEN = 'MC5ZWDdxcGhFQUFDUUFHYVpF.UO-_vX0h77-977-9c--_vQZjHe-_ve-_vXZZVO-_ve-_ve-_vRce77-977-9Qe-_vQMNLS7vv73vv70S';

const PrismicClient = Prismic.client(REF_API_URL, {
    accessToken: API_TOKEN,
})

export const getData = async (type) => {
    const api = await PrismicClient.getApi();
    const res = await api.query(Prismic.Predicates.at('document.type', 'configuration'));
    return res;
} 

export default getData;