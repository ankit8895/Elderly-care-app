import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);
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
        </nav>
      </header>
    </>
  );
};

export default Header;
