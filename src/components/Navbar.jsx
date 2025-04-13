import React from 'react'
import { appleImg, searchImg, bagImg } from '../utils';
import {navLists} from '../constants';

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex items-center'>
        <nav className='flex w-full screen-max-width items-center justify-between'>
            {/* Left Section: Apple Logo */}
            <img src={appleImg} alt="Apple" width={14} height={18} />

            {/* Center Section: Navigation Links */}
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav) => (
                    <div key={nav} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                        {nav}
                    </div>
                ))}
            </div>

            {/* Right Section: Search & Bag Icons */}
            <div className='flex items-center gap-7 max-sm:justify-end max-sm:flex-1'>
                <img src={searchImg} alt="searchImage" width={18} height={18} />
                <img src={bagImg} alt="bag" width={18} height={18} />
            </div>
        </nav>
    </header>

  )
}

export default Navbar
