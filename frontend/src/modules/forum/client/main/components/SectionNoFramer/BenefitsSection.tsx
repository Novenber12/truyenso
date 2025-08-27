import React from 'react'
import CircularGallery from '../ReactBits/CircularGallery'

const BenefitsSection = () => {
  return (
    <section className="relative py-3 md:py-4 bg-[#F8F9FA] overflow-hidden">
        <div className='mt-20 max-w-7xl mx-auto px-4 text-start'>
            <h3 className="py-5 text-4xl md:text-5xl font-extrabold mb-6">
              Đến với <span className="italic bg-gradient-to-r from-[#744dd0] to-[#fe7f70] bg-clip-text text-transparent">Truyenso.vn</span>, bạn sẽ có gì?
            </h3>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 italic">
              Truyenso.vn không chỉ là nơi đọc truyện, mà còn là không gian để bạn khám phá, thư giãn và kết nối với cộng đồng yêu văn chương. Hãy cùng tìm hiểu những lợi ích nổi bật mà chúng tôi mang lại cho bạn ngay bên dưới!
            </p>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Trang trí */}
                <div className='hidden md:block z-10 absolute -top-10 -left-20 w-24 h-32'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 80 109"
                        fill="none"
                        className="flick-group__blob-scribble-svg"
                    >
                        <path
                            d="M11.1056 107.429C11.1056 107.429 41.3921 75.9563 1.85536 45.3846C39.6893 67.1983 37.5729 21.5813 34.6647 13.925C40.0573 22.0799 72.2872 32.0642 78.2717 2.44878"
                            fill="transparent"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            data-svg-origin="1.8553600311279297 2.448780059814453"
                            style={{
                                transformOrigin: '0px 0px',
                                strokeDashoffset: 0,
                                strokeDasharray: '192.992px, 0.1px',
                            }}
                        ></path>
                    </svg>
                </div>
              {/* Lợi ích 1 */}
              <div className="relative z-10 flex flex-col items-center text-center duration-300 border border-gray-200 shadow-xl rounded-2xl bg-white/80 backdrop-blur-lg px-6 py-8 hover:scale-105 hover:shadow-2xl transition-all group">
                <div className="bg-gradient-to-tr from-[#744dd0] to-[#fe7f70] p-4 rounded-full mb-6 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                    <path d="M12 3v18M12 3c-4.418 0-8 3.582-8 8 0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#744dd0] to-[#fe7f70] drop-shadow-sm">
                  Kho truyện phong phú
                </h4>
                <p className="text-gray-700 text-base font-medium leading-relaxed">
                  Hàng ngàn tác phẩm đa thể loại, từ lãng mạn đến phiêu lưu, mở ra thế giới ngôn từ bất tận.
                </p>
              </div>
              {/* Lợi ích 2 */}
              <div className="relative z-10 flex flex-col items-center text-center duration-300 border border-gray-200 shadow-xl rounded-2xl bg-white/80 backdrop-blur-lg px-6 py-8 hover:scale-105 hover:shadow-2xl transition-all group">
                <div className="bg-gradient-to-tr from-[#fe7f70] to-[#744dd0] p-4 rounded-full mb-6 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                    <path d="M4 19h16M4 15h16M4 11h16M4 7h16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#fe7f70] to-[#744dd0] drop-shadow-sm">
                  Trải nghiệm mượt mà
                </h4>
                <p className="text-gray-700 text-base font-medium leading-relaxed">
                  Giao diện hiện đại, tối ưu cho mọi thiết bị, đọc truyện liền mạch như dòng thơ chảy mãi.
                </p>
              </div>
              {/* Lợi ích 3 */}
              <div className="relative z-10 flex flex-col items-center text-center duration-300 border border-gray-200 shadow-xl rounded-2xl bg-white/80 backdrop-blur-lg px-6 py-8 hover:scale-105 hover:shadow-2xl transition-all group">
                <div className="bg-gradient-to-tr from-[#744dd0] to-[#fe7f70] p-4 rounded-full mb-6 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                    <path d="M12 20l9-5-9-5-9 5 9 5Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12V4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#744dd0] to-[#fe7f70] drop-shadow-sm">
                  Cộng đồng sáng tạo
                </h4>
                <p className="text-gray-700 text-base font-medium leading-relaxed">
                  Gắn kết độc giả và tác giả, cùng nhau viết tiếp những vần thơ, câu chuyện của riêng mình.
                </p>
              </div>
            </div>

            {/* Dòng phân cách */}
            <div className="max-w-3xl mx-auto mt-16 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 634 28" fill="none" data-scroll-animation-target="draw">
                <path
                  d="M2 26C41.0237 23.1556 79.9927 19.9419 118.634 15.5521C169.106 9.98633 227.314 2.42393 275.206 2C280.46 2.57436 264.768 4.99488 262.462 5.55556C257.837 6.43078 252.529 7.47009 247.317 8.59146C239.594 10.3556 212.496 15.8393 226.932 19.8051C239.594 22.6359 263.663 21.9521 280.978 21.3504C314.817 19.9829 349.311 16.7419 383.204 14.7863C465.931 9.5077 549.191 10.547 632 14.1436"
                  strokeLinejoin="round"
                  data-svg-origin="2 2"
                  className="origin-top-left"
                  style={{
                    strokeDashoffset: 0,
                    strokeDasharray: "742.467px, 0.1px",
                  }}
                  stroke="#744dd0"
                  strokeWidth={3}
                  fill="none"
                />
              </svg>
            </div>
        </div>
        {/* Giới thiệu nền tảng */}
        <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery bend={3} textColor="#000000" borderRadius={0.05} scrollEase={0.02}/>
        </div>
    </section>
  )
}

export default BenefitsSection