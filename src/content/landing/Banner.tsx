import React from 'react'
import landingBanner from '../../assets/project4.jpg'

const Banner = () => {
    return (
        <section className='relative'>
            <div
                className='relative pt-16 pb-32 flex content-center items-center justify-center '
                style={{
                    minHeight: '80vh',
                }}
            >
                <div
                    className='absolute top-0 w-full h-full bg-center bg-cover '
                    style={{
                        backgroundImage: `url(${landingBanner})`,
                    }}
                >
                    <span
                        id='blackOverlay'
                        className='w-full h-full absolute opacity-[65%] bg-black'
                    ></span>
                </div>
                <div className='container relative mx-auto'>
                    <div className='items-center flex flex-wrap'>
                        <div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
                            <div className='pr-12'>
                                <h1 className='text-white font-semibold text-5xl'>
                                    Your story begins with us.
                                </h1>
                                <p className='mt-4 text-[20px] text-white'>
                                    Ours is a lifelong pledge to
                                    perfection-guaranteed quality construction
                                    service that is delivered on our bedrock of
                                    professionalism, innovation and integrity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
                    style={{ height: '70px' }}
                >
                    <svg
                        className='absolute bottom-0 overflow-hidden'
                        xmlns='http://www.w3.org/2000/svg'
                        preserveAspectRatio='none'
                        version='1.1'
                        viewBox='0 0 2560 100'
                        x='0'
                        y='0'
                    >
                        <polygon
                            className='text-[#10a65c] fill-current'
                            points='2560 0 2560 100 0 100'
                        ></polygon>
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default Banner
