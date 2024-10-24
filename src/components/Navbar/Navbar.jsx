import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return <div className="shadow-md bg-white dark:bg-gray-900
  dark:text-white fixed top-0 left-0 right-0 z-50">
    {/* upper Navbar */} 
    <div className="bg-primary/40 py-3 sm:py-0">
        <div className="container flex justify-between items-center">
            <div>
                <a href="#" className="font-bold text-2xl sm:text-3xl flex items-center gap-3 px-2 py-1">
                    <img className="w-1/4 h-15 object-contain bg-blue-600" src={Logo} alt="logo" />
                    <span>MyShop</span>
                </a>
            </div>
            {/* search bar and order button */}
            <div>
               <div className="group" >
                <input type="text" placeholder="Search for products, brands and more"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all
                 duration-300 rounded-full border: border-gray-400 px-2 py-1 
                 focus-outline-none focus border-4 focus:border-blue-600" />
               </div>
            </div>
        </div>
    </div>
    {/* lower Navbar */}
    <div></div>
  </div>;
}

export default Navbar;
