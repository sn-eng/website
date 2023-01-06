import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../admin/components/sidebar'

const AdminLayout = () => {
    return (
        <div className='container flex flex-row'>
            <div className='items-center'>
                <Sidebar />
            </div>
            <div className='flex-1 p-8'>
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout
