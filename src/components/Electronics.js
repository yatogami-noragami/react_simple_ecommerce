import Items2 from "./items2"
const Electronics = ({ blurValue, cartItem, setCartItem, cartItemId, setCartItemId, allItems }) => {
    return <>
        <div className="row mt-5">
            <div className="col-md-10 offset-md-1 my-5 ParentCon p-5"
                style={{ filter: `blur(${blurValue}px)` }}>

                <h1 className=' text-info text-center promoTxt3'>
                    Explore top-notch electronics at our store for an exceptional digital experience</h1>

                <Items2 allItems={allItems} cartItem={cartItem} setCartItem={setCartItem} cartItemId={cartItemId} setCartItemId={setCartItemId}></Items2>
            </div>

        </div>
    </>
}

export default Electronics