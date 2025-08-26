'use client'
import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    note: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Xử lý gửi form ở đây nếu cần
  }

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#F8F9FA] overflow-hidden"
    >
      {/* Artistic background accent */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#D4AF37]/20 via-[#3C4A3E]/10 to-[#1b263b]/10 blur-3xl z-0"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-[#4B2E83]/10 via-[#D4AF37]/10 to-[#3C4A3E]/10 blur-2xl z-0"></div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2
            className="h-16 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#1b263b] via-[#4B2E83] to-[#D4AF37]/80 bg-clip-text text-transparent drop-shadow tracking-tight font-serif"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Liên hệ với chúng tôi
          </h2>
          <p className="mt-3 text-lg md:text-xl text-[#3C4A3E] font-['Noto']">
            Hãy để lại thông tin, chúng tôi sẽ phản hồi sớm nhất!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col gap-7 border border-[#D4AF37]/30"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-[#5C4033] font-semibold mb-2 font-serif text-lg"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Họ và tên
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl border border-[#D4AF37]/40 bg-[#FDF6F0] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 font-sans text-[#1b263b] text-base transition placeholder:text-[#bfa46b]/80"
              placeholder="Nhập họ và tên của bạn"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-[#5C4033] font-semibold mb-2 font-serif text-lg"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl border border-[#D4AF37]/40 bg-[#FDF6F0] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 font-sans text-[#1b263b] text-base transition placeholder:text-[#bfa46b]/80"
              placeholder="Nhập email của bạn"
            />
          </div>
          <div>
            <label
              htmlFor="note"
              className="block text-[#5C4033] font-semibold mb-2 font-serif text-lg"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ghi chú
            </label>
            <textarea
              id="note"
              name="note"
              rows={4}
              value={form.note}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl border border-[#D4AF37]/40 bg-[#FDF6F0] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 font-sans text-[#1b263b] text-base transition resize-none placeholder:text-[#bfa46b]/80"
              placeholder="Bạn muốn nhắn gì cho chúng tôi?"
            />
          </div>
          <button
            type="submit"
            className="group mt-2 px-10 py-3 rounded-full bg-gradient-to-r from-[#D4AF37]/60 to-[#FFD700]/60 hover:from-[#D4AF37] hover:to-[#FFD700] text-[#1b263b] font-bold font-serif text-lg shadow-lg transition-all duration-300 tracking-wide flex items-center justify-center gap-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="transition-all group-hover:tracking-widest">Gửi liên hệ</span>
            <svg className="w-5 h-5 text-[#1b263b] opacity-70 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          {submitted && (
            <div className="mt-4 text-center text-[#3C4A3E] font-sans animate-fade-in text-base md:text-lg">
              Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.
            </div>
          )}
        </form>
      </div>

      {/* Wave */}
      <div className='z-30 absolute left-0 bottom-0 w-full'>
        <svg className='w-full h-full mb-[-7px] min-h-[70px] max-h-[100px]' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox='0 24 150 28' preserveAspectRatio='none' shapeRendering={'auto'}>
          <defs>
            {/* Softer, more gentle wave path */}
            <path 
              id='gentle-wave' 
              d="M-160 44
                c40 0 60-12 100-12
                s60 12 100 12
                60-12 100-12
                60 12 100 12
                v44h-400z"
            />
          </defs>
          <g className='parallax'>
            <use xlinkHref="#gentle-wave" x={'48'} y={'0'} fill='#230840'></use>
            <use xlinkHref="#gentle-wave" x={'48'} y={'3'} fill='#1a0035'></use>
          </g>
        </svg>
      </div>
    </section>
  )
}

export default Contact