import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'

function Footer() {
    return (
        <footer className='relative bg-[#f2fcf4] pt-8 pb-6'>
            <div
                className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20'
                style={{ height: '80px' }}
            >
                <svg
                    className='absolute bottom-0 overflow-hidden'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='none'
                    version='1.1'
                    viewBox='0 0 2560 100'
                    x='0'
                    y='0'
                >
                    <polygon
                        className='text-[#f2fcf4] fill-current'
                        points='2560 0 2560 100 0 100'
                    ></polygon>
                </svg>
            </div>
            <div className='container mx-auto px-4'>
                <div className='flex flex-wrap'>
                    <div className='w-full lg:w-6/12 px-4'>
                        <h4 className='text-3xl font-semibold'>
                            Let's keep in touch!
                        </h4>
                        <h5 className='text-lg mt-0 mb-2 text-gray-700'>
                            Find us on any of these platforms, we respond 1-2
                            business days.
                        </h5>
                        <div className='mt-6'>
                            <button
                                className='bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3'
                                type='button'
                            >
                                <i className='flex fab fa-twitter'></i>
                            </button>
                            <button
                                className='bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3'
                                type='button'
                            >
                                <i className='flex fab fa-facebook-square'></i>
                            </button>
                            <button
                                className='bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3'
                                type='button'
                            >
                                <i className='flex fab fa-dribbble'></i>
                            </button>
                            <button
                                className='bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3'
                                type='button'
                            >
                                <i className='flex fab fa-github'></i>
                            </button>
                        </div>
                    </div>
                    <div className='w-full lg:w-6/12 px-4'>
                        <div className='flex flex-wrap items-top mb-6'>
                            <div className='w-full lg:w-4/12 px-4 ml-auto'>
                                <span className='block uppercase text-gray-600 text-sm font-semibold mb-2'>
                                    Useful Links
                                </span>
                                <ul className='list-unstyled'>
                                    <li>
                                        <Link
                                            className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                                            to='about'
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                                            to='blog'
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                                            to='services'
                                        >
                                            Services
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-full lg:w-4/12 px-4'>
                                <span className='block uppercase text-gray-600 text-sm font-semibold mb-2'>
                                    Other Resources
                                </span>
                                <ul className='list-unstyled'>
                                    <li>
                                        <NavLink
                                            className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                                            to='/terms'
                                        >
                                            Terms & Conditions
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                                            to='privacy-policy'
                                        >
                                            Privacy Policy
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                                            to='contact'
                                        >
                                            Contact Us
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='my-6 border-gray-400' />
                <div className='flex flex-wrap items-center md:justify-between justify-center'>
                    <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
                        <div className='text-sm text-gray-600 font-semibold py-1'>
                            Siduna & Ndou Engineering (PVT)(LTD) ©{' '}
                            {new Date().getFullYear()}.{' '}
                            <a
                                href='https://munashe.co.zw'
                                className='text-gray-900 hover:text-green-800'
                            >
                                SiDesigned
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
