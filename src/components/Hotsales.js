import Items from './items'
const HotSales = ({ blurValue, cartItem, setCartItem, cartItemId, setCartItemId, allItems, setXCount,
    cartValue, setCartValue }) => {
    return <>
        <div className="row my-5">
            <div className="col-md-10 offset-md-1 my-5 ParentCon p-5"
                style={{ filter: `blur(${blurValue}px)` }}>

                <h1 className=' text-danger text-center promoTxt1'>Hot Deals of the Week!</h1>
                <h3 className=' text-warning text-center text-decoration-underline promoTxt2'>Clearance Sale: Big Discounts on Popular Products!</h3>

                <Items allItems={allItems} cartItem={cartItem} setCartItem={setCartItem} cartItemId={cartItemId}
                    setCartItemId={setCartItemId} setXCount={setXCount} cartValue={cartValue} setCartValue={setCartValue}
                ></Items>

            </div>

        </div>
    </>
}

export default HotSales