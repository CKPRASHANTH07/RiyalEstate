import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
const Signin = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
 const {loading,error} = useSelector((state) =>state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    
    const res = await fetch('/api/auth/Signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    
    if (data.success === false) {
      dispatch(signInFailure(data.message));
      return;
    }

    dispatch(signInSuccess());
    navigate('/')
  };

  return (
    <div className='py-20 font-mono items-center'>
      <h1 className='text-2xl text-center'>SIGN-IN</h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-center pt-10 space-y-4'>
        {error && <p className='text-red-500'>{error}</p>}
       
        <input
          type='email'
          placeholder='email'
          className='h-14 w-96 bg-white text-xl rounded-xl pl-4 border-2 border-gray-600'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='h-14 w-96 bg-white text-xl rounded-xl pl-4 border-2 border-gray-600'
          id='password'
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-green-800 text-black text-xl rounded-xl transition duration-300 ease-in-out transform hover:bg-black hover:text-white h-14 w-96"
          type="submit" 
        >
          {loading ? 'Loading...' : 'Sign in'}
        </button>
        <h1>
          Don't Have an account!? <Link to='/SignUp' className='text-green-800 animate-pulse'>Sign-Up</Link>
        </h1>
      </form>
    </div>
  );
};

export default Signin;