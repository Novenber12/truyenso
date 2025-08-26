import Image from 'next/image'
import React from 'react'

const members = [
  {
    name: 'Nguyễn Minh Châu',
    role: 'Founder & Editor',
    img: '/img/img/gallery_11.webp',
    desc: 'Người khởi xướng dự án, yêu thích văn chương và luôn tìm kiếm những câu chuyện chạm đến cảm xúc.',
  },
  {
    name: 'Trần Hoàng Nam',
    role: 'Kỹ thuật & Thiết kế',
    img: '/img/img/gallery_12.webp',
    desc: 'Chịu trách nhiệm xây dựng nền tảng, đam mê sáng tạo giao diện tối giản và trải nghiệm nghệ thuật.',
  },
  {
    name: 'Lê Thảo Vy',
    role: 'Biên tập & Nội dung',
    img: '/img/img/gallery_13.webp',
    desc: 'Người kể chuyện, chăm chút từng câu chữ và lan tỏa cảm hứng đọc sách đến cộng đồng.',
  },
]

const AboutUs = () => {
  return (
    <section
      className="relative py-24 md:py-32 bg-[#F8F9FA] overflow-hidden"
      style={{
        backgroundImage: 'url(https://www.transparenttextures.com/patterns/paper-fibers.png)',
        backgroundBlendMode: 'multiply',
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-14 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1b263b] tracking-tight mb-3">
            Thành viên sáng lập
          </h2>
          <div className="mx-auto w-16 h-1 rounded bg-[#D4AF37]/60 mb-4" />
          <p className="font-noto text-lg text-[#3C4A3E] max-w-2xl mx-auto">
            Ba tâm hồn, một đam mê: Kết nối cộng đồng yêu văn chương qua những câu chuyện và trải nghiệm nghệ thuật tinh tế.
          </p>
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 min-h-[520px]">
          {/* Artistic background accent */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            aria-hidden
          >
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] rounded-full"
              style={{
                background: 'radial-gradient(ellipse at center, #FFD70099 0%, #F8F9FA 80%)',
                opacity: 0.18,
                filter: 'blur(24px)',
              }}
            />
          </div>
          {/* Members */}
          {members.map((m) => (
            <div
              key={m.name}
              className={`
                relative z-10 flex flex-col items-center text-center
                transition-all duration-300
                group
                bg-white/80 border border-[#E5E7EB] rounded-2xl shadow-xl
                px-8 py-10 mx-0 md:mx-4
                hover:scale-105 hover:shadow-2xl
                min-w-[260px] max-w-xs
              `}
            >
              <div className="relative mb-6">
                <Image
                  src={m.img}
                  alt={m.name}
                  width={220}
                  height={320}
                  className={`
                    rounded-2xl shadow-lg border-4 border-[#E5E7EB]
                    group-hover:scale-105 transition-transform duration-300
                  `}
                />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-[#1b263b] mb-1">{m.name}</h3>
              <div className="font-noto text-base text-[#4B2E83] mb-2 italic">{m.role}</div>
              <p className="font-noto text-base text-[#3C4A3E] max-w-xs mb-2">{m.desc}</p>
              <div className="w-10 h-1 rounded bg-[#4B2E83]/20 mt-2" />
            </div>
          ))}
        </div>
      </div>

      
    </section>
  )
}

export default AboutUs