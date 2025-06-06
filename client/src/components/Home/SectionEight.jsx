import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionEight = () => {
    const [display, setDisplay] = useState(true);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return <>
        <div >
            <div className="mx-5" style={{ display: display ? "block" : "none" }}>
                <Slider {...settings}>
                    <div style={{ backgroundColor: "#ece5ff" }}>
                        <img
                            className="img-fluid rounded-5 border border-4"
                            src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/PoP/01/Desktop_Slider.jpg"
                            alt=""
                        />
                    </div>
                    <div style={{ backgroundColor: "#ece5ff" }}>
                        <img
                            className="img-fluid rounded-4 border border-5"
                            src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/Banner/kids/01/SC_desktop.jpg"
                            alt=""
                        />
                    </div>
                    <div style={{ backgroundColor: "#ece5ff" }}>
                        <img
                            className="img-fluid rounded-4 border border-5"
                            src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/AppBanner/02/Desktop.jpg"
                            alt=""
                        />
                    </div>
                </Slider>
            </div>
        </div>
    </>
}

export default SectionEight