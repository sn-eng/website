import React from 'react'

const Banner = () => {
    return (
        <section className='relative'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6'>
                {/* Hero content */}
                <div className='pt-20 pb-12 md:pt-32 md:pb-20'>
                    {/* Section header */}
                    <div className='text-center pb-12 md:pb-16'>
                        <h1
                            className='text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4'
                            data-aos='zoom-y-out'
                        >
                            Make your website{' '}
                            <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#0c4491] to-[#d2a517]'>
                                wonderful
                            </span>
                        </h1>
                        <div className='max-w-3xl mx-auto'>
                            <p
                                className='text-xl text-gray-600 mb-8'
                                data-aos='zoom-y-out'
                                data-aos-delay='150'
                            >
                                Our landing page template works on all devices,
                                so you only have to set it up once, and get
                                beautiful results forever.
                            </p>
                            <div
                                className='max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center'
                                data-aos='zoom-y-out'
                                data-aos-delay='300'
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
