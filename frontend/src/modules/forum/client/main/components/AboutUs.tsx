import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#F8F9FA] overflow-hidden"
    style={{
      backgroundImage: 'url(https://www.transparenttextures.com/patterns/paper-fibers.png)',
      backgroundBlendMode: 'multiply',
    }}>
        <div className='h-screen max-w-7xl mx-auto px-4'>
            <div className="mb-14 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1b263b] tracking-tight mb-3">
                Thành viên sáng lập
            </h2>
            <div className="mx-auto w-16 h-1 rounded bg-[#D4AF37]/60 mb-4" />
            <p className="font-noto text-lg text-[#3C4A3E] max-w-2xl mx-auto">
                Ba tâm hồn, một đam mê: Kết nối cộng đồng yêu văn chương qua những câu chuyện và trải nghiệm nghệ thuật tinh tế.
            </p>
            </div>
            <div className="relative z-30 w-full h-full flex items-center justify-center">
                {/* Member 1 - Left */}
                <div className="absolute -top-[2%] left-[8%] translate-y-1/2 flex flex-col items-center">
                  {/* Top curved name */}
                  <svg
                    width="220"
                    height="60"
                    viewBox="0 0 220 60"
                    className=""
                  >
                    <path
                      id="topCurve1"
                      d="M20,50 Q110,0 200,50"
                      fill="transparent"
                    />
                    <text
                      fontFamily="'Playfair Display', serif"
                      fontSize="20"
                      fill="#1b263b"
                      letterSpacing=".08em"
                      fontWeight="bold"
                    >
                      <textPath
                        href="#topCurve1"
                        startOffset="50%"
                        textAnchor="middle"
                      >
                        Vũ Minh Đức
                      </textPath>
                    </text>
                  </svg>
                  <div className="relative w-72 h-72 flex items-center justify-center">
                    <Image
                      src={'/img/img/gallery_11.webp'}
                      alt='Vũ Minh Đức'
                      width={200}
                      height={320}
                      className="w-72 h-72 rounded-full shadow-lg border-4 border-[#E5E7EB]"
                    />
                  </div>
                  {/* Bottom curved role */}
                  <svg
                    width="220"
                    height="60"
                    viewBox="0 0 220 60"
                    className=""
                  >
                    <path
                      id="bottomCurve1"
                      d="M20,10 Q110,60 200,10"
                      fill="transparent"
                    />
                    <text
                      fontFamily="'Noto Serif', serif"
                      fontSize="16"
                      fill="#4B2E83"
                      letterSpacing=".06em"
                      fontWeight="500"
                    >
                      <textPath
                        href="#bottomCurve1"
                        startOffset="50%"
                        textAnchor="middle"
                      >
                        Quản lý
                      </textPath>
                    </text>
                  </svg>
                </div>
                {/* Member 2 - Center */}
                <div className="absolute top-1/3 left-1/3 -translate-x-1 -translate-y-[60%] flex flex-col items-center">
                  {/* Top curved name */}
                  <svg
                    width="220"
                    height="60"
                    viewBox="0 0 220 60"
                    className=""
                  >
                    <path
                      id="topCurve2"
                      d="M20,50 Q110,0 200,50"
                      fill="transparent"
                    />
                    <text
                      fontFamily="'Playfair Display', serif"
                      fontSize="20"
                      fill="#1b263b"
                      letterSpacing=".08em"
                      fontWeight="bold"
                    >
                      <textPath
                        href="#topCurve2"
                        startOffset="50%"
                        textAnchor="middle"
                      >
                        Nguyễn Gia Khang
                      </textPath>
                    </text>
                  </svg>
                  <div className="relative w-72 h-72 flex items-center justify-center">
                    <Image
                      src={'/img/img/gallery_12.webp'}
                      alt='Nguyễn Gia Khang'
                      width={220}
                      height={340}
                      className="w-72 h-72 rounded-full shadow-lg border-4 border-[#E5E7EB]"
                    />
                  </div>
                  {/* Bottom curved role */}
                  <svg
                    width="220"
                    height="60"
                    viewBox="0 0 220 60"
                    className=""
                  >
                    <path
                      id="bottomCurve2"
                      d="M20,10 Q110,60 200,10"
                      fill="transparent"
                    />
                    <text
                      fontFamily="'Noto Serif', serif"
                      fontSize="16"
                      fill="#4B2E83"
                      letterSpacing=".06em"
                      fontWeight="500"
                    >
                      <textPath
                        href="#bottomCurve2"
                        startOffset="50%"
                        textAnchor="middle"
                      >
                        Sáng lập & Thiết kế
                      </textPath>
                    </text>
                  </svg>
                </div>
                {/* Member 3 - Right */}
                <div className="absolute top-1/2 right-[8%] -translate-y-1/2 flex flex-col items-center">
                  {/* Top curved name */}
                  <svg
                    width="220"
                    height="60"
                    viewBox="0 0 220 60"
                    className=""
                  >
                    <path
                      id="topCurve3"
                      d="M20,50 Q110,0 200,50"
                      fill="transparent"
                    />
                    <text
                      fontFamily="'Playfair Display', serif"
                      fontSize="20"
                      fill="#1b263b"
                      letterSpacing=".08em"
                      fontWeight="bold"
                    >
                      <textPath
                        href="#topCurve3"
                        startOffset="50%"
                        textAnchor="middle"
                      >
                        Lê Trọng Nhân
                      </textPath>
                    </text>
                  </svg>
                  <div className="relative w-72 h-72 flex items-center justify-center">
                    <Image
                      src={'/img/img/gallery_13.webp'}
                      alt='Lê Trọng Nhân'
                      width={200}
                      height={320}
                      className="w-72 h-72 rounded-full shadow-lg border-4 border-[#E5E7EB]"
                    />
                  </div>
                  {/* Bottom curved role */}
                  <svg
                    width="220"
                    height="60"
                    viewBox="0 0 220 60"
                    className=""
                  >
                    <path
                      id="bottomCurve3"
                      d="M20,10 Q110,60 200,10"
                      fill="transparent"
                    />
                    <text
                      fontFamily="'Noto Serif', serif"
                      fontSize="16"
                      fill="#4B2E83"
                      letterSpacing=".06em"
                      fontWeight="500"
                    >
                      <textPath
                        href="#bottomCurve3"
                        startOffset="50%"
                        textAnchor="middle"
                      >
                        Thiết kế
                      </textPath>
                    </text>
                  </svg>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs