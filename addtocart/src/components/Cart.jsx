import React, { useState } from 'react'

const Cart = ({cart,setCart}) => {
    const [price,setPrice] = useState(0);
    return (
    <div>
      {
        cart?.map((item =>(
            <div className='cart_box' key={item.id}>
                <div className='cart_img'>
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>
                </div>
                <div>
                    <button>+</button>
                    <button>-</button>
                </div>
                <span>{item.price}</span>
                <button>Remove</button>
            </div>
        )))
      }
    </div>
  )
}

export default Cart
