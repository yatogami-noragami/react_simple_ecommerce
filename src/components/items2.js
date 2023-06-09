import { Link } from 'react-router-dom'

import p6 from './../image/p6.png'
import p7 from './../image/p7.png'
import p8 from './../image/p8.png'
import p9 from './../image/p9.png'
import p10 from './../image/p10.png'


const Items2 = () => {
    const itemsArray = [
        { image: p6, price: 3000000 },
        { image: p7, price: 25000 },
        { image: p8, price: 5000 },
        { image: p9, price: 20000 },
        { image: p10, price: 40000 },
    ];
    return <>
        <div className="row mt-5">

            {itemsArray.map((item, index) => (
                <div className=" col-lg-3 col-md-4 col-6 my-5 itemsCon position-relative" key={index}>
                    <img src={item.image} alt='p1' className=' img-fluid p-4 mb-5' />

                    <div className='w-100 itemsConBtnDiv position-absolute top-50 start-0'>
                        <button className='btn btn-warning fw-bold d-block mx-auto mb-3'>add to cart</button>
                        <Link to={`/items/${index + 6}`} className='btn btn-light fw-bold d-block mx-auto w-50'>view info</Link>
                    </div>

                    <div className=' w-100'>
                        <h5 className='text-light text-center'>Item {index + 6}</h5>

                        <h5 className=' text-warning text-decoration-underline mt-3'>{item.price} ks</h5>
                    </div>
                </div>
            ))}



        </div>
    </>
}

export default Items2