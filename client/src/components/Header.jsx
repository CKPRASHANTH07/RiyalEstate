import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <header className='bg-red-500 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap items-center'>
            
            <span className='text-white text-base sm:text-xl pt-1 '>Riyal</span>
            <span className='text-[#ffc200] text-xl sm:text-3xl'>Estate</span>
            </h1>
        </Link>
        
          <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
       
       


        <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="text-3xl text-white flex sm:hidden"
      >
        =
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-40 mt-2 origin-top-right bg-red-500  rounded-md">
          <ul className='p-10'>
          <Link to='/'>
            <li className=' text-white p-2 hover:text-xl'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className=' text-white p-2 hover:text-xl'>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover p-2 hover:text-xl'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-white p-2 hover:text-xl'> Sign in</li>
            )}
          </Link>
        </ul>
        </div>
      )}
    </div>



        <ul className='sm:flex hidden gap-4 items-center'>
          <Link to='/'>
            <li className=' text-white hover:text-2xl'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className=' text-white hover:text-2xl'>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-white hover:text-2xl'> Sign in</li>
            )}
          </Link>
        </ul>
        
      </div>
    </header>
  );
}