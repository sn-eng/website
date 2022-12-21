import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

const GeneralPagesLayout = () => {
    return (
        <div >
            <Header />
            <section style={{ height: '40vh' }}>
                <Outlet />
            </section>
            <Footer />
        </div>
    );
};

export default GeneralPagesLayout;
