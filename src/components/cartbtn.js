
import { Link } from "react-router-dom"


const CartBtn = ({ cartItem, setCartItem, cartItemId, setCartItemId, allItems, imgSrc, setImgSrc, setXCount,
    cartValue, setCartValue }) => {

    const cartItemClear = () => {
        setCartItem(0)
        setCartItemId([])
        setCartValue(0)
    }

    cartItemId = cartItemId.map(str => parseInt(str));
    const itemsArray = cartItemId.flatMap(id => allItems.filter(item => item.id === id));

    const removeitem = (event) => {
        var id = parseInt(event.currentTarget.id)
        setCartItem(cartItem - 1)
        setCartItemId(cartItemId.filter((value, index) => !(value === id && index === cartItemId.indexOf(id))))
        var value = allItems.filter(item => item.id === parseInt(event.currentTarget.id))
        setCartValue(cartValue - value[0].price)
    }

    const closeCartDiv = () => {
        document.getElementById('cartClose').click()
        setImgSrc(imgSrc)
        setXCount(1)
    }

    const items = itemsArray.map((item, index) => (
        <div className="container mb-3" key={`${index},${item.id}`}>
            <div className="row bg-secondary rounded-3">
                <div className="col-10">
                    <Link to={`/items/${item.id}`} className="text-light text-decoration-none d-block py-2"
                        onClick={closeCartDiv}>
                        <div className="row" >
                            <div className="col-2">
                                <img src={item.image} alt="" className=" img-fluid" />
                            </div>
                            <div className="col-10  d-flex justify-content-between align-items-center">
                                <h6 className=" ">{`Item ${item.id}`}</h6>
                                <h6 className=" ">Price - {item.price} ks</h6>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-2 ">
                    <button className="btn border-0 fs-3 " id={item.id} onClick={removeitem} >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    ))



    return <>
        <button className="btn border-warning rounded text-warning" data-bs-toggle="offcanvas" data-bs-target="#cartDiv" id="cartBtn">
            <i className="fa-solid fa-cart-shopping fs-5"></i>

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItem}
            </span>
        </button>

        <div className="offcanvas offcanvas-end  rounded" tabIndex="-1" id="cartDiv">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">Cart info</h5>
                <button type="button" className="btn-close" id="cartClose" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body bg-dark position-relative">
                <h6 className=" text-light text-center">{cartItem} item here</h6>
                {items}
                <h6 className=" text-warning text-center">Total - {cartValue} ks</h6>
                <button onClick={cartItemClear} className="btn btn-light d-block mx-auto w-100  fw-bold ">clear all</button>
            </div>

        </div>
    </>
}

export default CartBtn