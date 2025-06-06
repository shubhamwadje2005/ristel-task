import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const products = [
    {
        id: 1,
        image: "https://cdn.caratlane.com/media/catalog/product/J/E/JE10975-1YS300_11_listfront.jpg",
        name: "Bloomy Trace Diamond",
        price: "₹20,467/-"
    },
    {
        id: 2,
        image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE10976-1YS300_11_listfront.jpg",
        name: "Petal Papillon Diamond",
        price: "₹18,467/-"
    },
    {
        id: 3,
        image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02843-1YS300_11_listfront.jpg",
        name: "Kaleido Diamond Sui",
        price: "₹23,467/-"
    },
    {
        id: 4,
        image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/P/JP06583-1YS300_11_listfront.jpg",
        name: "Leafy Trace Diamond",
        price: "₹19,467/-"
    },
    {
        id: 5,
        image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE10978-1YS300_11_listfront.jpg",
        name: "Vibrant Trace Diamond",
        price: "₹21,467/-"
    },
    {
        id: 6,
        image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE10974-1YS300_11_listfront.jpg",
        name: "Colorwhirl Trace Diamond",
        price: "₹22,467/-"
    },
];

const SectionTwo = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    };

    return <>
        <div className='container-fluid my-5' style={{ backgroundColor: "#d5c8ff" }}>
            <div className='row align-items-center'>
                <div className="col-md-6 mb-3 mb-md-0">
                    <img
                        className='img-fluid rounded-start-3 w-100'
                        src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/Banner/22kt/02/collection-desktop_1.jpg"
                        alt="Promo"
                    />
                </div>
                <div className="col-md-6 bg-light-purple img-fluid rounded-3 px-4 py-4">
                    <Slider {...settings}>
                        {products.map((item) => (
                            <div key={item.id} className="text-center px-3">
                                <img

                                    src={item.image}
                                    alt={item.name}
                                    className="img-fluid mb-2 rounded-3"
                                    style={{ maxHeight: "150px", objectFit: "contain" }}
                                />
                                <p className="fw-semibold">{item.price}</p>
                                <p className="text-muted small">{item.name}</p>
                            </div>
                        ))}
                    </Slider>
                    <div className="text-center mt-4">
                        <button className="btn btn-primary px-4 py-2 rounded">
                            View Full Collection
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SectionTwo
