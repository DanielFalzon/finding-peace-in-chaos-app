export const getServiceModel = (service) => {
    return {
        id: service.id,
        title: service.data.title[0].text,
        summary: service.data.summary[0].text,
        slug: "/service/" + service.slugs[0],
        image: {
            alt: service.data.image.alt,
            url: service.data.image.url
        }
    }
}