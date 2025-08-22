'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon, UserIcon, BookOpenIcon, HeartIcon, BellIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpenIcon className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">Truyện Số</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Trang chủ
            </Link>
            <Link href="/truyen-moi" className="text-gray-700 hover:text-purple-600 transition-colors">
              Truyện mới
            </Link>
            <Link href="/the-loai" className="text-gray-700 hover:text-purple-600 transition-colors">
              Thể loại
            </Link>
            <Link href="/xep-hang" className="text-gray-700 hover:text-purple-600 transition-colors">
              Xếp hạng
            </Link>
            <Link href="/tac-gia" className="text-gray-700 hover:text-purple-600 transition-colors">
              Tác giả
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm truyện..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </form>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
              <HeartIcon className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
              <BellIcon className="h-5 w-5" />
            </button>
            <Link href="/login" className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors">
              <UserIcon className="h-5 w-5" />
              <span>Đăng nhập</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <div className="mb-4">
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Tìm kiếm truyện..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </form>
              </div>
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Trang chủ
              </Link>
              <Link href="/truyen-moi" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Truyện mới
              </Link>
              <Link href="/the-loai" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Thể loại
              </Link>
              <Link href="/xep-hang" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Xếp hạng
              </Link>
              <Link href="/tac-gia" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Tác giả
              </Link>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <Link href="/login" className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                  <UserIcon className="h-5 w-5" />
                  <span>Đăng nhập</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
