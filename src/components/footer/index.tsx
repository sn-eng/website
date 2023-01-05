import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer className='relative bg-[#e8f3f5] pt-8 pb-6'>
            <div
                className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-[60px]'
                style={{ height: '60px' }}
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
                        className='text-[#e8f3f5] fill-current'
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
                            Find us on our social media platforms, we respond in
                            1-2 business days.
                        </h5>
                        <div className='mt-6 flex justify-left items-center'>
                            <a
                                href='https://www.facebook.com/sn.engZW'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <svg
                                    className='w-16 h-16 fill-[#3b5998] hover:opacity-[75%]'
                                    viewBox='0 0 32 32'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                                </svg>
                            </a>
                            <a
                                href='https://twitter.com/sn_engZW'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <svg
                                    className='w-16 h-16 fill-[#00acee] hover:opacity-[75%]'
                                    viewBox='0 0 32 32'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className='w-full lg:w-6/12 px-4'>
                        <div className='flex flex-wrap items-top mb-6'>
                            <div className='w-full lg:w-4/12 px-4 ml-auto'>
                                <span className='block uppercase text-[#10a65c] text-sm font-semibold mb-2'>
                                    Links
                                </span>
                                <ul className='list-unstyled'>
                                    <li>
                                        <Link
                                            className='text-gray-600 hover:text-[#10a65c] font-semibold block pb-2 text-sm'
                                            to=''
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className='text-gray-600 hover:text-[#10a65c] font-semibold block pb-2 text-sm'
                                            to='about'
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className='text-gray-600 hover:text-[#10a65c] font-semibold block pb-2 text-sm'
                                            to='blog'
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-full lg:w-4/12 px-4'>
                                <span className='block uppercase text-[#10a65c] text-sm font-semibold mb-2'>
                                    Other Resources
                                </span>
                                <ul className='list-unstyled'>
                                    <li>
                                        <NavLink
                                            className='text-gray-600 hover:text-[#10a65c] font-semibold block pb-2 text-sm'
                                            to='/terms'
                                        >
                                            Terms & Conditions
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className='text-gray-600 hover:text-[#10a65c] font-semibold block pb-2 text-sm'
                                            to='privacy-policy'
                                        >
                                            Privacy Policy
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className='text-gray-600 hover:text-[#10a65c] font-semibold block pb-2 text-sm'
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
                                className='text-gray-900 hover:text-[#10a65c]'
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
