import {urlfor} from '@/lib/sanity';
import {PageInfo} from '@/typings';
import Link from 'next/link';
import React from 'react'
import {Cursor, Typewriter, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
type Props = {
    pageInfo: PageInfo
}

export default function Hero({pageInfo} : Props) {
    const [text, count] = useTypewriter({
        words: [
            `${
                pageInfo.name
            }`, "Engineer", "Developer", "Designer",
        ],
        loop: true,
        delaySpeed: 2000
    });
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles></BackgroundCircles>
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover '
                src={
                    urlfor(pageInfo.heroImage).url()
                }
                alt=''/>
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-1 tracking-[15px]'>
                    {
                    pageInfo ?. role
                }</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>
                        {text}</span>
                    <Cursor cursorColor='#444b1d'></Cursor>
                </h1>
                <div className='pt-5'>
                    <Link href="#About">
                        <button className='heroButtons'>
                            About
                        </button>
                    </Link>
                    <Link href="#Experience">
                        <button className='heroButtons'>
                            Experience
                        </button>
                    </Link>
                    <Link href="#Skills">
                        <button className='heroButtons'>
                            Skills
                        </button>
                    </Link>
                    <Link href="#Projects">
                        <button className='heroButtons'>
                            Projects
                        </button>
                    </Link>
                    <Link href="#ContactMe">
                        <button className='heroButtons'>
                            Contact Me
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
