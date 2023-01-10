import React from 'react'
import { Helmet } from 'react-helmet-async'
import Articles from './Articles'
import Banner from './Banner'
const Services = () => {
    return (
        <div>
            <Helmet>
                <title>Our Blog | Siduna & Ndou Eng</title>
            </Helmet>
            <Banner />
            <Articles />
        </div>
    )
}

export default Services
