'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Introduce = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax transforms for each column with different speeds
  const column1Y = useTransform(scrollYProgress, [0, 1], [40, -20])
  const column2Y = useTransform(scrollYProgress, [0, 1], [20, -40])
  const column3Y = useTransform(scrollYProgress, [0, 1], [0, -60]) // Center column moves fastest
  const column4Y = useTransform(scrollYProgress, [0, 1], [20, -40])
  const column5Y = useTransform(scrollYProgress, [0, 1], [40, -20])

  // Individual image parallax effects
  const image1Y = useTransform(scrollYProgress, [0, 1], [0, -30])
  const image2Y = useTransform(scrollYProgress, [0, 1], [0, -25])
  const image3Y = useTransform(scrollYProgress, [0, 1], [0, -35])
  const image4Y = useTransform(scrollYProgress, [0, 1], [0, -20])
  const image5Y = useTransform(scrollYProgress, [0, 1], [0, -40])
  const image6Y = useTransform(scrollYProgress, [0, 1], [0, -15])
  const image7Y = useTransform(scrollYProgress, [0, 1], [0, -20])
  const image8Y = useTransform(scrollYProgress, [0, 1], [0, -35])
  const image9Y = useTransform(scrollYProgress, [0, 1], [0, -35])
  const image10Y = useTransform(scrollYProgress, [0, 1], [0, -25])

  return (
    <section id='introduce' ref={sectionRef} className='-mt-[calc(100vh-100px)]'>
        <div className='max-w-7xl mx-auto px-4'>
            <div className='text-center'>
                <h3 className="text-5xl font-bold bg-gradient-to-r from-[#744dd0] to-[#fe7f70] bg-clip-text text-transparent">
                    Truyenso.vn
                </h3>
                <p className="mt-4 text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200 italic">
                    Nơi những con chữ lặng lẽ chạm vào tâm hồn,
                </p>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2">
                    Nơi ý tưởng hóa thành sắc màu trên từng "trang giấy" mộng mơ.
                </p>
            </div>
        </div>
        {/* Masonry Parallax Gallery */}
        <div className="relative w-full mt-10 flex justify-center items-end gap-2 md:gap-4 px-2">
            {/* Column 1 */}
            <motion.div
                className="flex flex-col gap-2 md:gap-4 w-1/5"
                style={{
                    y: column1Y,
                    zIndex: 1,
                }}
            >
                <motion.img
                    src="/img/img/img_03.webp"
                    alt="gallery-1"
                    className="rounded-xl shadow-lg w-full h-[18vw] md:h-[22vw] object-cover"
                    style={{ 
                        objectPosition: "center",
                        y: image1Y,
                        willChange: "transform"
                    }}
                />
                <motion.img
                    src="/img/img/img_03.webp"
                    alt="gallery-2"
                    className="rounded-xl shadow-lg w-full h-[27vw] md:h-[33vw] object-cover"
                    style={{ 
                        objectPosition: "center",
                        y: image2Y,
                        willChange: "transform"
                    }}
                />
            </motion.div>
            {/* Column 2 */}
            <motion.div
                className="flex flex-col gap-2 md:gap-4 w-1/5"
                style={{
                    y: column2Y,
                    zIndex: 2,
                }}
            >
                <motion.img
                    src="/img/img/img_02.webp"
                    alt="gallery-3"
                    className="rounded-xl shadow-lg w-full h-[27vw] md:h-[33vw] object-cover"
                    style={{ 
                        objectPosition: "center",
                        y: image3Y,
                        willChange: "transform"
                    }}
                />
                <motion.img
                    src="/img/img/img_01.webp"
                    alt="gallery-4"
                    className="rounded-xl shadow-lg w-full h-[13vw] md:h-[15vw] object-cover"
                    style={{ 
                        objectPosition: "center",
                        y: image4Y,
                        willChange: "transform"
                    }}
                />
            </motion.div>
            {/* Column 3 (center, highest) */}
            <motion.div
                className="flex flex-col gap-2 md:gap-4 w-1/5"
                style={{
                    y: column3Y,
                    zIndex: 3,
                }}
            >
                <motion.img
                    src="/img/img/img_06.webp"
                    alt="gallery-5"
                    className="rounded-xl shadow-xl w-full h-[30vw] md:h-[38vw] object-cover"
                    style={{ 
                        objectPosition: "center",
                        y: image5Y,
                        willChange: "transform"
                    }}
                />
                <motion.img
                    src="/img/img/img_05.webp"
                    alt="gallery-6"
                    className="rounded-xl shadow-xl w-full h-[10vw] md:h-[12vw] object-cover"
                    style={{ 
                        objectPosition: "center",
                        y: image6Y,
                        willChange: "transform"
                    }}
                />
            </motion.div>
            {/* Column 4 */}
            <motion.div
                className="flex flex-col gap-2 md:gap-4 w-1/5"
                style={{
                    y: column4Y,
                    zIndex: 2,
                }}
            >
                <motion.img
                    src="/img/img/img_04.webp"
                    alt="gallery-7"
                    className="rounded-xl shadow-lg w-full h-[13vw] md:h-[15vw] object-cover"
                    style={{ 
                        objectPosition: "center",
                        y: image7Y,
                        willChange: "transform"
                    }}
                />
                <motion.img
                    src="/img/img/img_03.webp"
                    alt="gallery-8"
                    className="rounded-xl shadow-lg w-full h-[27vw] md:h-[33vw] object-cover"
                    style={{ 
                        objectPosition: "center",
                        y: image8Y,
                        willChange: "transform"
                    }}
                />
            </motion.div>
            {/* Column 5 */}
            <motion.div
                className="flex flex-col gap-2 md:gap-4 w-1/5"
                style={{
                    y: column5Y,
                    zIndex: 1,
                }}
            >
                <motion.img
                    src="/img/img/img_02.webp"
                    alt="gallery-9"
                    className="rounded-xl shadow-lg w-full h-[27vw] md:h-[33vw] object-cover"
                    style={{ 
                        objectPosition: "center",
                        y: image9Y,
                        willChange: "transform"
                    }}
                />
                <motion.img
                    src="/img/img/img_01.webp"
                    alt="gallery-10"
                    className="rounded-xl shadow-lg w-full h-[18vw] md:h-[22vw] object-cover"
                    style={{ 
                        objectPosition: "center",
                        y: image10Y,
                        willChange: "transform"
                    }}
                />
            </motion.div>
        </div>
        {/* Lớp phủ chuyển màu */}
        <div className="-mt-[260px] w-full h-72 md:h-48 bg-gradient-to-b from-black via-transparent to-[#e0f2fe] pointer-events-none" aria-hidden="true"></div>
    </section>
  )
}

export default Introduce