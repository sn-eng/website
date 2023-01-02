import React from 'react'

function Banner() {
    return (
        <section className='relative'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6'>
                {/* Hero content */}
                <div className='pt-8 pb-4 md:pt-32 md:pb-8'>
                    {/* Section header */}
                    <div className='text-center pb-12 md:pb-4'>
                        <h1
                            className='text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4'
                            data-aos='zoom-y-out'
                        >
                            Your Housing{' '}
                            <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#10a65c] to-[#0b341c]'>
                                Blog Site
                            </span>
                        </h1>
                        <div className='max-w-3xl mx-auto'>
                            <p
                                className='text-xl text-gray-600 mb-8'
                                data-aos='zoom-y-out'
                                data-aos-delay='150'
                            >
                                Check out the modern trends in architecture and
                                design, and the simple hacks that can transform
                                your house.
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
