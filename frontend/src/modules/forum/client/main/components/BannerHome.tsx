"use client"

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useMotionTemplate, useScroll, useSpring, useTransform } from 'framer-motion'
import '../../styles/forum.css'
import Introduce from './SectionNoFramer/Introduce'
// import Introduce from './Introduce'

const BannerHome = () => {
  const containerRef = useRef<HTMLElement>(null)
  
  // Framer Motion scroll progress hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

    // Parallax transforms for different layers with smooth easing
//////////// fix 1
    // 1) Map 0..1 -> 60..-160 (đơn vị % nhưng để dạng số trước)
    const yCloudRaw = useTransform(scrollYProgress, [0, 1], [60, -320]);

    // 2) Kết chuỗi transform theo đúng format bạn yêu cầu
    const cloudTransform = useMotionTemplate`
        translate3d(0px, ${yCloudRaw}%, 0px) 
        scale3d(1, 1, 1) 
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) 
        skew(0deg, 0deg)
    `;
///////////// 

//////////// fix 2
    // 1) Map 0..1 -> 0..-130 (đơn vị % nhưng để dạng số trước)
    const yMoutainRaw = useTransform(scrollYProgress, [0, 1], [0, -100]);

    // 2) Kết chuỗi transform theo đúng format bạn yêu cầu
    const moutainTransform = useMotionTemplate`
    translate3d(0px, ${yMoutainRaw}%, 0px) 
    scale3d(1, 1, 1) 
    rotateX(0deg) rotateY(0deg) rotateZ(0deg) 
    skew(0deg, 0deg)
    `;
///////////// 

//////////// fix 3
    // 1) Map 0..1 -> 0..-100 (đơn vị % nhưng để dạng số trước)
    const ySlopeRaw = useTransform(scrollYProgress, [0, 1], [0, -100]);

    // 2) Kết chuỗi transform theo đúng format bạn yêu cầu
    const slopeTransform = useMotionTemplate`
    translate3d(0px, ${ySlopeRaw}%, 0px) 
    scale3d(1, 1, 1) 
    rotateX(0deg) rotateY(0deg) rotateZ(0deg) 
    skew(0deg, 0deg)
    `;
///////////// 

  //////////// fix 4
    // 1) Map 0..1 -> 0..-60 (đơn vị % nhưng để dạng số trước)
    const yBodyRaw = useTransform(scrollYProgress, [0, 1], [0, -60]);

    // 2) Kết chuỗi transform theo đúng format bạn yêu cầu
    const bodyTransform = useMotionTemplate`
    translate3d(0px, ${yBodyRaw}%, 0px) 
    scale3d(1, 1, 1) 
    rotateX(0deg) rotateY(0deg) rotateZ(0deg) 
    skew(0deg, 0deg)
    `;
/////////////

  //////////// fix 5
    // 1) Map 0..1 -> 0..-51 (đơn vị % nhưng để dạng số trước)
    const yPeakRaw = useTransform(scrollYProgress, [0, 1], [0, -25]);

    // 2) Kết chuỗi transform theo đúng format bạn yêu cầu
    const peakTransform = useMotionTemplate`
    translate3d(0px, ${yPeakRaw}%, 0px) 
    scale3d(1, 1, 1) 
    rotateX(0deg) rotateY(0deg) rotateZ(0deg) 
    skew(0deg, 0deg)
    `;
///////////// 

//////////// fix 6
    // 1) Map 0..1 -> 0..-5 (đơn vị % nhưng để dạng số trước)
    const yBackgroundRaw = useTransform(scrollYProgress, [0, 1], [0, -5]);

    // 2) Kết chuỗi transform theo đúng format bạn yêu cầu
    const backgroundTransform = useMotionTemplate`
        translate3d(0px, ${yBackgroundRaw}%, 0px) 
        scale3d(1, 1, 1) 
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) 
        skew(0deg, 0deg)
    `;
///////////// 

    const blackBg = useTransform(scrollYProgress, [0, 1], ["0%", "130%"]);

    // Text animations with opacity and scale
    const yTextRaw = useTransform(scrollYProgress, [0, 1], [0, 52])
    const textTransform = useMotionTemplate`
        translate3d(0px, ${yTextRaw}%, 0px)
        scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg)
        skew(0deg, 0deg)
    `

    // Title animations
    const yTitleRaw = useTransform(scrollYProgress, [0, 1], [0, 51])
    const titleTransform = useMotionTemplate`
        translate3d(0px, ${yTitleRaw}%, 0px)
        scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg)
        skew(0deg, 0deg)
    `

  return (
    <section ref={containerRef} className="h-[200svh] relative overflow-hidden">
      <div className="h-[250vh] relative text-center">
        <div className='h-screen sticky top-0'>
            {/* Lớp parallax ngoài cùng - lớp mây */}
            <motion.div 
              className='hero_00 z-[18]'
              style={{ transform: cloudTransform, willChange: "transform", transformStyle: "preserve-3d" }}
            >
                <Image 
                  src={'/img/img/hero_0.png'} 
                  alt='hero 0' 
                  width={1024} 
                  height={1024} 
                  className='object-cover object-[50%_100%] w-full h-full align-middle'
                  priority
                />
            </motion.div>

            {/* Lớp phủ đen với opacity animation */}
            <motion.div 
              className='absolute z-[16] inset-[auto_0%_2px] bg-black'
              style={{  height: blackBg, willChange: "width, height" }}
            ></motion.div>

            {/* Parallax 2 - chân núi */}
            <motion.div 
              className='hero_00 z-[16]'
              style={{ transform: moutainTransform, willChange: "transform", transformStyle: "preserve-3d" }}
            >
                <Image 
                  src={'/img/img/hero_01.webp'} 
                  alt='hero 0' 
                  width={1024} 
                  height={1024} 
                  className='object-cover object-[50%_100%] w-full h-full align-middle'
                />
            </motion.div>

            {/* Lớp chữ với smooth animations */}
            <motion.div 
              className='z-[14] absolute flex justify-start items-center w-full h-full top-[5rem] left-0 right-0'
              style={{ transform: textTransform, willChange: "transform", transformStyle: "preserve-3d" }}
            >
                <div className='flex flex-col justify-center items-center self-stretch w-screen h-screen'>
                <motion.h1 
                  className="text-3xl md:text-4xl font-semibold text-white drop-shadow-lg mb-6"
                >
                  Nơi cảm xúc thăng hoa
                </motion.h1>
                {/* <motion.p 
                  className="text-2xl md:text-3xl text-[#EDCA7B] font-semibold mb-4 drop-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Mỗi trang sách, một hành trình cảm xúc.
                </motion.p>
                <motion.p 
                  className="text-lg md:text-xl text-white/80 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Đọc để sống trọn vẹn hơn từng khoảnh khắc.
                </motion.p>
                <motion.p 
                  className="text-lg md:text-xl text-white/80"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Truyện hay – Chạm đến trái tim, lay động tâm hồn.
                </motion.p> */}
                </div>
            </motion.div>

            {/* Parallax 3 - sườn núi */}
            <motion.div 
              className='hero_00 z-[14]'
              style={{ transform: slopeTransform, willChange: "transform", transformStyle: "preserve-3d" }}
            >
                <Image 
                  src={'/img/img/hero_02.png'} 
                  alt='hero 0' 
                  width={1024} 
                  height={1024} 
                  className='object-cover object-[50%_100%] w-full h-full align-middle'
                />
            </motion.div>
            
            {/* Parallax 4 - thân núi */}
            <motion.div 
              className='hero_00 z-[13]'
              style={{ transform: bodyTransform, willChange: "transform", transformStyle: "preserve-3d" }}
            >
                <Image 
                  src={'/img/img/hero_03.png'} 
                  alt='hero 0' 
                  width={1024} 
                  height={1024} 
                  className='object-cover object-[50%_100%] w-full h-full align-middle'
                />
            </motion.div>

            {/* Lớp tiêu đề với enhanced animations */}
            <motion.div 
              className='z-[12] absolute flex justify-start items-center w-full h-full inset-[auto_0%_5rem]'
              style={{ transform: titleTransform, willChange: "transform", transformStyle: "preserve-3d" }}
            >
                <div className='flex flex-col items-center justify-center self-stretch w-screen h-screen'>
                    <motion.h1 
                      className='text-3xl md:text-6xl font-bold text-white drop-shadow-2xl'
                    >
                      Chạm vào{' '}
                      <motion.span
                        style={{
                          background: 'linear-gradient(90deg, #744dd0, #fe7f70)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          color: 'transparent',
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        thế giới của ngôn từ
                      </motion.span>
                    </motion.h1>
                </div>
            </motion.div>

            {/* Parallax 5 - đỉnh núi */}
            <motion.div 
              className='hero_00 z-[1]'
              style={{ transform: peakTransform, willChange: "transform" }}
            >
                <Image 
                  src={'/img/img/hero_04.png'} 
                  alt='hero 0' 
                  width={1024} 
                  height={1024} 
                  className='object-cover object-[50%_100%] w-full h-full align-middle'
                />
            </motion.div>

            {/* Parallax 6 - nền */}
            <motion.div 
              className='hero_00 -z-[1]'
              style={{ transform: backgroundTransform, willChange: "transform", transformStyle: "preserve-3d" }}
            >
                <Image 
                  src={'/img/img/hero_05.webp'} 
                  alt='hero 0' 
                  width={1024} 
                  height={1024} 
                  className='object-cover object-[50%_100%] w-full h-full align-middle'
                />
            </motion.div>
        </div>

        {/*  */}
        {/* <Introduce/> */}
      </div>
    </section>
  )
}

export default BannerHome