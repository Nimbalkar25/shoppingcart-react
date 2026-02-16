import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import CartItems from '../components/CartItems';

const Cart = () => {

  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);


  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])


  return (
    <div className="flex justify-center">

      {
        cart.length > 0 ? (

          <div className='flex w-[60%] gap-7'>

            <div className="w-[60%]">
              {
                cart.map((item, index) => (
                  <div className="flex flex-col">
                    <CartItems item={item} key={item.id} itemIndex={index} />
                    
                  </div>
                ))
              }
            </div>




            <div className=''>
              <div className='flex flex-col h-screen justify-between pt-10 pb-24 fixed top-20'>
                <div className='text-green-700 font-bold' >
                <p className='text-xl'>YOUR CART</p>
                <h1 className='text-5xl'>SUMMARY</h1>
                <p className='text-xl mt-4'>Total items : {cart.length}</p>
              </div>

              <div className='flex flex-col gap-4'>
                <p className='font-semibold text-xl'>Total Amount : <span className='font-extrabold'>{`$${totalAmount.toFixed(2)}`}</span></p>
                <button className='font-extrabold w-100 px-10 py-4 bg-green-700 text-white rounded-md'>CheckOut Now</button>
              </div>
              </div>
            </div>
          </div>


        )


          :
          (<div className='flex flex-col h-screen justify-center items-center gap-3'>
            <div className='text-2xl font-bold'>No products in Cart</div>
            <NavLink to="/">
              <button className='px-7 py-2 bg-green-700 text-white font-bold rounded-lg'>Go To Shop</button>
            </NavLink>
          </div>)
      }

    </div>
  )
}

export default Cart
