import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

export default function Footer() {
    const [navbarOpen, setNavbarOpen] = React.useState(false)
    return (
        <>
            <nav className='relative flex flex-wrap items-center justify-between px-2 py-3  mb-3'>
                <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
                    <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
                        <Link to='/'>
                            <img
                                src={Logo}
                                alt='Kadge Construction'
                                className='h-12 pl-12  hover:opacity-75'
                            />
                        </Link>
                        <button
                            className='text-gray-800 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                            type='button'
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className='fas fa-bars'></i>
                        </button>
                    </div>
                    <div
                        className={
                            'lg:flex flex-grow items-center' +
                            (navbarOpen ? ' flex' : ' hidden')
                        }
                        id='example-navbar-danger'
                    >
                        <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
                            <li className='nav-item'>
                                <Link to='/'>
                                    <h1 className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75'>
                                        Home
                                    </h1>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/services'>
                                    <h1 className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75'>
                                        Services
                                    </h1>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about'>
                                    <h1 className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75'>
                                        About Us
                                    </h1>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/contact'>
                                    <h1 className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75'>
                                        Contact
                                    </h1>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
