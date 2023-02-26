import {motion} from 'framer-motion'
import React from 'react'

type Props = {}

export default function BackgroundCircles({} : Props) {
    return (
        <motion.div initial={
                {opacity: 0}
            }
            animate={
                {
                    scale: [
                        1,
                        2,
                        2,
                        3,
                        1
                    ],
                    opacity: [
                        .1,
                        .2,
                        .4,
                        .8,
                        .1,
                        1.0
                    ],
                    borderRadius: ["20%", "20%", "50%", "80%",]
                }
            }
            transition={
                {duration: 2.5}
            }

            className='relative flex justify-center items-center '>
            <div className='absolute border border-[#FFFFFF] rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>


        </motion.div>
    )
}
