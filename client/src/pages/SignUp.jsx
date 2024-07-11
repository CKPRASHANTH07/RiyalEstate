import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const res = await fetch('/api/auth/SignUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    
    if (data.success === false) {
      setError(data.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    navigate('/Signin')
  };

  return (
    <div className='py-20 font-mono items-center'>
      <h1 className='text-2xl text-center'>SIGN-UP</h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-center pt-10 space-y-4'>
        {error && <p className='text-red-500'>{error}</p>}
        <input
          type='text'
          placeholder='username'
          className='h-14 w-96 bg-white text-xl rounded-xl pl-4 border-2 border-gray-600'
          id='username'
          onChange={handleChange}
        />
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
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        <h1>
          Have an account!? <Link to='/Signin' className='text-green-800 animate-pulse'>Sign-In</Link>
        </h1>
      </form>
    </div>
  );
};

export default SignUp;
