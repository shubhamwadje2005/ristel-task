const Footer = () => {
    return <footer className="bg-light text-dark pt-5 pb-4" style={{ backgroundColor: "#f4eff4" }}>
        <div className="m-5 text-center ">
            <div className="row text-start">

                <div className="col-md-2 mb-4">
                    <h6 className="text-uppercase fw-bold mb-3">Know Your Jewellery</h6>
                    <p><a href="#" className="text-dark text-decoration-none">Diamond guide</a></p>
                    <p><a href="#" className="text-dark text-decoration-none">Jewellery guide</a></p>
                    <p><a href="#" className="text-dark text-decoration-none">Gemstones guide</a></p>
                    <p><a href="#" className="text-dark text-decoration-none">Gold rate</a></p>
                    <p><a href="#" className="text-dark text-decoration-none">Plan of purchase</a></p>
                    <p><a href="#" className="text-dark text-decoration-none">Glossary</a></p>
                </div>

                <div className="col-md-2 mb-4">
                    <h6 className="text-uppercase fw-bold mb-3">CaratLane Advantage</h6>
                    <p><a href="#" className="text-dark text-decoration-none">15-day returns</a></p>
                    <p><a href="#" className="text-dark text-decoration-none">Free shipping</a></p>
                    <p><a href="#" className="text-dark text-decoration-none">Postcards</a></p>
                    <p><a href="#" className="text-dark text-decoration-none">Gold exchange</a></p>
                    <p><a href="#" className="text-dark text-decoration-none">#Wearyourwins</a></p>
                    <p><a href="#" className="text-dark text-decoration-none">Gift cards</a></p>
                </div>

                <div className="col-md-2 mb-4">
                    <h6 className="text-uppercase fw-bold mb-3">Customer Service</h6>
                    <p><a href="#" className="text-dark text-decoration-none">Return policy</a></p>
                    <p><a href="#" className="text-dark text-decoration-none">Order status</a></p>
                </div>

                <div className="col-md-2 mb-4">
                    <h6 className="text-uppercase fw-bold mb-3">About Us</h6>
                    <p><a href="#" className="text-dark text-decoration-none">Our story</a></p>
                    <p><a href="#" className="text-dark text-decoration-none">Press</a></p>
                    <p><a href="#" className="text-dark text-decoration-none">Blog</a></p>
                    <p><a href="#" className="text-dark text-decoration-none">Careers</a></p>
                </div>

                <div className="col-md-4 mb-4">
                    <h6 className="text-uppercase fw-bold mb-3">Contact Us</h6>
                    <p><strong>CaratLane Trading Pvt Ltd</strong></p>
                    <p>No:727, 1st Floor, TIL Park Anna Salai,<br />Pathari Road, Thousand Lights, Chennai, Tamil Nadu 600006.</p>
                    <p><strong>24x7 Enquiry Support (All Days)</strong></p>
                    <p>General: <a href="mailto:contactus@caratlane.com" className="text-dark text-decoration-none">contactus@caratlane.com</a></p>
                    <p>Corporate: <a href="mailto:b2b@caratlane.com" className="text-dark text-decoration-none">b2b@caratlane.com</a></p>
                    <p>HR: <a href="mailto:careers@caratlane.com" className="text-dark text-decoration-none">careers@caratlane.com</a></p>
                    <p>Grievance: <a className="text-dark text-decoration-none">click here</a></p>
                </div>
            </div>

            <hr />

            <div className="row align-items-center">
                <div className="col-md-6 mb-3">
                    <h6>Download the CaratLane App</h6>
                    <p>Shop & Save more on app by redeeming xCLusive points</p>
                    <a href="#">
                        <img
                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                            height="40"
                            className="me-2"
                        />
                    </a>
                    <a href="#">
                        <img
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                            height="40"
                        />
                    </a>
                </div>

                <div className="col-md-6 text-md-end text-center">
                    <h6>Find Us On</h6>
                    <a href="#" className="me-2"><i className="bi bi-instagram fs-4"></i></a>
                    <a href="#" className="me-2"><i className="bi bi-facebook fs-4"></i></a>
                    <a href="#" className="me-2"><i className="bi bi-linkedin fs-4"></i></a>
                    <a href="#" className="me-2"><i className="bi bi-pinterest fs-4"></i></a>
                    <a href="#"><i className="bi bi-x fs-4"></i></a>
                </div>
            </div>

            <hr />

            <div className="text-center">
                <p className="mb-2">© 2025 CaratLane. All rights reserved.</p>
                <img src="https://img.icons8.com/color/48/visa.png" height="24" className="me-2" />
                <img src="https://img.icons8.com/color/48/mastercard-logo.png" height="24" className="me-2" />
                <img src="https://img.icons8.com/color/48/amex.png" height="24" className="me-2" />
                <img src="https://img.icons8.com/color/48/paypal.png" height="24" className="me-2" />
                <img src="https://img.icons8.com/color/48/amazon.png" height="24" />
            </div>
        </div>
    </footer>

};

export default Footer;