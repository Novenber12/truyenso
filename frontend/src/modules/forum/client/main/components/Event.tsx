import Image from 'next/image'
import React from 'react'

const EventSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-sky-100 via-purple-50 to-orange-50 pt-20 min-h-screen">
    {/* Winding Road SVG Background */}
    <svg
      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-full z-0"
      viewBox="0 0 400 1200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main winding road path */}
      <path
        d="M200,50 C120,120 280,180 200,250 C100,320 300,380 200,450 C80,520 320,580 200,650 C120,720 280,780 200,850 C100,920 300,980 200,1050 C150,1120 250,1150 200,1200"
        stroke="url(#roadGrad)"
        strokeWidth="60"
        fill="transparent"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Road center line */}
      <path
        d="M200,50 C120,120 280,180 200,250 C100,320 300,380 200,450 C80,520 320,580 200,650 C120,720 280,780 200,850 C100,920 300,980 200,1050 C150,1120 250,1150 200,1200"
        stroke="white"
        strokeWidth="4"
        fill="transparent"
        strokeLinecap="round"
        strokeDasharray="20 15"
        opacity="0.9"
      />

      <defs>
        <linearGradient id="roadGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="30%" stopColor="#8b5cf6" />
          <stop offset="60%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
    </svg>

    <div className="relative z-10 max-w-6xl mx-auto px-6">
      {/* Checkpoint 1 - Giới thiệu */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-32 relative">
        {/* Comic book style number badge */}
        <div className="z-10 absolute -top-8 left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none">
          <div className="bg-yellow-400 text-purple-800 font-black text-2xl w-16 h-16 rounded-full flex items-center justify-center border-4 border-purple-800 shadow-[4px_4px_0px_#7c3aed] rotate-12">
            1
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/img/img/event_01.webp"
              alt="Giới thiệu"
              width={300} height={300}
              className="w-80 h-80 object-contain rounded-[40px] border-6 border-purple-600 shadow-[12px_12px_0px_#ec4899]"
            />
            {/* Comic book style "POW!" effect */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-purple-800 font-black text-lg px-4 py-2 rounded-full border-3 border-purple-800 rotate-12 shadow-lg">
              BẮT ĐẦU!
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          {/* Speech bubble style container */}
          <div className="bg-white p-8 rounded-3xl border-4 border-purple-600 shadow-[8px_8px_0px_#8b5cf6] relative">
            <div className="absolute -left-4 top-8 w-0 h-0 border-t-[20px] border-t-transparent border-r-[30px] border-r-white border-b-[20px] border-b-transparent"></div>
            <div className="absolute -left-6 top-7 w-0 h-0 border-t-[22px] border-t-transparent border-r-[32px] border-r-purple-600 border-b-[22px] border-b-transparent"></div>

            <h3 className="font-black text-4xl text-purple-800 mb-4 transform -rotate-1">🎨 GIỚI THIỆU</h3>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Một{" "}
              <span className="bg-yellow-300 px-2 py-1 rounded font-black text-purple-800">sân chơi sáng tạo</span>{" "}
              cho những cây bút trẻ đam mê viết lách, kể chuyện và thỏa sức{" "}
              <span className="text-pink-600 font-bold">tưởng tượng!</span>
            </p>
          </div>
        </div>
      </div>

      {/* Checkpoint 2 - Thời gian */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-32 relative">
        <div className="z-10 absolute -top-8 right-1/2 transform translate-x-1/2 lg:right-0 lg:transform-none">
          <div className="bg-pink-400 text-white font-black text-2xl w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-[4px_4px_0px_#ec4899] -rotate-12">
            2
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Spinning dashed border */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="w-full h-full rounded-full border-8 border-dashed border-pink-500 animate-spin-slow" />
              </div>
              <Image
                src="/img/img/event_02.webp"
                alt="Thời gian"
                width={300}
                height={300}
                className="w-72 h-72 object-contain rounded-full shadow-[0_0_30px_#ec4899]/50 relative z-20"
              />
            </div>
            <div className="z-10 absolute -bottom-4 -left-4 bg-orange-400 text-white font-black text-lg px-4 py-2 rounded-full border-3 border-white -rotate-12 shadow-lg">
              NHANH LÊN!
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-gradient-to-br from-pink-400 to-orange-400 p-8 rounded-3xl border-4 border-white shadow-[8px_8px_0px_#f97316] relative transform rotate-1">
            <h3 className="font-black text-4xl text-white mb-4 drop-shadow-lg">⏰ THỜI GIAN</h3>
            <div className="bg-white/90 p-4 rounded-2xl border-2 border-orange-300">
              <p className="text-xl text-gray-800 font-bold">
                📝 Nhận bài: <span className="bg-yellow-300 px-2 py-1 rounded font-black">01/09 - 30/09/2025</span>
              </p>
              <p className="text-xl text-gray-800 font-bold mt-2">
                🎉 Kết quả: <span className="bg-green-300 px-2 py-1 rounded font-black">15/10/2025</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Checkpoint 3 - Yêu cầu */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-32 relative">
        <div className="z-10 absolute -top-8 left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none">
          <div className="bg-green-400 text-white font-black text-2xl w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-[4px_4px_0px_#22c55e] rotate-12">
            3
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/img/img/event_03.webp"
              alt="Yêu cầu"
              width={300} height={300}
              className="w-72 h-72 object-contain border-6 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border-green-500 shadow-[12px_12px_0px_#22c55e]"
            />
            <div className="absolute -top-4 -right-4 bg-blue-400 text-white font-black text-lg px-4 py-2 rounded-full border-3 border-white rotate-12 shadow-lg">
              VIẾT ĐI!
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white p-8 rounded-3xl border-4 border-green-500 shadow-[8px_8px_0px_#22c55e] relative -rotate-1">
            <h3 className="font-black text-4xl text-green-600 mb-4">📋 YÊU CẦU</h3>
            <div className="space-y-3">
              <p className="text-xl text-gray-700 font-medium">
                📖 Truyện chữ tối đa{" "}
                <span className="bg-red-300 px-2 py-1 rounded font-black text-red-800">5000 từ</span>
              </p>
              <p className="text-xl text-gray-700 font-medium">
                🎨 Chủ đề <span className="bg-blue-300 px-2 py-1 rounded font-black text-blue-800">TỰ DO</span>
              </p>
              <p className="text-xl text-gray-700 font-medium">
                ✨ Khuyến khích: <span className="text-purple-600 font-bold">sáng tạo, bất ngờ, cảm xúc!</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Checkpoint 4 - Luật */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-32 relative">
        <div className="z-10 absolute -top-8 right-1/2 transform translate-x-1/2 lg:right-0 lg:transform-none">
          <div className="bg-red-400 text-white font-black text-2xl w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-[4px_4px_0px_#ef4444] -rotate-12">
            4
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="bg-red-400 text-white px-8 py-6 rounded-3xl shadow-[8px_8px_0px_#dc2626] rotate-3 border-4 border-white relative">
            <div className="absolute -left-4 top-8 w-0 h-0 border-t-[20px] border-t-transparent border-r-[30px] border-r-red-400 border-b-[20px] border-b-transparent"></div>
            <p className="font-bold text-xl leading-relaxed">
              🚫 <span className="bg-white text-red-600 px-2 py-1 rounded font-black">KHÔNG SAO CHÉP</span>
              <br />
              ⚖️ Tôn trọng bản quyền
              <br />✨ Tác phẩm chưa từng công bố
            </p>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white p-8 rounded-3xl border-4 border-red-500 shadow-[8px_8px_0px_#ef4444] relative rotate-1">
            <h3 className="font-black text-4xl text-red-600 mb-4">⚖️ LUẬT LỆ</h3>
            <p className="text-xl text-gray-700 font-medium leading-relaxed">
              Tác phẩm phải do{" "}
              <span className="bg-yellow-300 px-2 py-1 rounded font-black text-purple-800">BẠN SÁNG TÁC</span>, tuân
              thủ quy định của BTC.
              <span className="text-red-600 font-bold"> Bài vi phạm sẽ bị loại!</span>
            </p>
          </div>
        </div>
      </div>

      {/* Checkpoint 5 - Giải thưởng */}
      <div className="flex flex-col lg:flex-row items-center gap-12 relative">
        <div className="z-10 absolute -top-8 left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none">
          <div className="bg-yellow-400 text-purple-800 font-black text-2xl w-16 h-16 rounded-full flex items-center justify-center border-4 border-purple-800 shadow-[4px_4px_0px_#7c3aed] rotate-12">
            5
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/img/img/event_05.webp"
              alt="Giải thưởng"
              width={300}
              height={300}
              className="w-80 h-80 object-contain border-6 border-yellow-500 rounded-xl shadow-[0_0_40px_#eab308]/70"
            />
            <div className="absolute -top-4 -right-4 bg-green-400 text-white font-black text-lg px-4 py-2 rounded-full border-3 border-white rotate-12 shadow-lg">
              CHIẾN THẮNG!
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 p-8 rounded-3xl border-4 border-white shadow-[8px_8px_0px_#f59e0b] relative -rotate-1">
            <h3 className="font-black text-4xl text-white mb-4 drop-shadow-lg">🏆 GIẢI THƯỞNG</h3>
            <div className="bg-white/95 p-6 rounded-2xl border-2 border-yellow-300">
              <p className="text-2xl text-gray-800 font-bold leading-relaxed">
                💰 Tổng giá trị giải thưởng:
                <br />
                <span className="text-4xl font-black text-red-600 bg-yellow-300 px-3 py-1 rounded-lg inline-block mt-2 transform rotate-1">
                  1.000.000₫
                </span>
              </p>
              <p className="text-lg text-gray-700 font-medium mt-4">
                📚 + Cơ hội <span className="bg-green-300 px-2 py-1 rounded font-black text-green-800">XUẤT BẢN</span>{" "}
                trên nền tảng!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Đường phân cách */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#F8F9FA]"
    />

    </section>  
  )
}

export default EventSection