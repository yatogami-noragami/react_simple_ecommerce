import { Link } from 'react-router-dom'

const Items = ({ cartItem, setCartItem, cartItemId, setCartItemId, allItems, setXCount }) => {

    const itemsArray = allItems.filter(item => item.id <= 5)

    const cartItemChange = (event) => {
        setCartItem(cartItem + 1)
        setCartItemId([...cartItemId, event.target.id])
    }

    const itemCLick = () => {
        setXCount(1)
    }

    return <>
        <div className="row mt-5">

            {itemsArray.map((item, index) => (
                <div className='itemsCon position-relative col-lg-3 col-md-4 col-6 my-5 ' key={index}>
                    <Link to={`/items/${index + 1}`} onClick={itemCLick}>
                        <img src={item.image} alt='p1' className=' img-fluid p-4 mb-5' />
                        <div className=' w-100'>
                            <h5 className='text-light text-center'>Item {index + 1}</h5>

                            <h5 className=' text-warning text-decoration-underline mt-3'>{item.price} ks</h5>
                        </div>
                    </Link>
                    <div className='w-100 itemsConBtnDiv d-lg-block d-none position-absolute top-50 start-0'>
                        <button onClick={cartItemChange} id={index + 1} className=' btn btn-warning fw-bold d-block mx-auto mb-3'>add to cart</button>
                    </div>
                </div>
            ))}

        </div>
    </>
}

export default Items