'use client';

import { useState } from 'react';
import Link from 'next/link';
import { StarIcon, EyeIcon, BookOpenIcon, HeartIcon, MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

const SanPham = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [sortBy, setSortBy] = useState('Mới nhất');

  // Static data for novels
  const novels = [
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
      description: 'Một thiếu niên bình thường bỗng nhiên được kế thừa di sản của một vị tiên đế, bắt đầu con đường tu tiên đầy thử thách...',
      lastUpdate: '2 giờ trước',
      tags: ['Tu Tiên', 'Cường Giả', 'Huyền Huyễn']
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
      description: 'Ma đế bị phản bội, tái sinh về 3000 năm trước, bắt đầu con đường báo thù và khôi phục đế quốc...',
      lastUpdate: '4 giờ trước',
      tags: ['Tái Sinh', 'Báo Thù', 'Ma Đạo']
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
      description: 'Thế giới võ học, một thiếu niên với tài năng thiên phú vươn lên đỉnh cao, trở thành võ thần...',
      lastUpdate: '6 giờ trước',
      tags: ['Võ Hiệp', 'Cường Giả', 'Thăng Cấp']
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
      description: 'Bỗng nhiên có được hệ thống thần cấp, cuộc sống thay đổi hoàn toàn, từ kẻ yếu trở thành cường giả...',
      lastUpdate: '8 giờ trước',
      tags: ['Hệ Thống', 'Đô Thị', 'Cường Giả']
    },
    {
      id: 5,
      title: 'Đế Bá Thiên Hạ',
      author: 'Thiên Hạ Đế Chủ',
      cover: '/img/product/novel5.jpg',
      rating: 4.9,
      views: '4.1M',
      chapters: 2100,
      status: 'Đang ra',
      category: 'Tiên Hiệp',
      description: 'Một thiếu niên từ thế giới hiện đại xuyên không đến thế giới tu tiên, sử dụng kiến thức hiện đại...',
      lastUpdate: '1 giờ trước',
      tags: ['Xuyên Không', 'Tu Tiên', 'Trí Tuệ']
    },
    {
      id: 6,
      title: 'Siêu Cấp Thần Hào',
      author: 'Thần Hào Tác Giả',
      cover: '/img/product/novel6.jpg',
      rating: 4.4,
      views: '980K',
      chapters: 450,
      status: 'Đang ra',
      category: 'Đô Thị',
      description: 'Từ một kẻ nghèo khó, bỗng nhiên trở thành thần hào, có tiền có quyền, có tất cả...',
      lastUpdate: '12 giờ trước',
      tags: ['Đô Thị', 'Thần Hào', 'Tình Cảm']
    },
    {
      id: 7,
      title: 'Vũ Trụ Chi Chủ',
      author: 'Vũ Trụ Tác Giả',
      cover: '/img/product/novel7.jpg',
      rating: 4.3,
      views: '750K',
      chapters: 320,
      status: 'Đang ra',
      category: 'Khoa Huyễn',
      description: 'Trong vũ trụ vô tận, một thiếu niên bắt đầu hành trình trở thành chủ nhân của vũ trụ...',
      lastUpdate: '24 giờ trước',
      tags: ['Khoa Huyễn', 'Vũ Trụ', 'Khám Phá']
    },
    {
      id: 8,
      title: 'Lịch Sử Chi Vương',
      author: 'Lịch Sử Tác Giả',
      cover: '/img/product/novel8.jpg',
      rating: 4.6,
      views: '1.5M',
      chapters: 780,
      status: 'Hoàn thành',
      category: 'Lịch Sử',
      description: 'Xuyên không về thời cổ đại, sử dụng kiến thức hiện đại để thay đổi lịch sử...',
      lastUpdate: '3 ngày trước',
      tags: ['Lịch Sử', 'Xuyên Không', 'Chính Trị']
    }
  ];

  const categories = ['Tất cả', 'Tiên Hiệp', 'Huyền Huyễn', 'Võ Hiệp', 'Đô Thị', 'Khoa Huyễn', 'Lịch Sử'];
  const sortOptions = ['Mới nhất', 'Xem nhiều', 'Đánh giá cao', 'Số chương'];

  const filteredNovels = novels.filter(novel => {
    const matchesSearch = novel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         novel.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Tất cả' || novel.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const NovelCard = ({ novel }: { novel: any }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={novel.cover}
          alt={novel.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/300x400/6366f1/ffffff?text=Truyện+Số';
          }}
        />
        <div className="absolute top-2 right-2">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
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
        <div className="absolute top-2 left-2">
          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded font-medium">
            {novel.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1 text-lg">{novel.title}</h3>
        <p className="text-sm text-gray-600 mb-2">Tác giả: {novel.author}</p>
        <p className="text-xs text-gray-500 mb-3 line-clamp-2">{novel.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {novel.tags.slice(0, 2).map((tag: string, index: number) => (
            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
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
          <span className="text-xs text-gray-400">Cập nhật: {novel.lastUpdate}</span>
          <Link 
            href={`/truyen-moi/${novel.id}`} 
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Đọc ngay
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Truyện Mới</h1>
          <p className="text-gray-600">Khám phá những truyện mới nhất, hay nhất được cập nhật hàng ngày</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm truyện hoặc tác giả..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Tìm thấy <span className="font-semibold text-purple-600">{filteredNovels.length}</span> truyện
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <FunnelIcon className="h-4 w-4" />
            <span>Đang lọc: {selectedCategory} • Sắp xếp: {sortBy}</span>
          </div>
        </div>

        {/* Novels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredNovels.map((novel) => (
            <NovelCard key={novel.id} novel={novel} />
          ))}
        </div>

        {/* No Results */}
        {filteredNovels.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <MagnifyingGlassIcon className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Không tìm thấy truyện</h3>
            <p className="text-gray-600">Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SanPham;