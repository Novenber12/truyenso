"use client";

import { useState, useEffect, useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useGlobalTransition } from "./TransitionReveal";

export default function BookShelf() {
  const [currentLocation, setCurrentLocation] = useState(1);
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false); // Thêm state để điều khiển animate
  const REVEAL_DURATION_MS = 3200;
  const [sectionHeight, setSectionHeight] = useState<number | undefined>(undefined);

  const numberOfPapers = 3;
  const maxLocation = numberOfPapers + 1;
  const bookRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { triggerTransition } = useGlobalTransition();

  const book = typeof window !== "undefined" ? document.getElementById("book") : null;
  const prevBtn = typeof window !== "undefined" ? document.getElementById("prev-btn") : null;
  const nextBtn = typeof window !== "undefined" ? document.getElementById("next-btn") : null;
  const paper1 = typeof window !== "undefined" ? document.getElementById("p1") : null;
  const paper2 = typeof window !== "undefined" ? document.getElementById("p2") : null;
  const paper3 = typeof window !== "undefined" ? document.getElementById("p3") : null;

  // Update book transform based on current location
  const updateBookTransform = () => {
    if (book) {
      if (currentLocation === 1) {
        book.style.transform = "translateX(0%)";
      } else {
        book.style.transform = "translateX(50%)";
      }
    }
  };

  // Update transform whenever currentLocation changes
  useEffect(() => {
    updateBookTransform();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  const openBook = () => {
    if (book && prevBtn && nextBtn) {
      book.style.transform = "translateX(50%)";
      // prevBtn.style.transform = "translateX(-180px)";
      // nextBtn.style.transform = "translateX(180px)";
    }
  };

  const closeBook = (isAtBeginning: boolean) => {
    if (book && prevBtn && nextBtn) {
      if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
      } else {
        book.style.transform = "translateX(100%)";
      }
      // prevBtn.style.transform = "translateX(0px)";
      // nextBtn.style.transform = "translateX(0px)";
    }
  };

  const goNextPage = () => {
    if (currentLocation < maxLocation) {
      switch (currentLocation) {
        case 1:
          openBook();
          setFlipped({ ...flipped, 1: true });
          paper1?.style && (paper1.style.zIndex = "1");
          break;
        case 2:
          setFlipped({ ...flipped, 2: true });
          paper2?.style && (paper2.style.zIndex = "2");
          break;
        case 3:
          setFlipped({ ...flipped, 3: true });
          closeBook(false);
          paper3?.style && (paper3.style.zIndex = "3");
          break;
      }
      setCurrentLocation(currentLocation + 1);
    }
  };

  const goPrevPage = () => {
    if (currentLocation > 1) {
      switch (currentLocation) {
        case 2:
          closeBook(true);
          setFlipped({ ...flipped, 1: false });
          paper1?.style && (paper1.style.zIndex = "3");
          break;
        case 3:
          setFlipped({ ...flipped, 2: false });
          paper2?.style && (paper2.style.zIndex = "2");
          break;
        case 4:
          openBook();
          setFlipped({ ...flipped, 3: false });
          paper3?.style && (paper3.style.zIndex = "1");
          break;
      }
      setCurrentLocation(currentLocation - 1);
    }
  };

  // Custom Swiper Logic with full section width
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const newX = e.clientX;
    const deltaX = newX - startX;
    setCurrentX(newX);
    setDragOffset(deltaX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    setIsDragging(false);
    const threshold = 100; // Minimum drag distance to trigger page change

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0 && currentLocation > 1) {
        // Swipe right - go to previous page
        goPrevPage();
      } else if (dragOffset < 0 && currentLocation < maxLocation) {
        // Swipe left - go to next page
        goNextPage();
      }
    }

    setDragOffset(0);
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const newX = e.touches[0].clientX;
    const deltaX = newX - startX;
    setCurrentX(newX);
    setDragOffset(deltaX);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  // Prevent text selection during drag
  useEffect(() => {
    if (isDragging) {
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.userSelect = 'auto';
    }
  }, [isDragging]);

  // Trigger hiệu ứng animate khi scroll tới section (không chạy khi vào trang)
  // Khi lướt tới section thì đính nó lại
  useEffect(() => {
    let hasAnimated = false;
    let hasLocked = false;
    let originalSectionHeight: number | undefined = undefined;

    const handleCheckInView = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView && !hasAnimated) {
        setShouldAnimate(true);
        hasAnimated = true;
      }

      // Khi section vào viewport thì đính lại (sticky)
      if (inView && !hasLocked) {
        // Lưu chiều cao section để tránh layout shift khi sticky
        if (sectionRef.current) {
          const height = sectionRef.current.offsetHeight;
          setSectionHeight(height);
          originalSectionHeight = height;
        }
        setIsLocked(true);
        hasLocked = true;
      } else if (!inView && hasLocked) {
        setIsLocked(false);
        setSectionHeight(undefined);
        hasLocked = false;
      }
    };

    window.addEventListener('scroll', handleCheckInView, { passive: true });
    window.addEventListener('resize', handleCheckInView);

    // KHÔNG gọi handleCheckInView() ở đây để tránh chạy khi vào trang

    return () => {
      window.removeEventListener('scroll', handleCheckInView);
      window.removeEventListener('resize', handleCheckInView);
    };
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      className={`${isLocked ? 'sticky top-0' : 'relative'} w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden`}
      style={{ zIndex: isLocked ? 9980 : undefined, willChange: "clip-path", height: sectionHeight ? `${sectionHeight}px` : undefined }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      animate={shouldAnimate ? { clipPath: "circle(150% at 50% 50%)" } : {}} // Chỉ animate khi scroll tới
      transition={{ duration: REVEAL_DURATION_MS / 500, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Prev button */}
      <button id="prev-btn" onClick={goPrevPage} className="transition-all duration-1000 z-50 absolute left-8">
        <FaArrowCircleLeft size={40} className="text-white hover:text-purple-300 transition-colors" />
      </button>

      {/* Book Container with Custom Swiper */}
      <div
        id="book"
        className="book z-[9998] relative cursor-grab active:cursor-grabbing !rounded-lg"
        ref={bookRef}
        style={{
          transform: `translateX(calc(${currentLocation === 1 ? '0%' : '50%'} + ${dragOffset * 0.1}px))`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out'
        }}
      >
        {/* Paper 1 */}
        <div id="p1" className={`!rounded-lg paper ${flipped[1] ? "flipped" : ""}`}>
          <div className="front !rounded-lg">
            {/* Trang bìa trước: nền đen, chấm sáng ở giữa */}
            <div
              id="f1"
              className="front-content flex items-center justify-center !rounded-lg"
              style={{
                background: "black",
                minHeight: "100%",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div
                className="absolute left-1/2 top-1/2 blur-3xl"
                style={{
                  transform: "translate(-50%, -50%)",
                  width: "194px",
                  height: "194px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #fff 1%, #fff8 30%, #fff0 60%)",
                  boxShadow: "0 0 32px 16px #fff8",

                }}
              />
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4 text-white drop-shadow-lg"></div>
                <h1 className="text-3xl font-bold text-white mb-2 font-serif drop-shadow-lg">Truyện Chữ</h1>
                <p className="text-lg text-white opacity-80 drop-shadow">Những câu chuyện huyền bí</p>
              </div>
            </div>
          </div>
          <div className="back !rounded-lg">
            <div id="b1" className="back-content !rounded-lg">
              <div className="text-center">
                <div className="text-4xl mb-4">🔮</div>
                <h2 className="text-2xl font-bold text-purple-800 mb-4 font-serif">Chương Mở Đầu</h2>
                <p className="text-purple-700 leading-relaxed">Trong một thế giới nơi ma thuật và hiện thực hòa quyện, những câu chuyện bắt đầu từ những trang sách cổ kính...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Paper 2 */}
        <div id="p2" className={`paper !rounded-lg ${flipped[2] ? "flipped" : ""}`}>
          <div className="front !rounded-lg">
            <div id="f2" className="front-content !rounded-lg">
              <div className="text-center">
                <div className="text-4xl mb-4">💫</div>
                <h2 className="text-2xl font-bold text-pink-800 mb-4 font-serif">Những Vì Sao</h2>
                <p className="text-pink-700 leading-relaxed">Dưới bầu trời đầy sao, những tâm hồn đồng điệu tìm thấy nhau qua những vần thơ và câu chuyện...</p>
              </div>
            </div>
          </div>
          <div className="back !rounded-lg">
            <div id="b2" className="back-content !rounded-lg">
              <div className="text-center">
                <div className="text-4xl mb-4">🗡️</div>
                <h2 className="text-2xl font-bold text-emerald-800 mb-4 font-serif">Cuộc Phiêu Lưu</h2>
                <p className="text-emerald-700 leading-relaxed">Mỗi trang sách là một cánh cửa mở ra thế giới mới, nơi những nhân vật dũng cảm bước vào cuộc hành trình...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Paper 3 */}
        <div id="p3" className={`paper !rounded-lg ${flipped[3] ? "flipped" : ""}`}>
          <div className="front !rounded-lg">
            <div id="f3" className="front-content !rounded-lg">
              <div className="text-center">
                <div className="text-4xl mb-4">🌸</div>
                <h2 className="text-2xl font-bold text-blue-800 mb-4 font-serif">Khúc Ca Cuối</h2>
                <p className="text-blue-700 leading-relaxed">Và trong khoảnh khắc cuối cùng, khi những câu chuyện khép lại, trái tim ta vẫn còn vang vọng...</p>
              </div>
            </div>
          </div>
          <div className="back !rounded-lg">
            {/* Trang bìa sau: nền đen, chấm sáng ở giữa */}
            <div
              id="b3"
              className="back-content flex items-center justify-center !rounded-lg"
              style={{
                background: "black",
                borderRadius: "0.5rem",
                minHeight: "100%",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div
                className="absolute left-1/2 top-1/2 blur-3xl"
                style={{
                  transform: "translate(-50%, -50%)",
                  width: "194px",
                  height: "194px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #fff 0%, #fff8 30%, #fff0 60%)",
                  boxShadow: "0 0 32px 16px #fff8"
                }}
              />
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-4 text-white drop-shadow-lg">📖</div>
                <h2 className="text-2xl font-bold text-white mb-4 font-serif drop-shadow-lg">Hết</h2>
                <p className="text-white leading-relaxed drop-shadow">Cảm ơn bạn đã đọc câu chuyện này. Mỗi trang sách là một hành trình mới...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next button */}
      <button id="next-btn" onClick={goNextPage} className="transition-all duration-1000 z-50 absolute right-8">
        <FaArrowCircleRight size={40} className="text-white hover:text-purple-300 transition-colors" />
      </button>

      {/* Page indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2">
          {Array.from({ length: maxLocation }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentLocation === i + 1 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
