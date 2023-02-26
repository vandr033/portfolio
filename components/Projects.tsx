import React from 'react'
import {motion} from 'framer-motion';
import {Project} from '@/typings';
import {urlfor} from '@/lib/sanity';
import Link from 'next/link';

type Props = {
    projects: Project[]
}

function Projects({projects} : Props) {
    return (
        <motion.div initial={
                {opacity: 0}
            }
            whileInView={
                {opacity: 1}
            }
            transition={
                {duration: 1.5}
            }

            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-blue-600/40'>
                {
                projects.map((project, i) => (
                    <div className='w-screen flex-shrink-0 snap-center snap-mandatory flex flex-col space-y-y items-center justify-center p-20 md:p-44 h-screen '>
                        <motion.img className={
                                project.title == "Converge Team Lead" ? 'w-48' : 'h-80'
                            }
                            initial={
                                {
                                    y: -300,
                                    opacity: 0
                                }
                            }
                            transition={
                                {duration: 1.2}
                            }
                            whileInView={
                                {
                                    opacity: 1,
                                    y: 0
                                }
                            }
                            viewport={
                                {once: true}
                            }
                            src={
                                urlfor(project.image).url()
                            }
                            alt=""/>
                        <div className='space-y-10 px-10 md:px-10 max-w-6xl w-screen'>

                            <h4 className='text-3xl font-semibold text-center'>
                                <span className='underline decoration-blue-600/50'>

                                    {
                                    i + 1
                                }
                                    {' '}
                                    of {''}
                                    {
                                    projects.length
                                } </span>
                                : {
                                project.title
                            } </h4>
                            <div className='flex items-center space-x-2 justify-center'>
                                {

                                project.technologies.map(technology => (
                                    <img className='h-10 w-10 rounded-full'
                                        key={
                                            technology._id
                                        }
                                        src={
                                            urlfor(technology.image).url()
                                    }></img>

                                ))
                            }
                                <Link href={
                                    project.linkToBuild.toString()
                                }>
                                    <button className='rounded-full border border-solid p-2'>Github Link</button>
                                </Link>


                            </div>

                            <p className=' text-base text-center md:text-left flex-shrink-0'>
                                {
                                project.summary
                            } </p>

                        </div>

                    </div>
                ))
            } </div>

            <div className='w-full absolute top-[30%] bg-[#444b1d]/40 left-0 h-[500px] -skew-y-12'></div>

        </motion.div>
    )
}

export default Projects
