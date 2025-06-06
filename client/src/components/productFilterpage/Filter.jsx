import React from 'react'
import SectionnTwo from '../productFilterpage/SectionnTwo'
import SectionOne from '../productFilterpage/SectionOne'

const Filter = () => {
    return <>
        <div style={{ height: "80px", backgroundColor: "#f6f3f9" }}>
            <div className='mx-5' style={{ color: "#4f3267" }}>
                <h4 className='text-opacity-50 '>Jwellery 298</h4>
                <p className='text-opacity-50'>Home / Jwellery</p>
            </div>
        </div>

        <div className=' m-0 d-md-none mx-4 mt-5'>
            <button type="button" class="btn btn-outline-primary rounded-5 " data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">Primary</button>
        </div>
        <div className="container-fluid">
            <div className="row ">
                <div className="col-md-2">
                    <div className='d-none d-md-block'>
                        <SectionnTwo />
                    </div>
                </div>
                <div className="col-10">
                    <SectionOne />
                </div>
            </div>
        </div>


        <div class="offcanvas offcanvas-start" id="offcanvasExample">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body">
                <SectionnTwo />
            </div>
        </div>

    </>
}

export default Filter