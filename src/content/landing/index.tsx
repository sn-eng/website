import React from 'react'
import Banner from './Banner'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'
import Welcome from './Welcome'

const LandingPage = () => {
    return (
        <div>
            <Banner />
            <Welcome />
            <Portfolio />
            <Testimonials />
        </div>
    )
}

export default LandingPage
