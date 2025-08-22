'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { StarIcon, EyeIcon, BookOpenIcon, HeartIcon, ShareIcon, ArrowLeftIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import ClientLayout from "@/modules/client/common/layouts/ClientLayout";

const NovelDetailPage = () => {
  const params = useParams();
  const novelId = params.slug;
  const [activeTab, setActiveTab] = useState('description');

  // Static data for novel details
  const novelData = {
    id: novelId,
    title: 'Tu Tiên Đại Đế',
    author: 'Thiên Hạ Bá Vương',
    cover: '/img/product/novel1.jpg',
    rating: 4.8,
    views: '2.5M',
    totalChapters: 1250,
    status: 'Đang ra',
    category: 'Tiên Hiệp',
    description: `Một thiếu niên bình thường tên Lâm Phong, sống trong một thế giới tu tiên nơi sức mạnh là tất cả. Bỗng một ngày, anh được kế thừa di sản của một vị tiên đế đã mất tích hàng nghìn năm trước.

    Với hệ thống tu luyện thần kỳ và kiến thức vô tận, Lâm Phong bắt đầu con đường tu tiên đầy thử thách. Từ một kẻ yếu ớt, anh dần dần trở thành một cường giả được cả thế giới kính nể.

    Nhưng con đường này không hề dễ dàng. Anh phải đối mặt với vô số kẻ thù, từ những tu sĩ địa phương đến những lão quái vật đã sống hàng nghìn năm. Mỗi bước tiến đều phải trả giá bằng máu và nước mắt.

    Liệu Lâm Phong có thể vượt qua tất cả để trở thành Tu Tiên Đại Đế, người thống trị cả thế giới tu tiên không?`,
    tags: ['Tu Tiên', 'Cường Giả', 'Huyền Huyễn', 'Thăng Cấp', 'Báo Thù'],
    lastUpdate: '2 giờ trước',
    totalWords: '2.5M',
    readingTime: '125 giờ',
    chapters: [
      { id: 1, title: 'Chương 1: Khởi đầu', views: '150K', date: '2024-01-01' },
      { id: 2, title: 'Chương 2: Hệ thống xuất hiện', views: '145K', date: '2024-01-02' },
      { id: 3, title: 'Chương 3: Tu luyện đầu tiên', views: '140K', date: '2024-01-03' },
      { id: 4, title: 'Chương 4: Đối thủ đầu tiên', views: '135K', date: '2024-01-04' },
      { id: 5, title: 'Chương 5: Chiến đấu sinh tử', views: '130K', date: '2024-01-05' },
      { id: 1250, title: 'Chương 1250: Đỉnh cao mới', views: '25K', date: '2024-12-15' },
      { id: 1249, title: 'Chương 1249: Đột phá', views: '26K', date: '2024-12-14' },
      { id: 1248, title: 'Chương 1248: Thử thách', views: '27K', date: '2024-12-13' },
    ]
  };

  const relatedNovels = [
    {
      id: 2,
      title: 'Ma Đế Tái Sinh',
      author: 'Hắc Ám Chi Chủ',
      cover: '/img/product/novel2.jpg',
      rating: 4.6,
      views: '1.8M',
      chapters: 890,
      status: 'Hoàn thành'
    },
    {
      id: 3,
      title: 'Võ Thần Quyết',
      author: 'Võ Đạo Chí Tôn',
      cover: '/img/product/novel3.jpg',
      rating: 4.7,
      views: '3.2M',
      chapters: 1560,
      status: 'Đang ra'
    },
    {
      id: 4,
      title: 'Thần Cấp Hệ Thống',
      author: 'Hệ Thống Lưu',
      cover: '/img/product/novel4.jpg',
      rating: 4.5,
      views: '1.2M',
      chapters: 650,
      status: 'Đang ra'
    }
  ];

  const NovelCard = ({ novel }: { novel: any }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
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
        <Link href={`/truyen-moi/${novel.id}`} className="text-purple-600 hover:text-purple-700 text-sm font-medium">
          Đọc ngay
        </Link>
      </div>
    </div>
  );

  const NovelContent = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/truyen-moi" className="inline-flex items-center text-purple-600 hover:text-purple-700">
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Quay lại danh sách
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Novel Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Cover Image */}
                <div className="flex-shrink-0">
                  <img
                    src={novelData.cover}
                    alt={novelData.title}
                    className="w-48 h-64 object-cover rounded-lg shadow-md"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/300x400/6366f1/ffffff?text=Truyện+Số';
                    }}
                  />
                </div>

                {/* Novel Info */}
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{novelData.title}</h1>
                  <p className="text-lg text-gray-600 mb-4">Tác giả: {novelData.author}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {novelData.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{novelData.rating}</div>
                      <div className="text-sm text-gray-500">Đánh giá</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{novelData.views}</div>
                      <div className="text-sm text-gray-500">Lượt xem</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{novelData.totalChapters}</div>
                      <div className="text-sm text-gray-500">Số chương</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{novelData.totalWords}</div>
                      <div className="text-sm text-gray-500">Từ</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Bắt đầu đọc
                    </button>
                    <button className="border border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-2 rounded-lg font-medium transition-colors">
                      <HeartIcon className="h-4 w-4 inline mr-2" />
                      Yêu thích
                    </button>
                    <button className="border border-gray-300 text-gray-600 hover:bg-gray-50 px-6 py-2 rounded-lg font-medium transition-colors">
                      <ShareIcon className="h-4 w-4 inline mr-2" />
                      Chia sẻ
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'description'
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Giới thiệu
                  </button>
                  <button
                    onClick={() => setActiveTab('chapters')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'chapters'
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Danh sách chương
                  </button>
                  <button
                    onClick={() => setActiveTab('comments')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'comments'
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Bình luận
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'description' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Nội dung</h3>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {novelData.description}
                    </div>
                  </div>
                )}

                {activeTab === 'chapters' && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Danh sách chương</h3>
                      <span className="text-sm text-gray-500">Tổng cộng {novelData.chapters.length} chương</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {novelData.chapters.map((chapter: any) => (
                        <div key={chapter.id} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-gray-900">{chapter.title}</h4>
                              <p className="text-sm text-gray-500">{chapter.date}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500">{chapter.views} lượt xem</p>
                              <Link href={`/truyen-moi/${novelId}/chuong/${chapter.id}`} className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                                Đọc
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'comments' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Bình luận</h3>
                    <div className="text-center py-8 text-gray-500">
                      <p>Chưa có bình luận nào. Hãy là người đầu tiên bình luận!</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Novel Stats */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Thông tin</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Trạng thái:</span>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    novelData.status === 'Đang ra' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {novelData.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Thể loại:</span>
                  <span className="text-gray-900">{novelData.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cập nhật:</span>
                  <span className="text-gray-900">{novelData.lastUpdate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Thời gian đọc:</span>
                  <span className="text-gray-900">{novelData.readingTime}</span>
                </div>
              </div>
            </div>

            {/* Related Novels */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Truyện liên quan</h3>
              <div className="space-y-4">
                {relatedNovels.map((novel) => (
                  <NovelCard key={novel.id} novel={novel} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <ClientLayout>
      <NovelContent />
    </ClientLayout>
  );
};

export default NovelDetailPage;
