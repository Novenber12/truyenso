'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa'

const FooterSection = () => {
  return (
    <footer className="relative z-50 bg-gradient-to-b from-[#1a0036] to-[#140000] overflow-hidden">
      {/* CTA Section - simplified */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-16 pb-8 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          ĐỌC TRUYỆN ĐỈNH CAO, MIỄN PHÍ!
        </h2>
        <p className="text-base md:text-lg text-gray-300 mb-6 max-w-xl">
          Truyenso.vn – Nơi hội tụ của hàng ngàn bộ truyện hot, cập nhật liên tục, trải nghiệm mượt mà!
        </p>
        <Link
          href="https://truyenso.vn"
          target="_blank"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#744dd0] to-[#fe7f70] text-white font-semibold text-lg shadow-lg hover:-translate-y-2 transition-all duration-300"
        >
          ĐỌC NGAY TẠI TRUYENSO.VN
        </Link>
        
        {/* Social Links - simplified */}
        <div className="flex gap-4 mt-6 justify-center">
          <a
            href="https://facebook.com/truyensovn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#744dd0]/20 hover:bg-[#744dd0] transition-all duration-300"
          >
            <FaFacebook className="text-[#744dd0] hover:text-white text-lg transition-colors" />
          </a>
          <a
            href="https://instagram.com/truyensovn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#744dd0]/20 hover:bg-[#744dd0] transition-all duration-300"
          >
            <FaInstagram className="text-[#744dd0] hover:text-white text-lg transition-colors" />
          </a>
          <a
            href="https://youtube.com/@truyensovn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#744dd0]/20 hover:bg-[#744dd0] transition-all duration-300"
          >
            <FaYoutube className="text-[#744dd0] hover:text-white text-lg transition-colors" />
          </a>
          <a
            href="https://tiktok.com/@truyensovn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#744dd0]/20 hover:bg-[#744dd0] transition-all duration-300"
          >
            <FaTiktok className="text-[#744dd0] hover:text-white text-lg transition-colors" />
          </a>
        </div>
      </div>

      {/* Footer bottom - simplified */}
      <div className="relative z-10 border-t border-[#744dd0]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} <span className="text-[#744dd0] font-medium">Truyenso.vn</span>. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative SVG bottom waves - simplified */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
          <path fill="#744dd0" fillOpacity="0.08" d="M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </footer>
  )
}

export default FooterSection
