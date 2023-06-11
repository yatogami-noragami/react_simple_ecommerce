import grayBg from './..//image/grayBg.jpg'
const ItemInfo = ({ item, blurValue, setImgSrc, cartItem, setCartItem, cartItemId, setCartItemId, xCount, setXCount }) => {
    const imgBorderChange = (event) => {
        const images = document.getElementsByClassName('grayBg');
        const imagesArray = Array.from(images);
        imagesArray.forEach((image) => {
            image.classList.remove('border')
        });

        const clickedImg = event.target
        clickedImg.classList.add('border')
        document.getElementById('itemImg').src = clickedImg.getAttribute('src')
    }

    const stars = Array.from({ length: item.rating }, (_, index) => (
        <i className="fa-solid fa-star text-warning fw-bold ms-1" key={index}></i>
    ));

    const noStars = Array.from({ length: 5 - item.rating }, (_, index) => (
        <i className="fa-solid fa-star text-light fw-bold ms-1" key={index}></i>
    ));

    const addToCart = (event) => {
        setCartItem(cartItem + xCount)
        for (let i = 0; i < xCount; i++) {
            setCartItemId(prevCartItemId => [...prevCartItemId, event.target.id]);
        }
    }

    const xCountDe = () => {
        setXCount(xCount - 1)
        if (xCount <= 1) {
            setXCount(1)
        }
    }

    const xCountIn = () => {
        setXCount(xCount + 1)
        if (xCount >= 5) {
            setXCount(5)
        }
    }

    return <>
        <div className='container p-5 mt-5'>
            <div className="row">
                <div style={{ filter: `blur(${blurValue}px)` }} className=" p-lg-5 p-0 col-lg-8 offset-lg-2">
                    <h4 className=" text-light text-center">Item {item.id}</h4>
                    <div className="row mt-5">
                        <div className='col-md-8'>
                            <img src={item.image} alt="" className=" img-fluid d-block mx-auto rounded w-75" id='itemImg' />
                        </div>

                        <div className="col-md-4 d-md-block d-none">
                            <img src={grayBg} className=" img-fluid d-block mb-3 rounded grayBg" onClick={imgBorderChange} alt="" />
                            <img src={grayBg} className=" img-fluid d-block mb-3 rounded grayBg" onClick={imgBorderChange} alt="" />
                            <img src={grayBg} className=" img-fluid d-block mb-3 rounded grayBg" onClick={imgBorderChange} alt="" />
                            <img src={item.image} className="w-75 p-5 img-fluid d-block mx-auto mb-3 rounded grayBg border" onClick={imgBorderChange} alt="" />
                        </div>


                        <div className='d-md-none d-block mt-3'>
                            <div className='row mx-auto align-items-center'>
                                <div className='col'>
                                    <img src={grayBg} className='img-fluid mb-3 rounded grayBg' onClick={imgBorderChange} alt='' />
                                </div>
                                <div className='col'>
                                    <img src={grayBg} className='img-fluid mb-3 rounded grayBg' onClick={imgBorderChange} alt='' />
                                </div>
                                <div className='col'>
                                    <img src={grayBg} className='img-fluid mb-3 rounded grayBg' onClick={imgBorderChange} alt='' />
                                </div>
                                <div className='col'>
                                    <img src={item.image} className='img-fluid mb-3 rounded grayBg border p-1' onClick={imgBorderChange} alt='' />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className=' d-flex justify-content-between align-items-center mt-5 px-md-5'>
                        <h3 className=' text-light fw-bold'>{item.price}
                            <i className="fa-solid fa-coins  ms-3"></i>
                        </h3>

                        <button className='btn btn-success fw-bold'>buy now</button>
                    </div>


                    <div className=' d-flex justify-content-between align-items-center mt-3 px-md-5'>
                        <div>
                            {stars}
                            {noStars}
                        </div>

                        <button className='btn btn-primary' id={item.id} onClick={addToCart}>add to cart</button>
                    </div>

                    <div className=' mt-3 d-flex justify-content-end align-items-start px-md-5'>
                        <button className='btn border-0' onClick={xCountDe} id={`xCountDeItem${item.id}`}>
                            <i className="fa-regular fa-square-minus text-light fs-4 "></i>
                        </button>
                        <p className=' text-light fs-4 '>{xCount}</p>
                        <button className='btn border-0' onClick={xCountIn} id={`xCountInItem${item.id}`}>
                            <i className="fa-regular fa-square-plus text-light fs-4 "></i>
                        </button>
                    </div>

                    <div className='border border-secondary p-4 rounded mt-4'>
                        <h6 className=' text-light'>Details - </h6>
                        <h6 className=' text-light'>Details - </h6>
                        <h6 className=' text-light'>Details - </h6>
                        <p className=' mt-4 text-secondary'><span className='text-light'>Description - </span>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking .
                        </p>
                    </div>


                </div>
            </div>
        </div>
    </>
}

export default ItemInfo