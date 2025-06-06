import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/Card.slice'

const Section_Two = () => {
    const dispatch = useDispatch()

    return <>
        <div className="row">
            <div className="col-sm-6">
                <button style={{ color: "purple" }} type="button" class="btn-sm rounded-5 bg-light">WRITE A REVIEW</button>
                <div>
                    <strong>₹15,137</strong>
                    <p className='fw-lighter'>(MRP Inclusive of all taxes)</p>
                    <strong style={{ color: "purple" }}>Flare Drift Gemstone Ring</strong>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/others/pdp/03/pdp.png" className='img-fluid mt-5' alt="" />
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-sm-12 ">
                <div className='row overflow-hidden gx-0' style={{ border: "solid", borderRadius: 40, borderColor: "orange" }}>
                    <div className="col-lg-3">
                        <button type="button" class="btn  rounded-start-5 border-end" >
                            <div>Size</div>
                            <span style={{ color: "purple" }}>12(51mm)</span>
                        </button>
                    </div>
                    <div className="col-lg-3">
                        <button type="button" class="btn w-100 p-2 border-end">
                            <div>Metal</div>
                            <span style={{ color: "purple" }}>14 KT_Yellow</span>
                        </button>
                    </div>
                    <div className="col-lg-3">
                        <button type="button" class="btn w-100 p-2 ">
                            <div>Diamond</div>
                            <span style={{ color: "purple" }}>FG-SI</span>
                        </button>
                    </div>
                    <div className="col-lg-3">
                        <button type="button" class="btn w-100 h-100 p-2 rounded-end-5" style={{ backgroundColor: "orange", }}>
                            CUSTOMIZE
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="row container-fluid my-4">
            <div className="col-sm-8">
                <button
                    type="button"
                    class="btn btn-primary w-100 rounded-4"
                    style={{ backgroundColor: "purple", color: "white" }}
                    onClick={e => dispatch(addToCart())}
                >Add To Cart
                </button>
            </div>
            <div className="col-sm-2">
                <button
                    style={{ backgroundColor: "white", color: "black" }}
                    type="button"
                    class="btn btn-md btn-dark">
                    <i class="bi bi-heart"></i>
                </button>
            </div>
            <div className="col-sm-2">
                <button
                    style={{ backgroundColor: "white", color: "black" }}
                    type="button"
                    class="btn btn-md btn-dark">
                    <i class="bi bi-share"></i>
                </button>
            </div>
        </div>
        <div className="row my-5 container-fluid">
            <h4>Delivery,Stores & Trial</h4>
            <input
                style={{ borderColor: "purple" }}
                type="text"
                className='form-ccontrol p-2 rounded-4'
                placeholder='Enter Pincode' />

            <input
                style={{ borderColor: "purple" }}
                type="text"
                className='form-ccontrol p-2 rounded-4 mt-3'
                placeholder="Expected Delivery Date" />
        </div>
        <div className="row">
            <div className="col-sm-6 p-2 rounded-4">
                <div className="card-body">
                    <div className='d-flex gap-2'>
                        <i style={{ color: "purple" }} class="bi bi-house-door fs-4"></i>
                        <h5 style={{ color: "purple" }}>Try At Home</h5>
                    </div>
                    <p>Trial Upto 5 Designs</p>
                    <div className='text-center'>
                        <button style={{ backgroundColor: "#999df3", color: "white" }} type="button" class="btn rounded-5 w-100">BOOK APPOINMENT</button>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 p-2 rounded-4">
                <div className="card-body">
                    <div className='d-flex gap-2'>
                        <i style={{ color: "orange" }} class="bi bi-shop-window fs-4"></i>
                        <h5 style={{ color: "purple" }}>Store Availability</h5>
                    </div>
                    <p>Find designs in store</p>
                    <div className='text-center'>
                        <button style={{ backgroundColor: "#fe6769", color: "white" }} type="button" class="btn rounded-5 w-100">FIND IN STORE</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="row mt-4 text-center">
            <div className='d-flex justify-content-evenly align-items-center' style={{ height: 90 }}>
                <div>
                    <i style={{ color: "skyblue" }} class="bi bi-currency-exchange fs-3"> </i>
                    <p style={{ color: "purple" }}>15 Day Exchange</p>
                </div>
                <div>
                    <i style={{ color: "pink" }} class="bi bi-calendar4-event fs-3"> </i>
                    <p style={{ color: "purple" }}>1 Year Warranty</p>
                </div>
                <div>
                    <i style={{ color: "green" }} class="bi bi-patch-check fs-3"> </i>
                    <p style={{ color: "purple" }}>100 % Certified</p>
                </div>
                <div>
                    <i style={{ color: "green", }} class="bi bi-arrow-repeat fs-3"> </i>
                    <p style={{ color: "purple" }}>Life Time Exchange</p>
                </div>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-sm-6">
                <h5 style={{ color: "purple" }}>Product Details</h5>
                <p style={{ color: "purple" }}>SKU JR10032-1YS3SE <i class="bi bi-copy"></i></p>
            </div>
            <div className="col-sm-6 text-end">
                <button style={{ backgroundColor: "#999df3" }} type="button" class="btn btn-sm "><i style={{ color: "purple" }} class="bi bi-plus text-dark"></i>PRICE BREAKUP</button>
            </div>
        </div>
        <div className="row">
            <p>Set in 14 KT Yellow Gold(1.140 g) with diamonds (0.020 ct ,FG-SI)</p>
        </div>


        <div class="card my-2">
            <div style={{ backgroundColor: "#fff3e9", color: "purple" }} class="card-header">
                <i class="bi bi-sunrise-fill"></i> GOLD</div>
            <div style={{ backgroundColor: "#fff9f5" }} class="card-body d-flex justify-align-content-between">
                <div className="col-sm-4 text-center" style={{ borderRight: "solid" }}>
                    <p> Dimensions</p>
                    <p> Width : 4.75 mm</p>
                    <p>Height : 2.6 mm</p>
                </div>
                <div className="col-sm-4 text-center" style={{ borderRight: "solid" }}>
                    <p> Weight</p>
                    <p> Gross : 1.172 g</p>
                </div>
                <div className="col-sm-4 text-center">
                    <p> Purity</p>
                    <p> 14 KT</p>
                </div>
            </div>
        </div>



        <div class="card mb-2">
            <div style={{ backgroundColor: "#fff3e9", color: "purple" }} class="card-header">
                <i class="bi bi-gem"></i>Diamond</div>
            <div style={{ backgroundColor: "#fff9f5" }} class="card-body d-flex justify-align-content-between">
                <div className="col-sm-4 text-center" style={{ borderRight: "solid" }}>
                    <p> Type</p>
                    <p>FG-SI</p>
                </div>
                <div className="col-sm-4 text-center" style={{ borderRight: "solid" }}>
                    <p> Setting</p>
                    <p> Setting : Micro Pave</p>
                    <p>Total No. : 6</p>
                </div>
                <div className="col-sm-4 text-center">
                    <p> Total Weight</p>
                    <p> 0.020 ct</p>
                </div>
            </div>
        </div>


        <div class="card mb-2">
            <div style={{ backgroundColor: "#fff3e9", color: "purple" }} class="card-header">
                <i class="bi bi-gem"></i>GEMSTONE</div>
            <div style={{ backgroundColor: "#fff9f5" }} class="card-body d-flex justify-align-content-between">
                <div className="col-sm-10 text-center" style={{ borderRight: "solid" }}>
                    <p> Type</p>
                    <p>Synthetic Emerald (4.00 x 3.00 mm)</p>
                </div>
                <div className="col-sm-2 text-center">
                    <p>Total No</p>
                    <p> 1</p>
                </div>
            </div>
        </div>
        <hr />
        <div className="row">
            <p>Manufactured by CaratLane Trading Pvt Ltd... Show More</p>
        </div>

        <hr />
        <div className="row">
            <div className="col-sm-4 text-center">
                <img src="https://cdn.caratlane.com/media/static/images/web/BIS_-_Bureau_of_Indian_Standards-1.png" alt="BIS Icon" class="css-apeh3x erq4t6029"></img>
                <p>BIS</p>
                <p> Hallmarked Jewellery</p>
            </div>
            <div className="col-sm-4">
                <img src="https://cdn.caratlane.com/media/static/images/web/Tata-Certified-1.png" alt="Tanishq Trust Icon" class="css-1ilp5qj erq4t6030"></img>
                <p>Trust of TATA</p>
                <p>Spirit of CaratLane</p>
            </div>
            <div className="col-sm-4">
                <img src="https://cdn.caratlane.com/media/static/images/web/Certificate-2.png" alt="Assurity Icon" class="css-apeh3x erq4t6031"></img>
                <p>100% Certified</p>
                <p>by CaratLane</p>
            </div>
        </div>
    </>
}

export default Section_Two