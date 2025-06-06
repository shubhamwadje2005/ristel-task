import React from 'react'
import '../../assest/style.css'

const SectionSix = () => {
    const CardCreate = [
        { _id: 1, image: "https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/collection/luna_d.jpg" },
        { _id: 2, image: "https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/collection/01/adaa_d.jpg" },
        { _id: 3, image: "https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/collection/butterfly_d.jpg" },
        { _id: 4, image: "https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/collection/aaranya_d.jpg" },
        { _id: 5, image: "https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/collection/eternity_d.jpg" },
        { _id: 6, image: "https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/collection/ombre_d.jpg" },
    ]
    return <>
        <div className='container-fluid my-5' style={{ backgroundColor: "#ece5ff" }}>
            <h1 className="text-center pt-5 my-5">CaratLane Collections</h1>
            <div className='d-flex gap-3 overflow-x-auto' style={{ scrollbarWidth: "none" }}>
                {
                    CardCreate.map(item => <div className='col-12 col-sm-6 col-md-3 col-lg-3'>
                        <div class="card bg-transparent image-slider">
                            <div class="card-body p-0" key={item._id}>
                                <img className='img-fluid card-image rounded-3' src={item.image} alt={item.image} />
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
        <div className="my-4 d-flex justify-content-center align-items-center">
            <button
                type="button"
                className="btn"
                style={{
                    backgroundColor: "#4f3267",
                    color: "#fff",
                    border: "2px solid #4f3267",
                    padding: "10px 20px",
                    borderRadius: "5px",
                }}
            >
                VIEW ALL COLLECTION
            </button>
        </div>
    </>

}

export default SectionSix