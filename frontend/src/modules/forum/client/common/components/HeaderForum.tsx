'use client'
import React, { useState, useEffect } from 'react'
import HeaderfDesktop from './headerf/HeaderfDesktop'
import HeaderfMobile from './headerf/HeaderfMobile'
import MenuHeader from './headerf/MenuHeader'

const HeaderForum = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768) // 768px là breakpoint cho mobile
    }

    // Kiểm tra kích thước màn hình khi component mount
    checkScreenSize()

    // Thêm event listener để lắng nghe thay đổi kích thước màn hình
    window.addEventListener('resize', checkScreenSize)

    // Cleanup event listener khi component unmount
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <div>
      {isMobile ? <HeaderfMobile /> : <HeaderfDesktop />}
      <MenuHeader />

    </div>
  )
}

export default HeaderForum