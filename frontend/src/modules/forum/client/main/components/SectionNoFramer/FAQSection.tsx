'use client'
import React, { useState, useEffect, useRef } from 'react'
import { FaAngleRight } from 'react-icons/fa'

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
      className="relative pb-28 bg-[#F8F9FA]"
      style={{
        backgroundImage: 'url(https://www.transparenttextures.com/patterns/paper-fibers.png)',
        backgroundBlendMode: 'multiply',
      }}
    >
      <div className="max-w-3xl mx-auto flex justify-center pt-14 pb-28">
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
      
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-8">
        {/* Left Column: Sticky Sidebar */}
        <aside className="md:w-1/3 w-full md:sticky md:top-32 self-start z-10">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#744dd0] to-[#fe7f70] bg-clip-text text-transparent drop-shadow tracking-tight">
              FAQ
            </h2>
            <p className="mt-2 text-lg text-gray-500 italic">
              Những thắc mắc thường gặp về Truyenso.vn
            </p>
          </div>
          <nav className="flex flex-col gap-3">
            {faqData.map((category) => (
              <button
                key={category.key}
                onClick={() => scrollToCategory(category.key)}
                className={`
                  group transition-all duration-300 text-left
                  px-4 py-3 rounded-xl font-semibold text-lg
                  ${activeCategory === category.key 
                    ? 'bg-[#f3e8ff] text-[#fe7f70] border-[#fe7f70] border shadow-lg' 
                    : 'text-[#744dd0] border border-transparent hover:bg-[#f3e8ff] hover:text-[#fe7f70]'
                  }
                  cursor-pointer
                `}
              >
                <span className="transition-all duration-700 group-hover:pl-2 block">
                  {category.label}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Right Column: FAQ Content */}
        <div className="md:w-2/3 w-full flex flex-col gap-12">
          {faqData.map((category) => (
            <div 
              key={category.key}
              id={`faq-${category.key}`} 
              data-faq-section={category.key} 
              className="scroll-mt-32"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#744dd0] flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#fe7f70] animate-pulse"></span>
                {category.label}
              </h3>
              <div className="flex flex-col gap-4">
                {category.items.map((item) => (
                  <div 
                    key={item.id}
                    className="group transition-all duration-700 bg-white rounded-xl shadow-md overflow-hidden border border-[#f3e8ff] hover:shadow-lg"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full cursor-pointer px-6 py-4 text-lg font-semibold flex items-center justify-between text-left hover:bg-[#f3e8ff] hover:text-[#744dd0] transition-all duration-700"
                    >
                      {item.question}
                      <span className={`ml-2 transition-transform duration-700 text-[#fe7f70] ${
                        openItems.has(item.id) ? 'rotate-90' : ''
                      }`}>
                        <FaAngleRight/>
                      </span>
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-700 ease-in-out ${
                        openItems.has(item.id) 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-4 pt-2 text-gray-700">
                        {item.answer}
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