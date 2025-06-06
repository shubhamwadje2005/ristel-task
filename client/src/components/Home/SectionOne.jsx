import React from 'react'
import banner1 from '../../assest/images/banner.jpg'
import banner2 from '../../assest/images/moment.jpg'
import banner3 from '../../assest/images/Diamond.jpg'

const SectionOne = () => {
    return <div className='container-fluid my-4'>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner rounded-4">
                <div class="carousel-item active">
                    <img src={banner1} class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" alt="" />
                </div>
                <div class="carousel-item">
                    <img src={banner2} class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" alt="" />
                </div>
                <div class="carousel-item">
                    <img src={banner3} class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" alt="" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" ></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    </div >
}

export default SectionOne