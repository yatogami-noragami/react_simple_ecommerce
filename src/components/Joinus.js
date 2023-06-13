
const Joinus = ({ blurValue }) => {
    return <>
        <div className="row mt-5">
            <div className="col-md-10 offset-md-1 my-5 p-5"
                style={{ filter: `blur(${blurValue}px)` }}>
                <div className="row">
                    <h3 className=" text-center text-secondary fw-bolder">
                        <span className=" text-danger fs-1">Join us</span> and become part of our vibrant e-commerce community! Discover endless possibilities, shop with confidence, and enjoy exclusive benefits. With our wide range of products, exceptional customer service, and secure transactions, we invite you to embark on a seamless and rewarding shopping experience.
                    </h3>
                </div>

                <div className="row mt-5">
                    <div className=" col-md-6 border-end border-secondary p-3">
                        <h3 className=" text-info text-center text-decoration-underline mb-5">Contact Us</h3>

                        <h6 className=" text-white mb-5">Tel - <a href="#!">01 234 567 89</a></h6>
                        <h6 className=" text-white mb-5">Email - <a href="#!">ecommercesite@gmail.com</a></h6>
                        <h6 className=" text-white mb-5">Address - <a href="#!">No.123, Some Road, Else City</a></h6>
                    </div>

                    <div className=" col-md-6 border-start border-secondary p-3">
                        <h3 className=" text-info text-center text-decoration-underline mb-5">Follow Us</h3>

                        <div className=" d-flex justify-content-around align-items-center mb-5">
                            <a className="btn" href="#!">
                                <i className="fa-brands fa-facebook fs-2 text-warning"></i>
                            </a>

                            <a className="btn" href="#!">
                                <i className="fa-brands fa-instagram fs-2 text-warning"></i>
                            </a>

                            <a className="btn" href="#!">
                                <i className="fa-brands fa-youtube fs-2 text-warning"></i>
                            </a>
                        </div>

                        <form className=" w-100" id="emailForm">
                            <div className=" input-group">

                                <input type="email" className=" form-control p-2 fw-bold" placeholder="email address" />
                                <button className=" btn btn-success input-group-text fw-bold">submit</button>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Joinus