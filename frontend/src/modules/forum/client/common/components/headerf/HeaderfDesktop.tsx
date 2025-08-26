import React from 'react';

const HeaderfDesktop = () => {
  return (
    <header className="w-full bg-[#192433] shadow-sm sticky top-0 z-[100]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-8 h-16">
        {/* Logo */}
        <div className="flex items-center">
          {/* <img
            src="/logo.png"
            alt="Diễn đàn"
            className="h-10 mr-3"
          /> */}
          <span className="font-bold text-[22px] text-white tracking-wider">
            Diễn Đàn
          </span>
        </div>
        {/* Navigation */}
        <nav>
          <ul className="flex gap-8 list-none m-0 p-0">
            <li>
              <a
                href="/"
                className="no-underline text-gray-200 font-medium text-base hover:text-blue-400 transition-colors"
              >
                Trang chủ
              </a>
            </li>
            <li>
              <a
                href="/chuyen-muc"
                className="no-underline text-gray-200 font-medium text-base hover:text-blue-400 transition-colors"
              >
                Chuyên mục
              </a>
            </li>
            <li>
              <a
                href="/bai-moi"
                className="no-underline text-gray-200 font-medium text-base hover:text-blue-400 transition-colors"
              >
                Bài mới
              </a>
            </li>
            <li>
              <a
                href="/lien-he"
                className="no-underline text-gray-200 font-medium text-base hover:text-blue-400 transition-colors"
              >
                Liên hệ
              </a>
            </li>
          </ul>
        </nav>
        {/* User actions */}
        <div className="flex items-center gap-4">
          <a
            href="/dang-nhap"
            className="px-[18px] py-[6px] border border-blue-400 rounded text-blue-400 bg-[#192433] font-medium no-underline mr-2 transition-colors hover:bg-blue-950 hover:text-white"
          >
            Đăng nhập
          </a>
          <a
            href="/dang-ky"
            className="px-[18px] py-[6px] rounded text-white bg-blue-600 font-medium no-underline border-none transition-colors hover:bg-blue-700"
          >
            Đăng ký
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderfDesktop;