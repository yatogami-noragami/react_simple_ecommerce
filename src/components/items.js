import { Link } from 'react-router-dom'

import p1 from './../image/p1.png'
import p2 from './../image/p2.png'
import p3 from './../image/p3.png'
import p4 from './../image/p4.png'
import p5 from './../image/p5.png'

const Items = () => {

    const itemsArray = [
        { image: p1, price: 20000 },
        { image: p2, price: 15000 },
        { image: p3, price: 8000 },
        { image: p4, price: 12000 },
        { image: p5, price: 1000 },
    ];
    return <>
        <div className="row mt-5">

            {itemsArray.map((item, index) => (
                <div className=" col-lg-3 col-md-4 col-6 my-5 itemsCon position-relative" key={index}>
                    <img src={item.image} alt='p1' className=' img-fluid p-4 mb-5' />

                    <div className='w-100 itemsConBtnDiv d-lg-block d-none position-absolute top-50 start-0'>
                        <button className='btn btn-warning fw-bold d-block mx-auto mb-3'>add to cart</button>
                        <Link to={`/items/${index + 1}`} className='btn btn-light fw-bold d-block mx-auto w-50'>view info</Link>
                    </div>

                    <div className=' w-100'>
                        <h5 className='text-light text-center'>Item {index + 1}</h5>

                        <h5 className=' text-warning text-decoration-underline mt-3'>{item.price} ks</h5>
                    </div>
                </div>
            ))}



        </div>
    </>
}

export default Items