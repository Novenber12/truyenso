"use client"

const PostsSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#F8F9FA] overflow-hidden"
    style={{
      backgroundImage: 'url(https://www.transparenttextures.com/patterns/paper-fibers.png)',
      backgroundBlendMode: 'multiply',
    }}>
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Floating comic book pages */}
        <div className="absolute top-20 left-10 w-16 h-20 bg-white border-2 border-[#4B2E83] rounded-lg shadow-lg transform rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-16 bg-[#FFD700] border-2 border-[#3C4A3E] rounded-lg shadow-lg transform -rotate-6 animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-14 h-18 bg-[#E8F4FD] border-2 border-[#4B2E83] rounded-lg shadow-lg transform rotate-45 animate-float"></div>

        {/* Speech bubbles */}
        <div className="absolute top-1/3 right-1/3 w-24 h-16 bg-white border-3 border-[#4B2E83] rounded-full shadow-lg animate-pulse-slow">
          <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#4B2E83]"></div>
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[#FFD700]/40 to-[#FF6B6B]/20 rounded-full blur-2xl animate-fade-in-slow"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tr from-[#4B2E83]/20 to-[#6A4C93]/30 rounded-full blur-2xl animate-fade-in-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-[#FFD700] to-[#FF6B6B] rounded-full opacity-20 blur-xl animate-pulse"></div>
          <div className="relative inline-block">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1b263b] tracking-tight mb-3">
              Tin tức mới nhất
            </h2>
            <div className="absolute -top-4 -right-8 bg-[#FF6B6B] text-white px-3 py-1 rounded-full text-sm font-bold transform rotate-12 shadow-lg animate-bounce-slow">
              HOT!
            </div>
          </div>
          <p className="mt-4 text-xl text-[#5C4033] font-['Noto_Serif'] max-w-2xl mx-auto">
            Khám phá những câu chuyện mới nhất từ cộng đồng sáng tác
          </p>
        </div>

        <div className="relative">
          {/* Main featured post - large diagonal card */}
          <div className="relative mb-8">
            <div className="bg-gradient-to-br from-white to-[#F8F4E6] border-4 border-[#4B2E83] rounded-3xl shadow-[12px_12px_0px_#FFD700] p-8 transform -rotate-2 hover:rotate-0 transition-all duration-500 group max-w-4xl mx-auto relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF6B6B]/20 to-transparent rounded-bl-full"></div>
              <div className="z-10 absolute -top-8 left-8 bg-gradient-to-r from-[#FF6B6B] to-[#FFD700] px-6 py-2 rounded-full border-3 border-white font-black text-white text-xl shadow-lg transform rotate-3 group-hover:-rotate-3 transition-transform">
                🔥 FEATURED
              </div>
              <div className="relative z-10">
                <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-black text-[#4B2E83] mb-4 group-hover:text-[#6A4C93] transition-colors">
                  Sự kiện "Viết & Vẽ" đã chính thức khởi động!
                </h3>
                <p className="font-['Noto_Serif'] text-[#3C4A3E] text-xl leading-relaxed mb-6">
                  Tham gia ngay cuộc thi sáng tác truyện chữ & truyện tranh, nhận giải thưởng hấp dẫn và cơ hội xuất
                  bản! Đây là cơ hội tuyệt vời để thể hiện tài năng và kết nối với cộng đồng sáng tác.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[#5C4033] font-semibold">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#4B2E83] to-[#6A4C93] rounded-full flex items-center justify-center text-white font-bold">
                      BTC
                    </div>
                    <div>
                      <div className="text-sm opacity-75">10/06/2024</div>
                      <div className="text-lg font-bold">Ban Tổ Chức</div>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-[#4B2E83] to-[#6A4C93] text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Đọc thêm →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Left post - elevated and rotated */}
            <div className="relative z-20">
              <div className="bg-gradient-to-br from-[#E8F4FD] to-white border-4 border-[#3C4A3E] rounded-2xl shadow-[8px_8px_0px_#4B2E83] p-6 transform rotate-1 hover:-rotate-1 transition-all duration-300 group relative">
                <div className="absolute -top-6 right-6 bg-[#4B2E83] text-[#FFD700] px-4 py-2 rounded-full font-bold text-sm shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform">
                  📚 HƯỚNG DẪN
                </div>
                <div className="pt-4">
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1b263b] mb-3 group-hover:text-[#4B2E83] transition-colors">
                    Hướng dẫn đăng bài dự thi cực đơn giản
                  </h3>
                  <p className="font-['Noto_Serif'] text-[#3C4A3E] text-lg leading-relaxed mb-4">
                    Xem ngay các bước đăng bài, chia sẻ tác phẩm của bạn lên diễn đàn và nhận phản hồi từ cộng đồng!
                  </p>
                  <div className="flex items-center gap-2 text-[#4B2E83] font-semibold">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#FFD700] to-[#FF6B6B] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      M
                    </div>
                    <span className="text-sm">09/06/2024 • by Mod</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right post - overlapping and elevated */}
            <div className="relative z-10 md:-ml-8 md:mt-12">
              <div className="bg-gradient-to-br from-white to-[#FFF8E1] border-4 border-[#5C4033] rounded-2xl shadow-[8px_8px_0px_#3C4A3E] p-6 transform -rotate-1 hover:rotate-1 transition-all duration-300 group relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#3C4A3E]/10 to-transparent rounded-bl-full"></div>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#3C4A3E] to-[#5C4033] text-[#FFD700] px-4 py-2 rounded-full font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
                  📢 QUAN TRỌNG
                </div>
                <div className="pt-4">
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#5C4033] mb-3 group-hover:text-[#3C4A3E] transition-colors">
                    Cập nhật luật lệ & tiêu chí chấm giải
                  </h3>
                  <p className="font-['Noto_Serif'] text-[#3C4A3E] text-lg leading-relaxed mb-4">
                    Đọc kỹ quy định mới nhất để bài dự thi của bạn không bị loại và đạt điểm cao từ Ban Giám Khảo!
                  </p>
                  <div className="flex items-center gap-2 text-[#3C4A3E] font-semibold">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#5C4033] to-[#3C4A3E] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      BTC
                    </div>
                    <span className="text-sm">08/06/2024 • by BTC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center gap-4 flex-wrap">
            <div className="bg-gradient-to-r from-[#FFD700] to-[#FF6B6B] text-white px-6 py-3 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
              📖 Xem tất cả bài viết
            </div>
            <div className="bg-gradient-to-r from-[#4B2E83] to-[#6A4C93] text-white px-6 py-3 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
              ✍️ Viết bài mới
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostsSection
