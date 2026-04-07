import { ShoppingCart } from 'lucide-react';
import React from 'react';

const NavBar = ({cart}) => {
  return (
    <nav className="md:fixed md:top-0 md:left-0 md:w-full md:z-50">
      <div className="bg-base-100 shadow-sm">
        <div className="lg:max-w-[88%] navbar mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li className="font-medium"><a>Product</a></li>
                <li className="font-medium"><a>Feature</a></li>
                <li className="font-medium"><a>Pricing</a></li>
                <li className="font-medium"><a>Testimonials</a></li>
                <li className="font-medium"><a>FAQ</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-3xl font-bold text-[#7a22f8]">DigiTools</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="font-medium"><a>Product</a></li>
              <li className="font-medium"><a>Feature</a></li>
              <li className="font-medium"><a>Pricing</a></li>
              <li className="font-medium"><a>Testimonials</a></li>
              <li className="font-medium"><a>FAQ</a></li>
            </ul>
          </div>
          <div className="navbar-end items-center gap-6">
            <button className="relative text-zinc-700 hover:text-black transition-colors">
              <ShoppingCart size={24} />
              
              {cart.length !== 0 && (<span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                {cart.length}
              </span>)}
              
            </button>

            <a className="hidden cursor-pointer font-medium text-zinc-900 hover:text-black md:flex">
              Login
            </a>
            
            <a className="btn btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-[#9139F6] transition hover:scale-103 active:scale-97">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;