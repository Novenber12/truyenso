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
  className="relative py-24 md:py-32 bg-[#FDFCFB] overflow-hidden"
>
  {/* Artistic dreamy accents */}
  <div className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#FFD700]/30 via-[#FF9F9F]/20 to-[#744DD0]/20 blur-3xl z-0 animate-pulse"></div>
  <div className="pointer-events-none absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-[#744DD0]/20 via-[#FFD700]/20 to-[#1b263b]/10 blur-2xl z-0 animate-float-slow"></div>

  {/* Manga halftone pattern */}
  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_#000_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none"></div>

  <div className="relative z-10 max-w-2xl mx-auto px-4">
    <div className="mb-12 text-center">
      <h2
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1b263b] via-[#744DD0] to-[#FFD700] drop-shadow-[3px_3px_0px_#1b263b] font-comic"
      >
        Liên hệ với chúng tôi
      </h2>
      <p className="mt-4 text-lg md:text-xl text-[#3C4A3E] font-noto italic">
        Viết cho chúng tôi, như viết vào một trang nhật ký ✨
      </p>
    </div>

    {/* Form container */}
    <form
      onSubmit={handleSubmit}
      className="relative bg-white/90 backdrop-blur-md rounded-[2.5rem] border-4 border-[#1b263b] shadow-[6px_6px_0px_#1b263b] p-8 md:p-12 flex flex-col gap-7"
    >
      {/* Floating accent bubble */}
      <div className="absolute -top-4 right-6 bg-[#FF9F9F] text-white font-comic px-3 py-1 rounded-full shadow-[3px_3px_0px_#1b263b] rotate-3">
        Hey!
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-[#1b263b] font-comic font-bold mb-2 text-lg"
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
          className="w-full px-5 py-3 rounded-xl border-2 border-[#1b263b] shadow-[3px_3px_0px_#D4AF37] bg-[#FDF6F0] focus:outline-none focus:ring-2 focus:ring-[#FFD700]/60 text-[#1b263b] text-base placeholder:text-[#bfa46b]/80 transition"
          placeholder="Nhập họ và tên của bạn..."
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-[#1b263b] font-comic font-bold mb-2 text-lg"
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
          className="w-full px-5 py-3 rounded-xl border-2 border-[#1b263b] shadow-[3px_3px_0px_#744DD0] bg-[#FDF6F0] focus:outline-none focus:ring-2 focus:ring-[#744DD0]/50 text-[#1b263b] text-base placeholder:text-[#bfa46b]/80 transition"
          placeholder="Nhập email của bạn..."
        />
      </div>

      <div>
        <label
          htmlFor="note"
          className="block text-[#1b263b] font-comic font-bold mb-2 text-lg"
        >
          Ghi chú
        </label>
        <textarea
          id="note"
          name="note"
          rows={4}
          value={form.note}
          onChange={handleChange}
          className="w-full px-5 py-3 rounded-xl border-2 border-[#1b263b] shadow-[3px_3px_0px_#FFD700] bg-[#FDF6F0] focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 text-[#1b263b] text-base placeholder:text-[#bfa46b]/80 resize-none transition"
          placeholder="Bạn muốn nhắn gì cho chúng tôi?"
        />
      </div>

      {/* Comic-style button */}
      <button
        type="submit"
        className="group mt-2 px-10 py-3 rounded-full bg-gradient-to-r from-[#FFD700]/70 to-[#FF9F9F]/70 hover:from-[#FFD700] hover:to-[#FF9F9F] border-2 border-[#1b263b] shadow-[4px_4px_0px_#1b263b] font-comic text-lg font-extrabold text-[#1b263b] tracking-wide transition-all duration-700 flex items-center justify-center gap-2"
      >
        <span className="group-hover:tracking-widest transition-all duration-300">Gửi liên hệ</span>
        <svg
          className="w-5 h-5 text-[#1b263b] group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>

      {submitted && (
        <div className="mt-4 text-center text-[#1b263b] font-comic animate-bounce text-lg">
          Cảm ơn bạn đã gửi! 🎉
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
          <g className='parallaxx'>
            <use xlinkHref="#gentle-wave" x={'48'} y={'0'} fill='#230840'></use>
            <use xlinkHref="#gentle-wave" x={'48'} y={'3'} fill='#1a0036'></use>
          </g>
        </svg>
      </div>
    </section>
  )
}

export default Contact