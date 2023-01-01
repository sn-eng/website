import React from 'react'
import aboutImage from '../../assets/about-image.jpg'

const Story = () => {
    return (
        <div className='container'>
            <div className='wow fadeInUp bg-white' data-wow-delay='.2s'>
                <div className='-mx-4 flex flex-wrap'>
                    <div className='w-full px-4'>
                        <div className='items-center justify-center overflow-hidden border lg:flex'>
                            <div className='w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]'>
                                <h2 className='mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]'>
                                    Competent Partners for your Next
                                    Construction Project.
                                </h2>
                                <p className='mb-9 text-base leading-relaxed text-body-color'>
                                    The main ‘thrust' is to focus on educating
                                    attendees on how to best protect highly
                                    vulnerable business applications with
                                    interactive panel discussions and
                                    roundtables led by subject matter experts.
                                </p>
                                <p className='mb-9 text-base leading-relaxed text-body-color'>
                                    The main ‘thrust' is to focus on educating
                                    attendees on how to best protect highly
                                    vulnerable business applications with
                                    interactive panel.
                                </p>
                                <a
                                    href='javascript:void(0)'
                                    className='inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg'
                                >
                                    Learn More
                                </a>
                            </div>
                            <div className='text-center'>
                                <div className='relative z-10 inline-block p-8'>
                                    <img
                                        src={aboutImage}
                                        alt='image'
                                        className='mx-auto lg:ml-auto'
                                        style={{ maxHeight: '450px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story
