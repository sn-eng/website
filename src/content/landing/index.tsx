import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from './Banner'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Welcome from './Welcome'

const LandingPage = () => {
    return (
        <div>
            <Helmet>
                <title>Siduna & Ndou Eng | Home</title>
                {/* <!-- Search Engine --> */}
                <script
                    className='structured-data-list'
                    type='application/ld+json'
                >
                    {`
          { 
          "@context": "https://schema.org",
          "@type": "Corporation",
          "name": "Siduna & Ndou Engineering | Civil Engineering and Construction Services",
          "description": "Your one stop shop for all civil engineering and construction services in Zimbabwe",
          "url": "https://sn-eng.co.zw",
          "logo": "https://www.facebook.com/photo/?fbid=105083715809516&set=a.105075799143641",
          "potentialAction": {
              "@type": "SearchAction",
              "target": "https://sn-eng.co.zw/#/about/{search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+263778836553",
                "email": "siduna.ndou@gmail.com",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["en"]
            },
            "sameAs": [
                "https://www.facebook.com/sn.engZW",
                "https://http://twitter.com/sn_engZW",
            ],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office 201 Business Suites, Bulawayo Centre, Bulawayo",
                "addressLocality": "Bulawayo Centre, Bulawayo, Zimbabwe",
                "addressRegion": "Lucknow, U.P",
                "addressCountry": "ZW"
                        }
                    }`}
                </script>
            </Helmet>
            <Banner />
            <Welcome />
            <Contact />
            <Portfolio />
        </div>
    )
}

export default LandingPage
