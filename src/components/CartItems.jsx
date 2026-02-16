import React from 'react'
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify"
import { remove } from "../redux/slices/cartSlice"
import { useDispatch } from 'react-redux';


const CartItems = ({ item }) => {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item Remove from cart")
    }

    return (
        <div className="w-full  pt-30 px-6 flex items-center justify-center border-b ">

            <div className='flex  gap-10 '>
                <div className='w-75 h-60'>
                    <img  src={item.image} />
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-xl" >
                        {item.title}
                    </h1>
                    <h1 className="w-[85%]">
                        {item.description.substring(0, 104)}...
                    </h1>

                    <div className="flex justify-between w-full  pr-6" >
                        <p className="font-bold text-green-700 text-[1.3rem] ">
                            ${item.price}
                        </p>
                        <div onClick={removeFromCart} className="bg-red-300 text-red-600 p-3 rounded-full  "><MdDelete /></div>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default CartItems
