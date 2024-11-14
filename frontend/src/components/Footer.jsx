import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
            <img src={assets.logo} className="mb-5 w-32" alt="logo"/>
            <p className="w-full sm:h-2/3 text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
        <div className="">
            <h5 className="text-xl font-medium mb-5">Company</h5>
            <ul className="flex flex-col gap-3 text-gray-600">
               <li>Home</li>
               <li>About us</li>
               <li>Delivery</li>
               <li>Privacy policy</li>
            </ul>
        </div>
        <div className="">
            <h5 className="text-xl font-medium mb-5">Get In Touch</h5>
            <ul className="flex flex-col gap-3 text-gray-600">
               <li>+1-000-000-0000</li>
               <li>alialaba@hotmail.com</li>
               <li>Instagram</li>
            </ul>
        </div>
      </div>

      <div className="py-5 text-center text-sm">
         <p>Copyright 2024@ alialaba - All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
