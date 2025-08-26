import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import ParallaxImage from './ParallaxImage'

const Introduce = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Text animation - appears when section hits 1/3 viewport
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 1, 1])
  const textY = useTransform(scrollYProgress, [0, 0.3, 0.5], [50, 0, 0])
  const textScale = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.8, 1, 1])

  // Parallax images - xuất hiện sớm hơn và chuyển động toàn vẹn hơn
  const image1Y = useTransform(scrollYProgress, [0.15, 0.7], [100, -50])
  const image1Opacity = useTransform(scrollYProgress, [0.15, 0.3, 0.7], [0, 1, 1])
  const image1Scale = useTransform(scrollYProgress, [0.15, 0.3, 0.7], [0.7, 1, 1.1])

  const image2Y = useTransform(scrollYProgress, [0.2, 0.75], [120, -30])
  const image2Opacity = useTransform(scrollYProgress, [0.2, 0.35, 0.75], [0, 1, 1])
  const image2Scale = useTransform(scrollYProgress, [0.2, 0.35, 0.75], [0.7, 1, 1.05])

  const image3Y = useTransform(scrollYProgress, [0.25, 0.8], [150, -20])
  const image3Opacity = useTransform(scrollYProgress, [0.25, 0.4, 0.8], [0, 1, 1])
  const image3Scale = useTransform(scrollYProgress, [0.25, 0.4, 0.8], [0.7, 1, 1.15])

  const image4Y = useTransform(scrollYProgress, [0.3, 0.85], [180, -10])
  const image4Opacity = useTransform(scrollYProgress, [0.3, 0.45, 0.85], [0, 1, 1])
  const image4Scale = useTransform(scrollYProgress, [0.3, 0.45, 0.85], [0.7, 1, 1.2])

  return (
    <section ref={sectionRef} className='h-[300vh] relative '>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
      
      {/* Text Section */}
      <motion.div 
        className="flex flex-col items-center mt-12 gap-5 relative z-10"
        style={{
          opacity: textOpacity,
          y: textY,
          scale: textScale
        }}
      >
        <motion.div 
          className="relative flex items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent drop-shadow-lg tracking-wide">
            Mỗi trang sách là một hành trình cảm xúc
          </h2>
        </motion.div>
        
        <motion.p 
          className="text-base md:text-lg text-white/90 max-w-xl text-center px-2 md:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-2 py-1 bg-white/10 rounded-lg shadow-sm backdrop-blur-sm">
            Đọc sách mở rộng tâm hồn, nuôi dưỡng trí tuệ và mở ra những chân trời mới.
          </span>
        </motion.p>
        
        <motion.p 
          className="text-base md:text-lg text-white/80 max-w-lg text-center px-2 md:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-2 py-1 bg-gradient-to-r from-purple-700/30 via-pink-600/20 to-orange-400/20 rounded-lg shadow-sm">
            Khám phá tri thức, chạm tới những giá trị bền vững cùng từng trang sách.
          </span>
        </motion.p>
      </motion.div>

      {/* Floating Images with Parallax */}
      <div className='relative z-30'>
        <ParallaxImage src='/img/img/img_01.webp' alt='parallax 01' start={-100} end={200} className='ml-4 w-[300px] rounded-lg' />
        <ParallaxImage src='/img/img/img_02.webp' alt='parallax 02' start={-70} end={0} className='absolute right-0 w-[500px] mr-10 rounded-lg' />
        <div className='absolute left-1/2 translate-y-3 -translate-x-40'>
          <ParallaxImage src='/img/img/img_03.webp' alt='parallax 03' start={-140} end={-10} className=' w-[350px] rounded-lg' />
        </div>

      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96"
        style={{
          opacity: useTransform(scrollYProgress, [0.3, 0.7], [0, 0.3]),
          scale: useTransform(scrollYProgress, [0.3, 0.7], [0.8, 1.2])
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-full blur-3xl" />
      </motion.div>
    </section>
  )
}

export default Introduce