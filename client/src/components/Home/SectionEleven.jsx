import React from 'react';

const SectionEleven = () => {
    return (
        <div className="container-fluid ">
            <div className="card rounded-5" style={{ backgroundColor: "#3e2466" }}>
                <div className="row g-4 align-items-center px-3 justify-content-center py-4 text-light">
                    <div className="col-12 col-lg-6 d-flex flex-column my-5 flex-md-row align-items-center gap-3">
                        <img
                            src="https://assets.cltstatic.com/images/responsive/purple-gift-icon.png"
                            alt="Gift Icon"
                            style={{ width: '80px' }}
                        />
                        <div>
                            <h3 className="mb-1">Join CaratLane Insider</h3>
                            <p className="mb-0">To discover enticing deals, latest arrivals, & more</p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 text-center">
                        <div className="d-flex flex-column justify-content-center align-items-center gap-5">
                            <input
                                type="text"
                                className="form-control form-control-lg rounded-4 shadow-sm w-25"
                                placeholder="Enter your location"
                            />
                            <button
                                type="button"
                                className="btn text-light rounded-3 w-25"
                                style={{ backgroundColor: "#de57e5" }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SectionEleven;
