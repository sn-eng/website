import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slider.css'

import project1 from '../../assets/project1.jpg'
import project2 from '../../assets/project2.jpg'
import project3 from '../../assets/project3.jpg'
import project4 from '../../assets/project4.jpg'
import project5 from '../../assets/project5.jpg'

interface ProjectType {
    image: string
    title: string
    description: string
}

const projects: ProjectType[] = [
    {
        image: project1,
        title: 'Project 1 Title Baba',
        description:
            'this is a very lengty description o the work done on the wonderful project',
    },
    {
        image: project2,
        title: 'Project 2 Title Baba',
        description:
            'this is a very lengty description o the work done on the wonderful project',
    },
    {
        image: project3,
        title: 'Project 3 Title Baba',
        description:
            'this is a very lengty description o the work done on the hahahahaha ahahahaha ahahahaha ahahaha',
    },
    {
        image: project4,
        title: 'Project 4 Title Baba',
        description:
            'this is a very lengty description o the work done on the wonderful project',
    },
    {
        image: project5,
        title: 'Project 5 Title Baba',
        description:
            'this is a very lengty description o the work done on the wonderful project',
    },
]

const Portfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        centerPadding: '100px',
        cssEase: 'linear',
        fade: true,
        pauseOnHover: true,
    }

    return (
        <>
            <div className='container mx-auto px-4 lg:pt-8 lg:pb-8 '>
                <div className='flex flex-wrap text-center justify-center'>
                    <div className='w-full lg:w-6/12 px-4'>
                        <h2 className='text-3xl mb-2 font-semibold leading-normal'>
                            Our Portfolio
                        </h2>
                        <p className='text-lg leading-relaxed mt-4 mb-4 text-gray-500'>
                            We pride ourselves as masters in quality and
                            consistency and our large portfolio of projects that
                            we have done include the following:
                        </p>
                    </div>
                </div>
            </div>
            <div className='slider_main z-0 w-full h-[560px] text-white mb-6'>
                <Slider {...settings}>
                    {projects.map(project => (
                        <div
                            className='desc-main w-full h-[560px]'
                            key={project.title}
                        >
                            <div className='blackBg '></div>
                            <img src={project.image} alt={project.title} />
                            <div className='description absolute w-full top-[20%] p-4 md:p-8 md:-mt-7 sm:mt-5 su:w-[60%]'>
                                <h1 className='font-black py-5 ml-0 md:text-5xl su:text-3xl sm:text-4xl'>
                                    {project.title}
                                </h1>

                                <p className='text-gray-300 text-sm sm:mt-5 sm:w-[60%] md:w-[90%] md:max-w-[80%] lg:max-w-[85%] '>
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Portfolio
