'use client'
import React, { useState, useEffect, useRef } from 'react'
import { FaAngleRight, FaBookOpen, FaLightbulb, FaQuestionCircle } from 'react-icons/fa'

interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQCategory {
  key: string
  label: string
  items: FAQItem[]
}

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('general')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const faqData: FAQCategory[] = [
    {
      key: "general",
      label: "Chung",
      items: [
        {
          id: "general-1",
          question: "Truyenso.vn là gì?",
          answer: "Truyenso.vn là nền tảng đọc truyện trực tuyến với trải nghiệm mượt mà, kho truyện đa dạng và giao diện hiện đại, thân thiện với người dùng Việt."
        },
        {
          id: "general-2",
          question: "Truyenso.vn có miễn phí không?",
          answer: "Hầu hết các truyện trên Truyenso.vn đều miễn phí. Một số truyện đặc biệt có thể yêu cầu đăng nhập hoặc tham gia cộng đồng để đọc tiếp."
        }
      ]
    },
    {
      key: "account",
      label: "Tài khoản",
      items: [
        {
          id: "account-1",
          question: "Làm sao để đăng ký tài khoản?",
          answer: "Bạn có thể đăng ký tài khoản bằng email hoặc liên kết với tài khoản Google/Facebook chỉ với vài bước đơn giản."
        },
        {
          id: "account-2",
          question: "Quên mật khẩu thì làm thế nào?",
          answer: "Hãy sử dụng chức năng 'Quên mật khẩu' trên trang đăng nhập để lấy lại mật khẩu qua email."
        }
      ]
    },
    {
      key: "reading",
      label: "Đọc truyện",
      items: [
        {
          id: "reading-1",
          question: "Làm sao để tìm truyện yêu thích?",
          answer: "Bạn có thể sử dụng thanh tìm kiếm hoặc duyệt theo thể loại, tác giả để tìm truyện phù hợp với sở thích."
        },
        {
          id: "reading-2",
          question: "Có thể đọc offline không?",
          answer: "Hiện tại, Truyenso.vn chưa hỗ trợ đọc offline. Tuy nhiên, bạn có thể lưu truyện vào danh sách yêu thích để đọc lại nhanh chóng."
        }
      ]
    },
    {
      key: "contribute",
      label: "Đóng góp",
      items: [
        {
          id: "contribute-1",
          question: "Làm sao để gửi truyện của mình lên Truyenso.vn?",
          answer: "Bạn có thể liên hệ với đội ngũ Truyenso.vn qua email hoặc form liên hệ để gửi truyện của mình."
        },
        {
          id: "contribute-2",
          question: "Đóng góp ý kiến, báo lỗi ở đâu?",
          answer: "Hãy sử dụng mục 'Liên hệ' hoặc gửi email trực tiếp cho chúng tôi để đóng góp ý kiến hoặc báo lỗi."
        }
      ]
    }
  ]

  const toggleItem = (itemId: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId)
    } else {
      newOpenItems.add(itemId)
    }
    setOpenItems(newOpenItems)
  }

  const scrollToCategory = (categoryKey: string) => {
    setActiveCategory(categoryKey)
    const element = document.getElementById(`faq-${categoryKey}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Auto-highlight active category based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-faq-section]')
      let found = false
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement
        const rect = section.getBoundingClientRect()
        if (rect.top <= 120) {
          const categoryKey = section.getAttribute('data-faq-section')
          if (categoryKey && categoryKey !== activeCategory) {
            setActiveCategory(categoryKey)
          }
          found = true
          break
        }
      }
      
      if (!found && sections[0]) {
        const firstCategory = sections[0].getAttribute('data-faq-section')
        if (firstCategory && firstCategory !== activeCategory) {
          setActiveCategory(firstCategory)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeCategory])

  return (
    <section
      id="FAQ"
      className="relative py-28 overflow-hidden md:overflow-visible"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(116, 77, 208, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)
        `,
      }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl text-purple-200 animate-bounce opacity-30">?</div>
        <div className="absolute top-40 right-20 text-4xl text-blue-200 animate-pulse opacity-40">?</div>
        <div
          className="absolute bottom-40 left-20 text-5xl text-pink-200 animate-bounce opacity-25"
          style={{ animationDelay: "1s" }}
        >
          ?
        </div>

        <div
          className="absolute top-32 right-10 w-20 h-20 border-4 border-dashed border-yellow-300 rounded-full animate-spin opacity-20"
          style={{ animationDuration: "20s" }}
        ></div>
        <div className="absolute bottom-20 right-32 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg rotate-45 animate-pulse opacity-30"></div>

        <div className="absolute top-60 left-5 w-12 h-16 bg-white border-2 border-gray-300 rounded-sm shadow-lg transform rotate-12 animate-pulse opacity-40">
          <div className="w-full h-2 bg-gray-200 mt-2 rounded"></div>
          <div className="w-3/4 h-1 bg-gray-200 mt-1 rounded"></div>
          <div className="w-full h-1 bg-gray-200 mt-1 rounded"></div>
        </div>
      </div>

      {/* Dòng phân cách */}
      {/* <div className="max-w-3xl mx-auto flex justify-center pt-14 pb-16">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 634 28"
            fill="none"
            className="drop-shadow-lg"
          >
            <path
              d="M2 26C41.0237 23.1556 79.9927 19.9419 118.634 15.5521C169.106 9.98633 227.314 2.42393 275.206 2C280.46 2.57436 264.768 4.99488 262.462 5.55556C257.837 6.43078 252.529 7.47009 247.317 8.59146C239.594 10.3556 212.496 15.8393 226.932 19.8051C239.594 22.6359 263.663 21.9521 280.978 21.3504C314.817 19.9829 349.311 16.7419 383.204 14.7863C465.931 9.5077 549.191 10.547 632 14.1436"
              stroke="url(#faqGradient)"
              strokeWidth={4}
              fill="none"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="faqGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#744dd0" />
                <stop offset="50%" stopColor="#fe7f70" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-8">
        <aside className="md:w-1/3 w-full sticky top-24 self-start z-10">
          <div className="mb-8 relative">
            <div className="absolute -inset-4 bg-white rounded-3xl shadow-2xl border-4 border-dashed border-purple-300 opacity-20 transform rotate-1"></div>
            <div className="relative z-10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaQuestionCircle className="text-4xl text-purple-500 animate-bounce" />
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#744dd0] via-[#fe7f70] to-[#fbbf24] bg-clip-text text-transparent drop-shadow-lg tracking-tight">
                  FAQ
                </h2>
              </div>
              <p className="text-lg text-gray-600 italic font-medium">🎭 Những thắc mắc thường gặp về Truyenso.vn</p>
              <div className="mt-3 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-3/4 animate-pulse"></div>
            </div>
          </div>

          <nav className="flex flex-col gap-4">
            {faqData.map((category, index) => {
              const icons = [FaBookOpen, FaQuestionCircle, FaLightbulb, FaBookOpen]
              const IconComponent = icons[index] || FaQuestionCircle

              return (
                <button
                  key={category.key}
                  onClick={() => scrollToCategory(category.key)}
                  className={`
                    group relative transition-all duration-500 text-left overflow-hidden
                    px-6 py-4 rounded-2xl font-bold text-lg
                    ${
                      activeCategory === category.key
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl transform scale-105"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl hover:transform hover:scale-102"
                    }
                    cursor-pointer shadow-lg
                  `}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${activeCategory === category.key ? "opacity-100" : ""}`}
                  ></div>

                  <div className="relative z-10 flex items-center gap-3">
                    <IconComponent
                      className={`text-xl transition-all duration-500 ${activeCategory === category.key ? "text-white animate-pulse" : "text-purple-500 group-hover:text-purple-600"}`}
                    />
                    <span className="transition-all duration-500 group-hover:translate-x-1">{category.label}</span>
                  </div>

                  {activeCategory === category.key && (
                    <div className="absolute top-1 right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                  )}
                </button>
              )
            })}
          </nav>
        </aside>

        <div className="md:w-2/3 w-full flex flex-col gap-12">
          {faqData.map((category, categoryIndex) => (
            <div key={category.key} id={`faq-${category.key}`} data-faq-section={category.key} className="scroll-mt-32">
              <div className="relative mb-6">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 flex items-center gap-3">
                  <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse shadow-lg"></span>
                  {category.label}
                </h3>
                <div className="mt-2 h-1 bg-gradient-to-r from-purple-400 to-transparent rounded-full w-1/3 animate-pulse"></div>
              </div>

              <div className="flex flex-col gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={item.id}
                    className="group relative transition-all duration-700 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-purple-300 hover:shadow-2xl hover:transform hover:scale-102"
                    style={{
                      background: `linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)`,
                    }}
                  >
                    <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full cursor-pointer px-8 py-6 text-lg font-bold flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-500 relative z-10"
                    >
                      <span className="text-gray-800 group-hover:text-purple-700 transition-colors duration-500">
                        {item.question}
                      </span>
                      <div className="flex items-center gap-2">
                        <span
                          className={`transition-all duration-700 text-2xl ${
                            openItems.has(item.id)
                              ? "rotate-90 text-pink-500 scale-125"
                              : "text-purple-500 group-hover:text-pink-500 group-hover:scale-110"
                          }`}
                        >
                          <FaAngleRight />
                        </span>
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-700 ease-in-out ${
                        openItems.has(item.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-8 pb-6 pt-2 text-gray-700 relative">
                        <div className="relative bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-4 border-l-4 border-purple-400">
                          <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                          <p className="text-base leading-relaxed font-medium">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection