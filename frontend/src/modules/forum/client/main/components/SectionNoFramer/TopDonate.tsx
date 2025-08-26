import Image from 'next/image';
import React from 'react'

// Dummy data for top donors
const donors = [
  {
    name: 'Trần Văn Toàn',
    amount: 2000000,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    message: 'Chúc nền tảng ngày càng phát triển!',
  },
  {
    name: 'Vũ Ngọc Như Ý',
    amount: 1500000,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    message: 'Mong có thêm nhiều truyện hay!',
  },
  {
    name: 'Nguyễn Trần Khánh Duy',
    amount: 1200000,
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    message: 'Ủng hộ tác giả và đội ngũ.',
  },
];

// Dummy QR code image (replace with your own if needed)
const QR_IMAGE = '/img/img/qr.webp';

const TopDonate = () => {
  return (
    <section
      className="py-20 bg-[#F8F9FA] relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://www.transparenttextures.com/patterns/paper-fibers.png)',
        backgroundBlendMode: 'multiply',
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2
            className="font-playfair text-4xl md:text-5xl font-bold text-[#1b263b] tracking-tight mb-3"
            style={{ letterSpacing: '.01em' }}
          >
            Top Ủng Hộ Tháng Này
          </h2>
          <div className="mx-auto w-16 h-1 rounded bg-[#D4AF37]/60 mb-4" />
          <p className="font-noto text-lg text-[#3C4A3E]">
            Tri ân những tấm lòng vàng đã góp phần xây dựng cộng đồng.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* QR + Call to action */}
          <div className="flex flex-col items-center justify-center bg-white/70 border border-[#E5E7EB] rounded-2xl shadow-lg px-8 py-12 mb-8 md:mb-0 relative overflow-hidden">
            <div className="mb-6">
              <Image
                src={QR_IMAGE}
                alt="QR ủng hộ"
                width={180}
                height={180}
                className="rounded-xl border-4 border-[#D4AF37]/40 shadow-lg bg-white"
                style={{
                  boxShadow: '0 0 0 8px #FFD70033',
                }}
              />
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-[#1b263b] mb-2 text-center">
              Ủng hộ cho dự án
            </h3>
            <p className="font-noto text-base md:text-lg text-[#3C4A3E] text-center mb-4">
              Quét mã QR để đóng góp, giúp chúng mình duy trì và phát triển nền tảng.<br />
              <span className="inline-block mt-2 font-playfair text-[#D4AF37] text-lg tracking-wide">
                Mỗi đóng góp đều là nguồn động viên quý giá!
              </span>
            </p>
            <div className="w-12 h-1 rounded bg-[#D4AF37]/40 mt-4 mb-2" />
            {/* Artistic accent */}
            <div
              className="absolute left-0 right-0 bottom-0 pointer-events-none"
              aria-hidden
            >
              <div
                className="mx-auto w-2/3 h-10 rounded-t-full"
                style={{
                  background: 'linear-gradient(90deg, #744dd0, #fe7f70)',
                  opacity: 0.25,
                  filter: 'blur(8px)',
                }}
              />
            </div>
          </div>
          {/* Top donors */}
          <div className="flex flex-col gap-8">
            {donors.map((donor, idx) => (
              <div
                key={donor.name}
                className={`
                  relative flex flex-col md:flex-row items-center md:items-start text-center md:text-left
                  bg-white/80 border border-[#E5E7EB] rounded-2xl shadow-xl
                  px-8 py-8
                  transition-all duration-300
                  hover:scale-105 hover:shadow-2xl
                  group
                  ${idx === 0 ? 'z-20' : 'z-10'}
                `}
                style={{
                  boxShadow: idx === 0
                    ? '0 8px 32px 0 rgba(212,175,55,0.18)'
                    : undefined,
                  borderColor: idx === 0 ? '#D4AF37' : undefined,
                }}
              >
                <div className="relative mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <Image
                    src={donor.avatar}
                    alt={donor.name}
                    className={`
                      w-20 h-20 md:w-24 md:h-24 rounded-full border-4
                      ${idx === 0
                        ? 'border-[#D4AF37]/80 shadow-lg'
                        : 'border-[#4B2E83]/30'}
                      object-cover
                      group-hover:scale-110 transition-transform duration-300
                    `}
                    width={100}
                    height={100}
                    style={{
                      boxShadow: idx === 0
                        ? '0 0 0 6px #FFD70099'
                        : undefined,
                    }}
                  />
                  {idx === 0 && (
                    <span className="absolute -top-3 -right-3 bg-[#D4AF37]/90 text-white font-bold px-3 py-1 rounded-full text-xs shadow-md font-playfair tracking-wide">
                      #1
                    </span>
                  )}
                </div>
                <div className="flex-1 flex flex-col items-center md:items-start">
                  <h3 className="font-playfair text-xl md:text-2xl font-semibold text-[#1b263b] mb-1">
                    {donor.name}
                  </h3>
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="mr-1">
                      <path
                        d="M12 2l2.39 6.94h7.29l-5.89 4.28 2.39 6.94L12 15.88l-5.89 4.28 2.39-6.94-5.89-4.28h7.29L12 2z"
                        fill="#D4AF37"
                        fillOpacity="0.7"
                      />
                    </svg>
                    <span className="font-bold text-lg text-[#D4AF37] font-playfair">
                      {donor.amount.toLocaleString('vi-VN')}₫
                    </span>
                  </div>
                  <p className="font-noto text-base text-[#3C4A3E] italic mb-2">
                    “{donor.message}”
                  </p>
                  <div className="w-10 h-1 rounded bg-[#4B2E83]/20 mt-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Subtle gold parallax accent for the whole section */}
        {/* <div
          className="absolute left-0 right-0 bottom-0 pointer-events-none"
          aria-hidden
        >
          <div
            className="mx-auto w-2/3 h-16 rounded-t-full"
            style={{
              background: 'linear-gradient(90deg, #744dd0, #fe7f70)',
              opacity: 0.5,
              filter: 'blur(8px)',
            }}
          />
        </div> */}
      </div>
    </section>
  );
};

export default TopDonate