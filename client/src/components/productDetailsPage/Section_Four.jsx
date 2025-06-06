import React from 'react'
import data from '../../data/Recently.json'

const Section_Four = () => {
    return <>
        <div>
            <h2 className='text-center my-5 mt-5'>Recently Viewed</h2>
            <div className="row p-5">
                {
                    data.map((item, index) => <div key={index} className="col-6 col-sm-12 col-md-3 col-lg-3 mb-4">
                        <div className="card h-100">
                            <div className="card-header p-0">
                                <img className="img-fluid w-100" src={item.image} />
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    <strong>₹{item.price}/-</strong>
                                    <p style={{ color: "#adaeb4" }}>{item.name}</p>
                                </p>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    </>
}

export default Section_Four
