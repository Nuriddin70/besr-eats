import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import{BsFillCartFill} from 'react-icons/bs'

function Navbar() {
  return (
    <div className="max-w-[1280px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={32} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold ">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 
        rounded-full p-1 text-[14]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>
      {/* Search input */}
      <div className="bg-gray-200 flex items-center rounded-full
        px-2 w-[200px] sm:w-[380px] lg:w-[480px]">
        <AiOutlineSearch size={25}/>
        <input placeholder="Search foods" type="text" className="bg-transparent
        p-2 w-full focus:outline-none "/>
      </div>

    {/* Cart button */}
    <button className=" hidden md:flex items-center bg-black text-white rounded-full
    py-2">
      <BsFillCartFill size={20} className="mr-2"/> caft
    </button>
    </div>
  );
}

export default Navbar;
