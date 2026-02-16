import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import cartlogo from "../assets/cartlogo-removebg.png"
import { useSelector } from "react-redux";

const Navbar = () => {
    const { cart } = useSelector((state) => state);
    return (
        <div className="bg-black w-full flex justify-center h-auto items-center fixed">

            <div className="text-white w-[60%] flex justify-between py-3" >
                <NavLink to="/">
                    <div className='h-15 w-15 bg-black' >
                        <img src={cartlogo} />
                    </div>
                </NavLink>


                <div className="flex items-center gap-5">
                    <NavLink to="/">
                        <p className="text-[1rem]">Home</p>
                    </NavLink>

                    <NavLink to="/cart">
                        <div className="relative">

                            {cart.length > 0 && (
                                <div className="absolute bg-green-500 rounded-full flex justify-center items-center w-4 h-4 text-[0.6rem] top-[-0.3rem] right-[-0.2rem] animate-bounce [animation-duration:0.8s]">
                                    {cart.length}
                                </div>
                            )}

                            <FaShoppingCart className="text-2xl" />

                        </div>

                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
