

const Aboutus = ({ blurValue }) => {
    return <>
        <div className="row mt-5">
            <div className="col-md-10 offset-md-1 my-5 p-5"
                style={{ filter: `blur(${blurValue}px)` }}>

                <div className=" mb-3 text-light font-monospace">

                    <div className=" mb-3 fs-1 text-decoration-underline text-secondary text-center fw-bolder">
                        Welcome to our e-commerce website!
                    </div>

                    <div className=" mb-3">
                        <span className=" text-info fs-4 me-5"> Our Mission:</span>
                        Our mission is to create a convenient and enjoyable shopping destination for customers worldwide. We strive to curate a diverse selection of high-quality products that cater to your needs and preferences. With a commitment to innovation and customer satisfaction, we aim to exceed your expectations at every step of your shopping journey.
                    </div>

                    <div className=" mb-3">
                        <span className=" text-info fs-4 me-5">  Product Selection:</span>
                        We understand that every customer is unique, with distinct tastes and requirements. That's why we offer an extensive range of products across various categories. Whether you're searching for trendy fashion items, cutting-edge electronics, stylish home decor, or practical everyday essentials, we have you covered. Our team works tirelessly to source products from reliable suppliers, ensuring that you have access to a diverse collection of items that meet our strict quality standards.
                    </div>

                    <div className=" mb-3">
                        <span className=" text-info fs-4 me-5"> User-Friendly Interface:</span>
                        Navigating our website is a breeze. We have designed an intuitive and user-friendly interface that allows you to effortlessly browse through our vast product catalog. Our search functionality enables you to quickly find specific items, and our well-organized categories make it easy to discover new products in your areas of interest. We regularly update our website to ensure a seamless and responsive experience across different devices, including desktops, tablets, and mobile phones.
                    </div>

                    <div className=" mb-3 text-warning fw-bold">
                        Thank you for choosing our e-commerce website as your trusted shopping destination. We are excited to embark on this journey with you, and we look forward to serving you with the utmost dedication and care. Start exploring our wide range of products and enjoy the convenience of online shopping like never before!
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default Aboutus