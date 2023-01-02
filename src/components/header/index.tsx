import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

export default function Header(props: any) {
    const [navbarOpen, setNavbarOpen] = React.useState(false)
    return (
        <nav
            className={
                (props.transparent
                    ? 'top-0 absolute z-50 w-full'
                    : 'relative shadow-lg bg-white shadow-lg') +
                ' flex flex-wrap items-center justify-between px-2 py-3 '
            }
        >
            <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
                <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
                    <Link to='/'>
                        <img
                            src={Logo}
                            alt='Kadge Construction'
                            className='h-[40px] pl-12  hover:opacity-75'
                        />
                    </Link>
                    <button
                        className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                        type='button'
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <i className='text-gray-800f as fa-bars'></i>
                    </button>
                </div>
                <div
                    className={
                        'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
                        (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
                    }
                    id='example-navbar-warning'
                >
                    <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
                        <li className='flex items-center'>
                            <Link to='/'>
                                <button
                                    className='active:text-gray-600 hover:text-[#10a65c] text-sm font-bold  text-gray-800  px-4  rounded  outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                                    type='button'
                                    style={{ transition: 'all .15s ease' }}
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <i className='fas fa-arrow-alt-circle-down'></i>{' '}
                                    Home
                                </button>
                            </Link>
                        </li>
                        <li className='flex items-center'>
                            <Link to='/about'>
                                <button
                                    className='active:text-gray-600 hover:text-[#10a65c] text-sm font-bold  text-gray-800  px-4  rounded  outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                                    type='button'
                                    style={{ transition: 'all .15s ease' }}
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <i className='fas fa-arrow-alt-circle-down'></i>{' '}
                                    About Us
                                </button>
                            </Link>
                        </li>
                        <li className='flex items-center'>
                            <Link to='/blog'>
                                <button
                                    className='active:text-gray-600 hover:text-[#10a65c] text-sm font-bold  text-gray-800  px-4 rounded  outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                                    type='button'
                                    style={{ transition: 'all .15s ease' }}
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <i className='fas fa-arrow-alt-circle-down'></i>{' '}
                                    Blog
                                </button>
                            </Link>
                        </li>
                        <li className='flex items-center'>
                            <Link to='/contact'>
                                <button
                                    className='active:text-gray-600 hover:text-[#10a65c] text-sm font-bold  text-gray-800  px-4  rounded  outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                                    type='button'
                                    style={{ transition: 'all .15s ease' }}
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <i className='fas fa-arrow-alt-circle-down'></i>{' '}
                                    Contact Us
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
