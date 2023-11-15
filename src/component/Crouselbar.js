import React from 'react'
import "./style/testimonial.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialData from './TestimonialData'
import data from "../JsonData/Education.json"

const Crouselbar = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            autoPlay={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}>
            {/* <TestimonialData /> */}
            {data['data'].slice(0, 4).map((item) => (
                <TestimonialData key={item.id} logo={item.logo} collegeName={item.collegeName}  specialization={item.specialization} duration={`${item.from} - ${item.to}`} description={item.extraActivity} />
            ))}
        </Carousel>

    )
}

export default Crouselbar
