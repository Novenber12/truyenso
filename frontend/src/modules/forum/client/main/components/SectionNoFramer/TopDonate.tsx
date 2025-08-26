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
          <div className="relative flex flex-col items-center justify-center bg-white/80 border-4 border-[#1b263b] rounded-3xl shadow-[6px_6px_0px_#1b263b] px-8 py-12 mb-8 md:mb-0 ">
            {/* Accent comic dots */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_#1b263b_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

            {/* QR image */}
            <div className="mb-6 relative">
              <Image
                src={QR_IMAGE}
                alt="QR ủng hộ"
                width={180}
                height={180}
                className="rounded-xl border-4 border-[#D4AF37] shadow-[4px_4px_0px_#1b263b] bg-white"
              />
              {/* Comic-style highlight burst */}
              <div className="absolute -z-10 inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-[#FFD700]/30 blur-2xl" />
              </div>
            </div>

            {/* Title */}
            <h3 className="font-comic text-3xl md:text-4xl font-extrabold text-[#1b263b] mb-3 text-center relative z-10">
              Ủng hộ cho dự án!
            </h3>

            {/* Description */}
            <p className="font-noto text-base md:text-lg text-[#3C4A3E] text-center mb-5 leading-relaxed">
              Quét mã QR để đóng góp, giúp chúng mình duy trì và phát triển nền tảng.<br />
              <span className="inline-block mt-3 font-comic text-[#D9480F] text-lg md:text-xl font-bold tracking-wider">
                Mỗi đóng góp đều là sức mạnh siêu năng lực!
              </span>
            </p>

            {/* Divider comic line */}
            <div className="w-16 h-1 bg-[#1b263b] rounded-full mb-4 shadow-[2px_2px_0px_#D4AF37]" />

            {/* Comic bubble accent */}
            <div
              className="absolute -top-4 right-6 bg-[#fe7f70] text-white font-comic text-sm px-3 py-1 rounded-full shadow-[2px_2px_0px_#1b263b] rotate-3"
            >
              WOW!
            </div>
            <div
              className="absolute bottom-4 left-6 bg-[#744dd0] text-white font-comic text-sm px-3 py-1 rounded-full shadow-[2px_2px_0px_#1b263b] -rotate-3"
            >
              THANK YOU ❤️
            </div>
          </div>

          {/* Top donors */}
          <div className="flex flex-col gap-8">
            {donors.map((donor, idx) => (
              <div
              key={donor.name}
              className="
                relative flex items-center gap-4 p-6
                bg-white border-4 border-black rounded-xl
                shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000]
                transition-all duration-300
                transform hover:-translate-y-1
              "
              style={{
                backgroundColor: idx === 0 ? "#FFF4CC" : "#F8F8F9",
                transform: idx === 0 ? "rotate(-1deg)" : "rotate(1deg)",
              }}
            >
              {/* Avatar */}
              <div className="relative">
                <Image
                  src={donor.avatar}
                  alt={donor.name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-black"
                />
                {idx === 0 && (
                  <span className="absolute -top-3 -right-3 bg-pink-500 text-white px-2 py-1 text-xs font-bold rounded-full shadow-md">
                    #1
                  </span>
                )}
              </div>
            
              {/* Info */}
              <div className="flex-1">
                <h3 className="font-bold text-lg text-black">{donor.name}</h3>
                <p className="inline-block bg-yellow-200 border-2 border-black px-3 py-1 rounded-lg mt-1 text-sm italic">
                  “{donor.message}”
                </p>
                <div className="mt-2 font-extrabold text-pink-600">
                  {donor.amount.toLocaleString('vi-VN')}₫
                </div>
              </div>
            </div>
            
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDonate