import React from 'react'
import Section_one from './Section_one'
import Section_Two from './Section_Two'
import Section_Three from './Section_Three'
import Section_Four from './Section_Four'
import Section_Five from './Section_Five'
import SectionSix from './SectionSix'

const ProductDetailsPage = () => {
    return <>
        <div className='container-fluid my-5'>
            <div className="row">
                <div className="  col-md-12 col-lg-8">
                    <Section_one />
                </div>
                <div className="  col-md-12 col-lg-4">
                    <Section_Two />
                </div>
                <div className='container-fluid rounded-5' style={{ backgroundColor: "#f9f8fc" }}>
                    <Section_Three />
                </div>
                <div className='container-fluid rounded-5' style={{ backgroundColor: "#f9f8fc" }}>
                    <Section_Four />
                </div>
                <div className='container-fluid rounded-5'>
                    <Section_Five />
                </div>
                <div className='container-fluid rounded-5'>
                    <SectionSix />
                </div>
            </div>
        </div>
    </>
}

export default ProductDetailsPage