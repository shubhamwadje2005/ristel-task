import React from 'react';

const Section_Five = () => {
    return <>
        <div className="container-fluid py-5" style={{ overflowY: 'hidden' }}>
            <div className="row align-items-center px-3">
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                    <img
                        src="https://assets.cltstatic.com/images/responsive/map.jpg"
                        alt="Map"
                        className="img-fluid rounded-3 w-100"
                        style={{ maxHeight: '500px', objectFit: 'cover' }}
                    />
                </div>

                <div className="col-12 col-lg-6 text-center d-flex flex-column align-items-center">
                    <h1 className="fw-bold mb-3">Find in Store near you!</h1>
                    <h6 className="text-muted">Have to see it to believe it? Check here if the design is available in the store</h6>
                    <h6 className="text-muted mb-4">or not. You can also book an appointment</h6>

                    <div className="input-group my-3 w-100 px-3 px-sm-5 px-lg-0" style={{ maxWidth: '500px' }}>
                        <span className="input-group-text bg-white border-0">
                            <i className="bi bi-crosshair2 text-secondary"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control form-control-lg border-0"
                            placeholder="Enter your location"
                            style={{ borderBlockColor: "#af5ef1" }}
                        />
                    </div>

                    <button
                        type="button"
                        className="btn btn-lg text-light rounded-4 mt-3"
                        style={{ backgroundColor: "#af5ef1", maxWidth: '500px' }}
                    >
                        VIEW STORES & DESIGNS
                    </button>
                </div>
            </div>
        </div>
    </>
};

export default Section_Five;