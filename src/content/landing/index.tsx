import React from 'react'
import Banner from './Banner'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Welcome from './Welcome'

const LandingPage = () => {
    return (
        <div>
            <Banner />
            <Welcome />
            <Contact />
            <Portfolio />
        </div>
    )
}

export default LandingPage
