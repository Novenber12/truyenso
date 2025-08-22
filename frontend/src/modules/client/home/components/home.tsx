'use client';

import { useState } from 'react';
import Link from 'next/link';
import { StarIcon, EyeIcon, ClockIcon, FireIcon, BookOpenIcon, HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

const Home = () => {
  const [activeTab, setActiveTab] = useState('featured');

  // Mock data for novels
  const featuredNovels = [
    {
      id: 1,
      title: 'Tu Tiên Đại Đế',
      author: 'Thiên Hạ Bá Vương',
      cover: '/img/product/novel1.jpg',
      rating: 4.8,
      views: '2.5M',
      chapters: 1250,
      status: 'Đang ra',
      category: 'Tiên Hiệp',
      description: 'Một thiếu niên bình thường bỗng nhiên được kế thừa di sản của một vị tiên đế...'
    },
    {
      id: 2,
      title: 'Ma Đế Tái Sinh',
      author: 'Hắc Ám Chi Chủ',
      cover: '/img/product/novel2.jpg',
      rating: 4.6,
      views: '1.8M',
      chapters: 890,
      status: 'Hoàn thành',
      category: 'Huyền Huyễn',
      description: 'Ma đế bị phản bội, tái sinh về 3000 năm trước, bắt đầu con đường báo thù...'
    },
    {
      id: 3,
      title: 'Võ Thần Quyết',
      author: 'Võ Đạo Chí Tôn',
      cover: '/img/product/novel3.jpg',
      rating: 4.7,
      views: '3.2M',
      chapters: 1560,
      status: 'Đang ra',
      category: 'Võ Hiệp',
      description: 'Thế giới võ học, một thiếu niên với tài năng thiên phú vươn lên đỉnh cao...'
    },
    {
      id: 4,
      title: 'Thần Cấp Hệ Thống',
      author: 'Hệ Thống Lưu',
      cover: '/img/product/novel4.jpg',
      rating: 4.5,
      views: '1.2M',
      chapters: 650,
      status: 'Đang ra',
      category: 'Đô Thị',
      description: 'Bỗng nhiên có được hệ thống thần cấp, cuộc sống thay đổi hoàn toàn...'
    }
  ];

  const latestUpdates = [
    {
      id: 1,
      title: 'Tu Tiên Đại Đế',
      chapter: 'Chương 1251: Đỉnh cao mới',
      time: '2 giờ trước',
      author: 'Thiên Hạ Bá Vương'
    },
    {
      id: 2,
      title: 'Ma Đế Tái Sinh',
      chapter: 'Chương 891: Kết thúc',
      time: '4 giờ trước',
      author: 'Hắc Ám Chi Chủ'
    },
    {
      id: 3,
      title: 'Võ Thần Quyết',
      chapter: 'Chương 1561: Đột phá',
      time: '6 giờ trước',
      author: 'Võ Đạo Chí Tôn'
    },
    {
      id: 4,
      title: 'Thần Cấp Hệ Thống',
      chapter: 'Chương 651: Nhiệm vụ mới',
      time: '8 giờ trước',
      author: 'Hệ Thống Lưu'
    }
  ];

  const categories = [
    { name: 'Tiên Hiệp', count: 1250, color: 'bg-blue-500' },
    { name: 'Huyền Huyễn', count: 980, color: 'bg-purple-500' },
    { name: 'Võ Hiệp', count: 750, color: 'bg-red-500' },
    { name: 'Đô Thị', count: 650, color: 'bg-green-500' },
    { name: 'Khoa Huyễn', count: 420, color: 'bg-yellow-500' },
    { name: 'Lịch Sử', count: 380, color: 'bg-indigo-500' }
  ];

  const NovelCard = ({ novel }: { novel: any }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={novel.cover}
          alt={novel.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/300x200/6366f1/ffffff?text=Truyện+Số';
          }}
        />
        <div className="absolute top-2 right-2">
          <button className="p-1 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
            <HeartIcon className="h-4 w-4 text-gray-600" />
          </button>
        </div>
        <div className="absolute bottom-2 left-2">
          <span className={`px-2 py-1 text-xs font-medium rounded ${
            novel.status === 'Đang ra' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {novel.status}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{novel.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{novel.author}</p>
        <p className="text-xs text-gray-500 mb-3 line-clamp-2">{novel.description}</p>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span className="flex items-center">
            <StarIconSolid className="h-3 w-3 text-yellow-400 mr-1" />
            {novel.rating}
          </span>
          <span className="flex items-center">
            <EyeIcon className="h-3 w-3 mr-1" />
            {novel.views}
          </span>
          <span className="flex items-center">
            <BookOpenIcon className="h-3 w-3 mr-1" />
            {novel.chapters}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
            {novel.category}
          </span>
          <Link href={`/truyen/${novel.id}`} className="text-purple-600 hover:text-purple-700 text-sm font-medium">
            Đọc ngay
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Khám Phá Thế Giới Truyện Số
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Hàng nghìn truyện hay, cập nhật liên tục, đọc miễn phí
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/truyen-moi" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Truyện Mới Nhất
              </Link>
              <Link href="/the-loai" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Khám Phá Thể Loại
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Novels Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <FireIcon className="h-8 w-8 text-red-500 mr-3" />
              Truyện Nổi Bật
            </h2>
            <Link href="/truyen-noi-bat" className="text-purple-600 hover:text-purple-700 font-medium">
              Xem tất cả →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredNovels.map((novel) => (
              <NovelCard key={novel.id} novel={novel} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories and Latest Updates */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Categories */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Thể Loại Truyện</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={`/the-loai/${category.name.toLowerCase()}`}
                    className="group block p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 group-hover:text-purple-600">
                        {category.name}
                      </span>
                      <span className={`w-3 h-3 rounded-full ${category.color}`}></span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{category.count} truyện</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Latest Updates */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ClockIcon className="h-6 w-6 text-blue-500 mr-2" />
                Cập Nhật Mới
              </h3>
              <div className="space-y-4">
                {latestUpdates.map((update, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                    <h4 className="font-medium text-gray-900 mb-1 line-clamp-1">
                      {update.title}
                    </h4>
                    <p className="text-sm text-purple-600 mb-1">{update.chapter}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{update.author}</span>
                      <span>{update.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/cap-nhat-moi" className="block w-full text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Xem tất cả cập nhật
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10,000+</div>
              <div className="text-purple-100">Truyện Hay</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-100">Tác Giả</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1M+</div>
              <div className="text-purple-100">Độc Giả</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-purple-100">Cập Nhật</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
