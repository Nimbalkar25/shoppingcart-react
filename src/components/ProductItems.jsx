import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify"
import {add,remove} from "../redux/slices/cartSlice"

const ProductItems = ({ post }) => {
    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();


    const addToCart = () => {
        dispatch(add(post));
        toast.success("Items added to Cart");
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item Remove from cart")
    }

    return (
        <div className='group flex flex-col w-59 rounded-md items-center gap-2 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] transition-transform duration-200 hover:scale-105 cursor-pointer'>
            <div className=' flex flex-col w-[80%] h-[30%] items-center justify-center gap-4  '>
                <h2 className='font-bold  mt-5'>{post.title.substring(0, 17)}...</h2>
                <p className='w-[70%] text-[0.7rem]'>{post.description.substring(0, 40)}...</p>
            </div>

            <div className='h-[50%] ' >
                <img className='w-30 h-40' src={post.image} />
            </div>
            <div className='flex justify-between w-full p-3  items-center  '>
                <p className='text-green-600 font-bold'>${post.price}</p>
                <div className='border w-25 flex justify-center font-semibold py-1 rounded-3xl text-[0.7rem] px-3 group-hover:bg-gray-700 group-hover:text-white group-hover:font-bold '>
                    {
                        cart.some((p) => p.id === post.id) ?
                            (   
                                <button className='cursor-pointer' onClick={removeFromCart}>
                                Remove Item
                                </button>) :
                            (
                                <button className='cursor-pointer' onClick={addToCart}>
                                    Add to Cart
                                </button>
                            )

                    }
                </div>

            </div>
        </div>
    )
}

export default ProductItems
