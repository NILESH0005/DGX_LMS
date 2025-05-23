

import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { images } from '../../public/index.js';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";
import clsx from 'clsx';
import ApiContext from '../context/ApiContext.jsx';
import Cookies from 'js-cookie';
import { faHome, faComments, faCalendar, faBlog, faEnvelope, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const [isSideMenuOpen, setMenu] = useState(false);
    const { user, userToken, setUserToken } = useContext(ApiContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setIsLoggedIn(!!userToken && !!user);
    }, [user, userToken]);

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        toggleDropdown();
        Cookies.remove('userToken');
        setUserToken(null);
        navigate('/');
    };

    const navLinks = [
        // { label: 'Community Guidelines', to: '/CommunityGuidelines', icon: faBook },
        { label: 'OUR LEARN HUB', to: '/Lms', icon: faBook }
    ];

    return (
        <main>
            <nav className='flex justify-between items-center h-14 md:h-10 lg:h-12 xl:h-14'>
                <section>
                    <Link to="/" className="flex items-center space-x-0 rtl:space-x-reverse">
                        <AiOutlineMenu onClick={() => setMenu(true)} className='text-3xl cursor-pointer md:hidden' />
                        <img src={images.nvidiaPP} className="h-10 md:h-10 lg:h-12 xl:h-14" alt="NVIDIA Preferred Partner Logo" />
                    </Link>
                </section>
                <div className="flex items-center justify-center font-bold xl:space-x-9 lg:space-x-5 md:space-x-3">
                    {navLinks.map((d, i) => (
                        <Link
                            key={i}
                            className={clsx(
                                'hidden md:block text-DGXblue text-sm transition-all duration-300 ease-in-out relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full after:bg-DGXblue after:scale-x-0 after:transition-transform after:duration-300',
                                location.pathname === d.to && 'after:scale-x-100',
                                'hover:text-DGXgreen hover:font-black'
                            )}
                            to={d.to}
                        >
                            {d.label}
                        </Link>
                    ))}
                </div>

                {/* Side Menu */}
                <div className={clsx('fixed h-full w-screen lg:hidden bg-DGXblack/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all z-10', isSideMenuOpen && 'translate-x-0')}>
                    <section className="text-DGXwhite bg-DGXblue flex flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-72">
                        <IoMdCloseCircleOutline
                            onClick={() => setMenu(false)}
                            className="mt-0 mb-5 text-2xl cursor-pointer hover:text-DGXgreen hover:text-3xl"
                        />
                        {navLinks.map((d, i) => (
                            <Link
                                key={i}
                                className={clsx(
                                    'font-bold flex items-center gap-4 transition duration-300 ease-in-out relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full after:bg-DGXblue after:scale-x-0 after:transition-transform after:duration-300',
                                    location.pathname === d.to && 'after:scale-x-100',
                                    'hover:text-DGXgreen hover:text-lg'
                                )}
                                to={d.to}
                                onClick={() => setMenu(false)}
                            >
                                <FontAwesomeIcon icon={d.icon} className="text-xl" />
                                {d.label}
                            </Link>
                        ))}
                    </section>
                </div>

                {/* User Authentication Section */}
                <section className='flex items-center justify-center gap-6'>
                    {!isLoggedIn ? (
                        <Link to="/SignInn">
                            <button
                                type="button"
                                className="text-white bg-DGXgreen focus:ring-4 flex items-center justify-center focus:outline-none focus:ring-DGXgreen font-medium rounded-md h-8 md:h-9 lg:h-10 xl:h-12 text-sm md:text-base lg:text-lg xl:text-xl px-6 py-3 hover:bg-DGXblue transition duration-300"
                            >
                                Login
                            </button>
                        </Link>
                    ) : (
                        <div className='relative flex items-center gap-2'>
                            <h1 className='text-sm font-medium'>{user.Name}</h1>
                            <img
                                src={images.defaultProfile}
                                alt="User"
                                className='h-12 md:h-10 md:w-10 w-12 rounded-full border-2 cursor-pointer'
                                onClick={toggleDropdown}
                            />
                            {isDropdownOpen && (
                                <div className='absolute right-0 mt-8 w-48 bg-white rounded-md shadow-lg z-50 border border-DGXblue'>
                                    <Link to="/UserProfile" className='block px-4 py-2 text-gray-800 hover:bg-gray-200' onClick={toggleDropdown}>Profile</Link>
                                    {user.isAdmin === '1' && (
                                        <Link to="/AdminDashboard" className='block px-4 py-2 text-gray-800 hover:bg-gray-200' onClick={toggleDropdown}>Admin Profile</Link>
                                    )}
                                    <button onClick={handleLogout} className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200'>Logout</button>
                                </div>
                            )}
                        </div>
                    )}
                </section>
            </nav>
            <hr className='lg:mx-22 border-b-4 border-DGXblue' />
        </main>
    );
};

export default Navbar;
