import React from 'react'
import "../assest/style.css"
import { Link } from "react-router-dom"
import Ring from './navbarppages/Ring'
import Earrings from './navbarppages/Earrings'
import Bracelets from './navbarppages/Bracelets'
import Necklaces from './navbarppages/Necklaces'
import Pendants from './navbarppages/Pendants'
import More_Jewellery from './navbarppages/More_Jewellery'
import Silver from './navbarppages/Silver'
import Gifting from './navbarppages/Gifting'
import Trending from './navbarppages/Trending'
import Collections from './navbarppages/Collections'
import logo from '../assest/images/logo.jpg'

const Navbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-Light d-md-block" style={{ margin: 5, display: "none" }}>
            <div class="container-fluid">
                <img className='me-3' style={{ height: 40 }} src={logo} alt="" />
                <div className='col-sm-5 d-flex me-3' >
                    <input className='form-control' type="search" placeholder='search anything' />
                </div >

                <button className='btn btn-sm rounded-3 btn-outline-info me-3' style={{ backgroundColor: "#e5daff", }}>
                    <img src="https://caratlane-live-product-images.s3.ap-south-1.amazonaws.com/media/static/images/discovery/responsive-hamburger-menu/products-and-services/pop-1x.png" alt="" />
                </button>

                <button className='btn btn-sm rounded-3 btn-outline-warning me-3' style={{ backgroundColor: "white", padding: 8, color: "black" }}>
                    <i class="bi bi-shop-window" style={{ color: "orange", }}></i>  <strong> Store Locator</strong>
                </button>

                <button className='btn btn-sm rounded-3 btn-outline-danger me-5' style={{ backgroundColor: "#e5daff", padding: 6 }}>
                    <img src="https://cdn.caratlane.com/static/images/discovery/responsive-hamburger-menu/egold-1x.png" alt="" />
                </button>

                <img height={30} src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png" alt="" />


                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
                    <div class="navbar-nav gap-2">
                        <Link to="/account" class="nav-link"><i class="bi bi-person-fill"></i></Link>
                        <Link to="/wishlist" class="nav-link"><i class="bi bi-heart-fill"></i></Link>
                        <Link to="/cart" class="nav-link"><i class="bi bi-cart-plus-fill"></i></Link>
                    </div>
                </div>
            </div>
        </nav>



        <nav class="navbar-bg navbar navbar-expand-lg navbar-dark sticky-top z-50">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">


                        <div className="c-dropdown">
                            <span className="text-white nav-link" role="button" id="earringsDropdown">
                                Rings
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="earringsDropdown">
                                <Ring />
                            </ul>
                        </div>


                        <div className="c-dropdown me-2">
                            <span className="text-white nav-link" role="button" id="earringsDropdown">
                                Earrings
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="earringsDropdown">
                                <Earrings />
                            </ul>
                        </div>


                        <div className="c-dropdown me-2">
                            <span className="text-white nav-link" role="button" id="braceletsDropdown">
                                Bracelets & Bangles
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="braceletsDropdown">
                                <Bracelets />
                            </ul>
                        </div>


                        <div className="c-dropdown me-2">
                            <span className="text-white nav-link" role="button" id="solitairesDropdown">
                                Solitaires
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="solitairesDropdown">
                                <Necklaces />
                            </ul>
                        </div>



                        <div className="c-dropdown me-2">
                            <span className="text-white nav-link" role="button" id="necklacesDropdown">
                                Necklaces & Pendants
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="necklacesDropdown">
                                <Pendants />
                            </ul>
                        </div>


                        <div className="c-dropdown me-2">
                            <span className="text-white nav-link" role="button" id="moreJewelleryDropdown">
                                More Jewellery
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="moreJewelleryDropdown">
                                <More_Jewellery />
                            </ul>
                        </div>


                        <div className="c-dropdown me-2">
                            <span className="text-white nav-link" role="button" id="silverDropdown">
                                Silver by Shaya
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="silverDropdown">
                                <Silver />
                            </ul>
                        </div>


                        <div className="c-dropdown me-2">
                            <span className="text-white nav-link" role="button" id="giftingDropdown">
                                Gifting
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="giftingDropdown">
                                <Gifting />
                            </ul>
                        </div>


                        <div className="c-dropdown me-2">
                            <span className="text-white nav-link" role="button" id="trendingDropdown">
                                Trending
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="trendingDropdown">
                                <Trending />
                            </ul>
                        </div>


                        <div className="c-dropdown me-3">
                            <span className="text-white nav-link" role="button" id="collectionsDropdown">
                                Collections
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="collectionsDropdown">
                                <Collections />
                            </ul>
                        </div>


                        <div class="s-dropdown ms-lg-5">
                            <button className="btn btn-outline-light rounded-4 dropdown-toggle" type="button" id="dropdownMenuButton1" aria-expanded="false">
                                Services
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link className="dropdown-item">Try at Home</Link></li>
                                <li><Link className="dropdown-item">Video Call</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar