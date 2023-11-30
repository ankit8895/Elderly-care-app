import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const location = useLocation();
  const currentLocation = location.pathname;
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20);
    });
  });
  return (
    <>
      <header
        className={
          'fixed top-0 w-full z-30 bg-white transition-all ' +
          (scrollActive ? 'shadow-md pt-0' : 'pt-4')
        }
      >
        <nav className='max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4'>
          <div className='col-start-1 col-end-2 flex items-center'>
            <img
              src='https://cdn-icons-png.flaticon.com/128/1806/1806292.png'
              width='30'
              height='30'
              className='mr-2'
              alt='logo'
            />
            <strong>WiseGuardian</strong>
          </div>
          <div className='col-start-10 col-end-12 font-medium flex justify-end items-center'>
            {currentLocation === '/' && (
              <a
                className='text-black mx-2 sm:mx-4 capitalize tracking-wide hover:text-teal-500 transition-all'
                href='/'
              >
                Login In
              </a>
            )}

            <button className='font-medium tracking-wide py-2 px-5 sm:px-8 border border-red-500 outline-none rounded-l-full rounded-r-full capitalize bg-red-500 text-white transition-all hover:shadow-red-100'>
              Emergency Alert
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
