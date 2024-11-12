import {assets} from "../assets/frontend_assets/assets"
import {Link, NavLink} from "react-router-dom"
import { useState } from "react";
export default function Navbar(){
   const [visible, setVisible] = useState(false)
    return(
        <header className="flex items-center justify-between py-5 font-medium ">

            <Link to="/">
            <img src={assets.logo} className="w-36" alt="brand-logo" />
            
            </Link>
            <ul className="hidden sm:flex  gap-5 text-sm text-gray-700">
             <NavLink to="/" className="flex flex-col items-center gap-1">
                <p>Home</p>
                <hr className="border-none w-2/4 h-[1.5px] bg-gray-700 hidden"/>
             </NavLink>

             <NavLink to="/collection" className="flex flex-col items-center gap-1">
                <p>Collection</p>
                <hr className="border-none w-2/4 h-[1.5px] bg-gray-700 hidden"/>
             </NavLink>
             <NavLink to="/about" className="flex flex-col items-center gap-1">
                <p>About</p>
                <hr className="border-none w-2/4 h-[1.5px] bg-gray-700 hidden"/>
             </NavLink>
             <NavLink to="/contact" className="flex flex-col items-center gap-1">
                <p>Contact</p>
                <hr className="border-none w-2/4 h-[1.5px] bg-gray-700 hidden"/>
             </NavLink>
            </ul>
            <div className="flex items-center gap-6">

               <img src={assets.search_icon}  alt="search icon" className="cursor-pointer w-5"/>
              
              <div className="group relative">
               <img src={assets.profile_icon} alt="profile icon" className="cursor-pointer w-5"/>
              </div>

              <Link to="/cart" className="relative">
               <img src={assets.cart_icon} alt="cart icon" className="cursor-pointer w-5"/>
               <div className="absolute right-[-5px] bottom-[-5px] w-4 bg-black text-white text-[8px] text-center leading-4 rounded-full aspect-square">0</div>
              </Link>
              <div onClick={()=> setVisible(true)}>
               <img src={assets.menu_icon} alt="menu icon" className="cursor-pointer w-5 sm:hidden"/>
              </div>
            </div>

           <nav className={`absolute right-0 top-0 bottom-0 overflow-hidden bg-slate-50 ${visible ? "w-full" : "w-0"}`}>
           <div className="flex flex-col text-gray-700">
               <div className="flex items-center gap-4 p-3 cursor-pointer"onClick={()=> setVisible(false)}>
                  <img src={assets.dropdown_icon} alt="dropdown icon" className="h-4 rotate-180" />
                  <p>Back</p>
               </div>

               <ul className="flex flex-col">
                  <NavLink onClick={()=> setVisible(false)} className="py-2 pl-6 border" to="/">Home</NavLink>
                  <NavLink onClick={()=> setVisible(false)} className="py-2 pl-6 border" to="/collection">Collection</NavLink>
                  <NavLink onClick={()=> setVisible(false)} className="py-2 pl-6 border" to="/about">About</NavLink>
                  <NavLink onClick={()=> setVisible(false)} className="py-2 pl-6 border" to="/contact">Contact</NavLink>
               </ul>
               
            </div>
           </nav>
           
        </header>
    );
}