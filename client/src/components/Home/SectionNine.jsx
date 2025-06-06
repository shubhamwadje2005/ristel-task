import React from 'react'

const SectionNine = () => {
    return <>
        <div className="container-fluid py-2">
            <div class="card rounded-5" style={{ backgroundColor: "#ffede5" }}>
                <div className='row g-4 align-items-center px-3 py-4'>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <video
                            loop
                            autoPlay
                            playsInline
                            muted
                            className='img-fluid rounded-start-3 w-100 h-100 object-fit-cover'
                            src="https://assets.cltstatic.com/images/responsive/hp/Nearby-Store-Video.mp4"
                        ></video>
                    </div>

                    <div className=" col-12 col-lg-6 text-center justify-content-center align-items-center">
                        <h1>Find your favorite designs</h1>
                        <h1 className='m-0'>at a Store Nearby</h1>
                        <div className="mt-5 mx-auto my-5 d-flex justify-content-center w-50 position-relative">
                            <div className="input-group shadow-sm w-100">
                                <span className="input-group-text bg-white border-0 rounded-start-4">
                                    <i className="bi bi-crosshair2 text-secondary"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control form-control-lg border-0 ps-2 pe-5"
                                    placeholder="Enter your location"
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-sm btn-light text-danger position-absolute"
                                style={{
                                    right: 15,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 5,
                                }}
                            >
                                Change
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>
}

export default SectionNine

