'use client'
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'

interface IParallaxImageProps {
    className: string;
    alt: string;
    src: string;
    start: number;
    end: number;
}

const ParallaxImage = ({ className, alt, src, start, end }: IParallaxImageProps) => {
    const ref = useRef<HTMLImageElement>(null)

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0])
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85])
    const y = useTransform(scrollYProgress, [0, 1], [start, end])

    const transform = useMotionTemplate`
        translate3d(0px, ${y}px, 0px)
        scale(${scale})
    `

    return(
        <motion.img 
            ref={ref}
            src={src} 
            alt={alt} 
            className={className} 
            style={{ 
                opacity, 
                transform,
                willChange: "transform, opacity"
            }}
        />
    ) 
}

export default ParallaxImage