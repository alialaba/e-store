import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row border-[1px] rounded border-gray-700">
      <div className="left-side w-full sm:w-1/2  flex justify-center items-center py-10 px-4 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">Our BestSeller</p>
          </div>
          <h1 className="prata-regular text-3xl lg:text-5xl sm:py-3 leading-relaxed linear-wipe">
            Latest Arrival <br /> of Products
          </h1>
          
          <div className="flex items-center gap-2">
            <Link className="font-semibold text-sm md:text-base border-b-[1px] border-[#4caf50]">Shop Now</Link>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>

          </div>
        </div>
      </div>
      <div className="right-side w-full sm:w-1/2">
        <img src={assets.hero_img} alt="hero image" />
      </div>
    </section>
  );
};

export default Hero;
