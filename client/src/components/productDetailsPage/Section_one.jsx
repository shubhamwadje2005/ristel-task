import React from 'react';

const Section_one = () => {
    return <>
        <div className=" d-flex">
            <div class="card">
                <div class="card-body ">
                    <div className="row d-flex">
                        <div className="col-sm-6">
                            <img className='img-fluid' src="https://cdn.caratlane.com/media/catalog/product/J/R/JR10032-1YS3SE_1_lar.jpg" alt="" />
                        </div>
                        <div className="col-sm-6">
                            <img className='img-fluid' src="https://cdn.caratlane.com/media/catalog/product/J/R/JR10032-1YS3SE_3_lar.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-sm-6 my-5">
                            <img className='img-fluid' src="https://cdn.caratlane.com/media/catalog/product/J/R/JR10032-1YS3SE_4_lar.jpg" alt="" />
                        </div>
                        <div className="col-sm-6 my-5">
                            <img className='img-fluid' src="https://cdn.caratlane.com/media/catalog/product/J/R/JR10032-1YS3SE_5_lar.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-sm-6">
                            <video
                                className="w-100"
                                style={{ height: "500px", objectFit: "contain" }}
                                autoPlay
                                muted
                                loop
                                playsInline
                                src="https://cdn.caratlane.com/media/catalog/product/J/R/JR10032-1YS3SE_16_video.mp4"></video>
                        </div>
                        <div className="col-sm-6">
                            <img className='img-fluid' src="https://cdn.caratlane.com/media/catalog/product/J/R/JR10032-1YS3SE_6_lar.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-sm-6">
                            <img className='img-fluid my-3' src="https://cdn.caratlane.com/media/catalog/product/J/R/JR10032-1YS3SE_1_lar.jpg" alt="" />
                        </div>
                        <div className="col-sm-6">
                            <img className='img-fluid my-3' src="https://cdn.caratlane.com/media/catalog/product/J/R/JR10032-1YS3SE_3_lar.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Section_one;


