import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='bg-yellow-200 h-18 w-full font-mono border-black rounded-b-2xl border-2 fixed'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl ml-4 flex flex-col'>
          <span className='text-red-500'>Riyal-</span>
          <span className='text-green-500 ml-10'>Estate</span>
        </h1>
        <input type='text' placeholder='Search' className=' md:h-12 md:w-80 rounded-lg mt-1 pl-4 h-10 w-44 bg-yellow-50' />
        <div className='md:hidden mr-4'>
          <button className='text-4xl' onClick={() => setMenuOpen(!menuOpen)}>= </button>
        </div>
        <div className={`hidden text-xl space-x-5 justify-end mr-4 md:flex`}>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Signin">Signin</Link>
          <Link to="/SignUp">SignUp</Link>
          <Link to="/Profile">Profile</Link>
        </div>
      </div>
      {menuOpen && (
        <div className='flex flex-col  space-y-2 items-end pr-10 w-full md:hidden bg-yellow-200'>
          <Link to="/" onClick={() => setMenuOpen(false)}className='hover:text-red-500 hover:underline'>Home</Link>
          <Link to="/About" onClick={() => setMenuOpen(false)}className='hover:text-red-500 hover:underline'>About</Link>
          <Link to="/Signin" onClick={() => setMenuOpen(false)}className='hover:text-red-500 hover:underline'>Signin</Link>
          <Link to="/SignUp" onClick={() => setMenuOpen(false)}className='hover:text-red-500 hover:underline'>SignUp</Link>
          <Link to="/Profile" onClick={() => setMenuOpen(false)} className='hover:text-red-500 hover:underline'>Profile</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
