import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'

const GeneralPagesLayout = () => {
    return (
        <div className='bg-[#f2fcf4'>
            <Header />
            <div style={{ minHeight: '40vh' }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default GeneralPagesLayout
