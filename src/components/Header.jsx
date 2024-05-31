import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/GreenShopLogo-min.png';
import Search from '../assets/Search.svg';
import Shop from '../assets/Shop.png';
import exit from '../assets/Logout.png';
import Avatar from '@mui/material/Avatar'; // Using MUI Avatar for user icon
import { Link } from 'react-router-dom';

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alreadyLoggedInMessage, setAlreadyLoggedInMessage] = useState('');
  const navigate = useNavigate();

  // Login state and refs
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const loginEmailRef = useRef(null);
  const loginPasswordRef = useRef(null);

  // Register state and refs
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const registerUsernameRef = useRef(null);
  const registerEmailRef = useRef(null);
  const registerPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  useEffect(() => {
    if (isLoggedIn) {
      setShowLoginModal(false); // Hide modal on login
    }
  }, [isLoggedIn]);

  // Login click handler
  const handleLoginClick = () => {
    let valid = true;
    if (!loginEmail) {
      loginEmailRef.current.style.borderColor = 'red';
      valid = false;
    } else {
      loginEmailRef.current.style.borderColor = '';
    }
    if (!loginPassword) {
      loginPasswordRef.current.style.borderColor = 'red';
      valid = false;
    } else {
      loginPasswordRef.current.style.borderColor = '';
    }

    if (valid) {
      setIsLoggedIn(true); // Set login state to true
      navigate('/login'); // Navigate to Login component
    }
  };

  // Register click handler
  const handleRegisterClick = () => {
    let valid = true;

    if (!registerUsername) {
      registerUsernameRef.current.style.borderColor = 'red';
      valid = false;
    } else {
      registerUsernameRef.current.style.borderColor = '';
    }

    if (!registerEmail) {
      registerEmailRef.current.style.borderColor = 'red';
      valid = false;
    } else {
      registerEmailRef.current.style.borderColor = '';
    }

    if (!registerPassword) {
      registerPasswordRef.current.style.borderColor = 'red';
      valid = false;
    } else {
      registerPasswordRef.current.style.borderColor = '';
    }

    if (!confirmPassword) {
      confirmPasswordRef.current.style.borderColor = 'red';
      valid = false;
    } else {
      confirmPasswordRef.current.style.borderColor = '';
    }

    if (registerPassword && confirmPassword && registerPassword !== confirmPassword) {
      confirmPasswordRef.current.style.borderColor = 'red';
      alert("Passwords do not match");
      valid = false;
    }

    if (valid) {
      // Simulate successful registration
      alert('Siz alo darajada ro\'yxatdan o\'tdingiz.');
      // Reset the input fields
      setRegisterUsername('');
      setRegisterEmail('');
      setRegisterPassword('');
      setConfirmPassword('');
    }
  };

  // Close modal handler
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setShowLoginModal(false);
      setAlreadyLoggedInMessage('');
    }
  };

  // Handle opening login modal
  const handleLoginButtonClick = () => {
    if (isLoggedIn) {
      setAlreadyLoggedInMessage('You are already logged in.');
    }
    setShowLoginModal(true);
  };

  return (
    <>
      <div className='w-[85%] h-[70px] mx-auto flex justify-between items-center border-b'>
        <div className='w-[15%] h-[100%] flex items-center'>
          <img
            src={logo}
            alt="GREENSHOP_IMG"
            className='w-[160px] h-[40px]'
          />
        </div>
        <div className=' w-[25%] h-[100%]'>
          <ul className='w-[100%] h-[100%] flex items-center justify-between'>
            <li className='list font-medium text-[gray] text-[17px] cursor-pointer transition duration-150 ease-out md:ease-in hover:text-[black] border-white border-b-[3px] hover:border-green-500'>
              <Link to='/'>Home</Link>
            </li>
            <li className='list font-medium text-[gray] text-[17px] cursor-pointer transition duration-150 ease-out md:ease-in hover:text-[black] border-white border-b-[3px] hover:border-green-500'>
              Shop
            </li>
            <li className='list font-medium text-[gray] text-[17px] cursor-pointer transition duration-150 ease-out md:ease-in hover:text-[black] border-white border-b-[3px] hover:border-green-500'>
              Plant Care
            </li>
            <li className='list font-medium text-[gray] text-[17px] cursor-pointer transition duration-150 ease-out md:ease-in hover:text-[black] border-white border-b-[3px] hover:border-green-500'>
              Blogs
            </li>
          </ul>
        </div>
        <div className='w-[15%] h-[100%]'>
          <ul className='w-[100%] h-[100%] flex justify-between items-center'>
            <li className='cursor-pointer'>
              <img src={Search} alt="" className='w-[25px] h-[25px]' />
            </li>
            <li className='cursor-pointer'>
              <img src={Shop} alt="" className='w-[25px] h-[25px]' />
            </li>
            <li className='cursor-pointer'>
              {isLoggedIn ? (
                <Link to='/login'><Avatar alt="User Avatar" src="/path/to/avatar.jpg" /></Link> // Placeholder for avatar image
              ) : (
                <button
                  onClick={handleLoginButtonClick}
                  className='w-[100px] h-[40px] outline-none rounded-[10px] bg-green-600 flex justify-center items-center gap-3 font-semibold text-white'
                >
                  <img src={exit} alt="" className='w-[20px] h-[20px]' />
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
          <div className="bg-white p-6 rounded-md w-[400px] h-[550px] relative" onClick={(e) => e.stopPropagation()}>
            <ul className='w-[100%] h-[40px] flex items-center justify-center gap-4'>
              <li className={`cursor-pointer ${!showRegister ? 'font-bold' : ''}`} onClick={() => setShowRegister(false)}>Login</li>
              <li className='border-l-[2px] border-[#7d7d7d] h-[10px]'></li>
              <li className={`cursor-pointer ${showRegister ? 'font-bold' : ''}`} onClick={() => setShowRegister(true)}>Register</li>
            </ul>
            {!showRegister ? (
              <>
                <input
                  type="email"
                  ref={loginEmailRef}
                  className='w-[100%] outline-none h-[45px] mt-[10px] border pl-[10px] rounded'
                  placeholder='Enter your email address'
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  disabled={isLoggedIn}
                />
                <input
                  type="password"
                  ref={loginPasswordRef}
                  className='w-[100%] outline-none h-[45px] mt-[10px] border pl-[10px] rounded'
                  placeholder='Password'
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  disabled={isLoggedIn}
                />
                <button
                  className='w-[100%] h-[45px] rounded bg-green-600 text-white font-semibold flex items-center justify-center mt-[15px]'
                  onClick={handleLoginClick}
                  disabled={isLoggedIn}
                >
                  Login
                </button>
                {alreadyLoggedInMessage && (
                  <p className='text-red-600 text-center mt-[10px]'>{alreadyLoggedInMessage}</p>
                )}
              </>
            ) : (
              <>
                <input
                  type="text"
                  ref={registerUsernameRef}
                  className='w-[100%] outline-none h-[45px] mt-[10px] border pl-[10px] rounded'
                  placeholder='Username'
                  value={registerUsername}
                  onChange={(e) => setRegisterUsername(e.target.value)}
                />
                <input
                  type="email"
                  ref={registerEmailRef}
                  className='w-[100%] outline-none h-[45px] mt-[10px] border pl-[10px] rounded'
                  placeholder='Enter your email address'
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
                <input
                  type="password"
                  ref={registerPasswordRef}
                  className='w-[100%] outline-none h-[45px] mt-[10px] border pl-[10px] rounded'
                  placeholder='Password'
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
                <input
                  type="password"
                  ref={confirmPasswordRef}
                  className='w-[100%] outline-none h-[45px] mt-[10px] border pl-[10px] rounded'
                  placeholder='Confirm Password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  className='w-[100%] h-[45px] rounded bg-green-600 text-white font-semibold flex items-center justify-center mt-[15px]'
                  onClick={handleRegisterClick}
                >
                  Register
                </button>
              </>
            )}
            <div>
              <p className='text-center mt-[15px] mb-[15px]'>Or register with</p>
              <button className='w-[100%] h-[45px] border rounded mt-[10px]'>Continue with Google</button>
              <button className='w-[100%] h-[45px] border rounded mt-[10px]'>Continue with Facebook</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
