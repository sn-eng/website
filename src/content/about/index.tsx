import React from 'react'
import { Helmet } from 'react-helmet-async'
import Management from './Management'
import Services from './Services'
import Story from './Story'
import Vision from './Vision'

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About Us | Siduna & Ndou Eng</title>
            </Helmet>
            <Story />
            <Vision />
            <Services />
            <Management />
        </div>
    )
}

export default About
