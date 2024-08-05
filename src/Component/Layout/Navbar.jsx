import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='sticky top-0 z-50 bg-[#000300]'>
      <div className='flex items-center justify-between px-6 lg:px-28 max-w-[1280px] lg:mx-auto text-gray-200 h-28'>
        <div className='hidden md:block'>
          <ul className='flex'>
            <li className='p-4 hover:border-b-4 border-red-800'>
              <NavLink to="/"   className="text-white">Home</NavLink>
            </li>
            <li className='p-4 hover:border-b-4 border-red-800'>
              <NavLink to="/genre"  className="text-white">Genre</NavLink>
            </li>
            <li className='p-4 hover:border-b-4 border-red-800'>
              <NavLink to="/country"  className="text-white">Country</NavLink>
            </li>
          </ul>
        </div>
        <div className='lg:w-56 lg:bg-slate-100 text-gray-200 lg:text-gray-950 p-2 rounded-3xl cursor-text lg:flex hidden md:block'>
          <FaSearch className='ml-auto cursor-pointer ' />
        </div>
        <div className='hidden md:block'>
          <ul className='flex'>
            <li className='p-4 hover:border-b-4 border-red-800'><NavLink to="/movies"  className="text-white">Movies</NavLink></li>
            <li className='p-4 hover:border-b-4 border-red-800'><NavLink to="/series"  className="text-white">Series</NavLink></li>
            <li className='p-4 hover:border-b-4 border-red-800'><NavLink to="/animation"  className="text-white">Animation</NavLink></li>
          </ul>
        </div>
        <div className='hidden md:block'>
          <ul className='flex'>
            <li className='p-4 hover:border-b-4 border-red-800 hidden md:block'><NavLink to="/login-signup"  className="text-white">Login/SignUp</NavLink></li>
            <li className='p-4 cursor-pointer'><IoMdNotifications className="text-white" size={30} /></li>
          </ul>
        </div>

        {/* mobile menu */}

        <div className='cursor-pointer block md:hidden ' onClick={handleNav}>
          <div className='flex items-center justify-between relative'>
            <div className='fixed left-2'><h1 className='uppercase text-3xl'>Movie</h1></div>
            <div className='fixed right-2'>
              <ul className='flex gap-2 items-center'>
                <li>
                  <div className='lg:w-56 lg:bg-slate-100 text-gray-200 lg:text-gray-950 p-2 rounded-3xl cursor-text lg:flex'>
                    <FaSearch size={30} className='ml-auto cursor-pointer ' />
                  </div>
                </li>
                <li className='p-4 cursor-pointer'><IoMdNotifications className="text-white" size={30} /></li>
                <li> {!nav ? (<AiOutlineClose size={30} />) : (<AiOutlineMenu size={30} />)}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={!nav ? 'fixed md:hidden z-20 top-0 left-0 w-[60%] bg-[#000300] text-gray-200 h-full uppercase border-r border-gray-900 ease-in-out duration-700' : 'fixed left-[-100%] ease-in-out duration-700'}>
          <div>
            <ul>
              <li className='p-4 hover:border-b-4 border-red-800'>
                <NavLink to="/"   className="text-white">Home</NavLink>
              </li>
              <li className='p-4 hover:border-b-4 border-red-800'>
                <NavLink to="/genre"  className="text-white">Genre</NavLink>
              </li>
              <li className='p-4 hover:border-b-4 border-red-800'>
                <NavLink to="/country"  className="text-white">Country</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='p-4 hover:border-b-4 border-red-800'>
                <NavLink to="/movies" className="text-white">Movies</NavLink>
              </li>
              <li className='p-4 hover:border-b-4 border-red-800'>
                <NavLink to="/series" className="text-white">Series</NavLink>
              </li>
              <li className='p-4 hover:border-b-4 border-red-800'>
                <NavLink to="/animation" className="text-white">Animation</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='p-4 hover:border-b-4 border-red-800'>
                <NavLink to="/login-signup" className="text-white">Login/SignUp</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
