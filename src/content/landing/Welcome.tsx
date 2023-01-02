import React from 'react'
import meeting from '../../assets/meeting.jpg'
import renovations from '../../assets/renovations.png'
import building from '../../assets/building.png'
import civils from '../../assets/civils.png'

const Welcome = () => {
    return (
        <>
            <section className='pb-20 bg-[#e8f3f5] -mt-24'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-wrap'>
                        <div className='lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center'>
                            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                                <div className='px-4 py-5 flex-auto'>
                                    <img
                                        alt='Building Construction'
                                        src={building}
                                        className='rounded-full max-w-full mx-auto'
                                        style={{ maxWidth: '120px' }}
                                    />
                                    <h6 className='text-xl font-semibold'>
                                        Building Construction
                                    </h6>
                                    <p className='mt-2 mb-4 text-gray-600'>
                                        Construction of houses, multi-storey
                                        buildings, shopping malls, school
                                        classroom blocks etc., retaining walls,
                                        masonry and concrete works.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='w-full md:w-4/12 px-4 text-center'>
                            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                                <div className='px-4 py-5 flex-auto'>
                                    <img
                                        alt='Civil Works'
                                        src={civils}
                                        className='rounded-full max-w-full mx-auto'
                                        style={{ maxWidth: '120px' }}
                                    />
                                    <h6 className='text-xl font-semibold'>
                                        Civil Works
                                    </h6>
                                    <p className='mt-2 mb-4 text-gray-600'>
                                        Earthworks and excavations, drains,
                                        water reticulation systems,
                                        roads,irrigation systems, geotech,
                                        embankments
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='pt-6 w-full md:w-4/12 px-4 text-center'>
                            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                                <div className='px-4 py-5 flex-auto'>
                                    <img
                                        alt='Renovations'
                                        src={renovations}
                                        className=' rounded-full max-w-full mx-auto'
                                        style={{ maxWidth: '120px' }}
                                    />
                                    <h6 className='text-xl font-semibold'>
                                        Renovations
                                    </h6>
                                    <p className='mt-2 mb-4 text-gray-600'>
                                        Painting, tiling, wall finishes,
                                        carpentry works, electrical
                                        installations, fittings, plumbing,
                                        partitions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-wrap items-center mt-8'>
                        <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
                            <div className='text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-[#0b341c]'>
                                <i className='fas fa-user-friends text-xl'></i>
                            </div>
                            <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                                Working with us is a pleasure
                            </h3>
                            <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'>
                                Our top priority is to provide the best quality
                                with guaranteed perfection. We oversee each
                                project from start to the end and adhere to
                                safety standards and regulations.
                            </p>
                            <p className='text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700'>
                                Through the vastness of our skilled and dynamic
                                workforce which has technical and management
                                expertise, we have high capacity to cope with
                                large projects with regards to structural and
                                civil construction
                            </p>
                        </div>

                        <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
                            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-[#0b341c]'>
                                <img
                                    alt='Kadge \Construction Pvt Ltd'
                                    src={meeting}
                                    className='w-full align-middle rounded-t-lg'
                                />
                                <blockquote className='relative p-8 mb-4'>
                                    <svg
                                        preserveAspectRatio='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 583 95'
                                        className='absolute left-0 w-full block'
                                        style={{
                                            height: '95px',
                                            top: '-94px',
                                        }}
                                    >
                                        <polygon
                                            points='-30,95 583,95 583,65'
                                            className='text-[#0b341c] fill-current'
                                        ></polygon>
                                    </svg>
                                    <h4 className='text-xl font-bold text-white'>
                                        Our Quality Pledge
                                    </h4>
                                    <p className='text-md font-light mt-2 text-white'>
                                        It is our intent to continually improve
                                        our performance in product quality,
                                        on-schedule delivery, client
                                        satisfaction and we will always strive
                                        to be excellent in everything we do.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Welcome
