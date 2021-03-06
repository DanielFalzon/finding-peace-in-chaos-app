export const getServiceModel = (service) => {
    //Add validation
    return {
        id: service.id,
        title: service.data.title[0].text,
        contentTitle: service.data.content_title,
        summary: service.data.summary[0].text,
        slug: "/service/" + service.uid,
        pageImage: service.data.service_image,
        pageIntro: service.data.service_introduction,
        pageContent: service.data.content,
        questions: service.data.question_collapser,
        testimonials: service.data.testimonials,
        image: {
            alt: service.data.image.alt,
            url: service.data.image.url
        }
    }
}

export const getEventModel = (event) => {
    //Add validation
    return {
        testData: {
            ...event
        },
        id: event.id,
        dateTime: event.data.date_time,
        duration: event.data.duration,
        locationUrl: event.data.location.url,
        locationName: event.data.location_name,
        title: event.data.title[0].text,
        eventDetails: event.data.event_details[0].text
    }
}