import React from 'react'
import { Link } from 'react-router-dom'
import Articles from './Articles'

const Blog = () => {
    return (
        <>
            <div className='mb-4'>
                <div className='content-center text-center mb-4'>
                    <h2 className='font-sans text-3xl font-bold tracking-tight text-gray-900'>
                        Blog Articles
                    </h2>
                </div>
                <div className='flex items-center space-x-3 justify-center'>
                    <Link to='/royalty/add/blog'>
                        <button
                            type='submit'
                            className='inline-flex items-center justify-center rounded bg-[#10a65c] hover:opacity-[80%] active:bg-[#f2fcf4] py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark'
                        >
                            Add Article
                        </button>
                    </Link>
                </div>
            </div>
            <Articles />
        </>
    )
}

export default Blog
