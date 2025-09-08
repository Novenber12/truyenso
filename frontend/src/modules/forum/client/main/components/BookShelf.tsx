"use client";

import { useState, useEffect, useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight, FaLock } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useGlobalTransition } from "./TransitionReveal";
import Image from "next/image";

export default function BookShelf() {
  const [currentLocation, setCurrentLocation] = useState(1);
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false); // Thêm state để điều khiển animate
  const [isScrollLocked, setIsScrollLocked] = useState(false); // Khóa scroll khi ở trang cuối
  const [showSwipeHint, setShowSwipeHint] = useState(false); // Hiển thị gợi ý vuốt ngang
  const [showScrollHint, setShowScrollHint] = useState(false); // Hiển thị gợi ý scroll xuống
  const [isSnapped, setIsSnapped] = useState(false); // Section đã được snap về vị trí 0
  const [isPermanentlyUnlocked, setIsPermanentlyUnlocked] = useState(false); // Đã unlock vĩnh viễn
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
      
      // Cập nhật hint dựa trên trang hiện tại
      if (currentLocation + 1 === maxLocation) {
        setShowScrollHint(true);
        setShowSwipeHint(false);
      } else {
        setShowSwipeHint(true);
        setShowScrollHint(false);
      }
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
      
      // Cập nhật hint khi quay lại
      if (currentLocation - 1 === maxLocation) {
        setShowScrollHint(true);
        setShowSwipeHint(false);
      } else {
        setShowScrollHint(false);
        setShowSwipeHint(true);
      }
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

  // Khóa scroll khi ở trang cuối
  useEffect(() => {
    if (isScrollLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isScrollLocked]);

  // Cập nhật hint dựa trên trang hiện tại và tự động mở khóa khi đến trang cuối
  useEffect(() => {
    if (isScrollLocked && !isPermanentlyUnlocked) {
      if (currentLocation === maxLocation) {
        // Tự động mở khóa vĩnh viễn khi đến trang cuối (back page)
        setIsScrollLocked(false);
        setIsPermanentlyUnlocked(true); // Đánh dấu đã unlock vĩnh viễn
        setShowScrollHint(true);
        setShowSwipeHint(false);
      } else {
        setShowSwipeHint(true);
        setShowScrollHint(false);
      }
    }
  }, [currentLocation, isScrollLocked, maxLocation, isPermanentlyUnlocked]);

  // Trigger hiệu ứng animate khi scroll tới section (không chạy khi vào trang)
  // Khi lướt tới section thì đính nó lại và khóa scroll
  useEffect(() => {
    let hasAnimated = false;
    let hasLocked = false;
    let originalSectionHeight: number | undefined = undefined;

    const handleCheckInView = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      
      // Kiểm tra xem section có hoàn toàn nằm trong viewport không
      // (top của section chạm tới cạnh trên màn hình)
      const isFullyInView = rect.top <= 0 && rect.bottom > 0;
      
      // Kiểm tra xem section có trong viewport không (để đính lại)
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      // Chỉ thực hiện snap logic nếu chưa unlock vĩnh viễn
      if (!isPermanentlyUnlocked) {
        // Snap logic: Khi section gần hoặc vượt qua vị trí top = 0
        const snapThreshold = 100; // Khoảng cách để trigger snap
        const shouldSnap = rect.top <= snapThreshold && rect.top > -snapThreshold && rect.bottom > 0;

        // Snap section về vị trí top = 0 khi cần thiết
        if (shouldSnap && !isSnapped) {
          // Tính toán vị trí scroll để section có rect.top = 0
          const currentScrollY = window.scrollY;
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const targetScrollY = currentScrollY + sectionRect.top;
          
          // Snap về vị trí chính xác để rect.top = 0
          window.scrollTo({
            top: targetScrollY,
            behavior: 'smooth'
          });
          
          setIsSnapped(true);
          setIsScrollLocked(true); // Khóa scroll sau khi snap
          setShowSwipeHint(true); // Hiển thị hint vuốt ngang
        }
      }

      // Chỉ animate khi section hoàn toàn nằm trong viewport
      if (isFullyInView && !hasAnimated) {
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
        // Reset snap state khi rời khỏi section (chỉ nếu chưa unlock vĩnh viễn)
        if (!isPermanentlyUnlocked) {
          setIsSnapped(false);
          setIsScrollLocked(false);
          setShowSwipeHint(false);
          setShowScrollHint(false);
        }
      }
    };

    window.addEventListener('scroll', handleCheckInView, { passive: true });
    window.addEventListener('resize', handleCheckInView);

    // KHÔNG gọi handleCheckInView() ở đây để tránh chạy khi vào trang

    return () => {
      window.removeEventListener('scroll', handleCheckInView);
      window.removeEventListener('resize', handleCheckInView);
    };
  }, [isSnapped]);

  return (
    <motion.div
      ref={sectionRef}
      className={` ${isLocked ? 'sticky top-0' : 'relative'} w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden`}
      style={{ willChange: "clip-path", height: sectionHeight ? `${sectionHeight}px` : undefined }}
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
              <Image
                src={'/img/book/back_cover.webp'}
                alt="back cover"
                width={100}
                height={100}
                priority
                draggable={false}
                unselectable="on"
                sizes="(max-width: 768px) 100vw, 100px"
                quality={100}
                className="w-full h-full object-cover select-none pointer-events-none"
                style={{
                  transform: "rotateY(-180deg)",
                }}
              />
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

      {/* Swipe Hint - Hiển thị khi cần vuốt ngang */}
      {showSwipeHint && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute -top-5 transform z-50 mt-10"
        >
          <div className="bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 text-white text-sm font-medium flex items-center space-x-2">
            <span>Vuốt ngang để xem thêm</span>
          </div>
        </motion.div>
      )}

      {/* Scroll Hint - Hiển thị khi có thể scroll xuống */}
      {showScrollHint && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute top-5 transform z-50"
        >
          <div className="bg-green-500/80 backdrop-blur-sm rounded-full px-6 py-3 text-white text-sm font-medium flex items-center space-x-2">
            <span>Bạn có thể cuộn xuống để tiếp tục</span>
          </div>
        </motion.div>
      )}

      {/* Unlock Scroll Button - Nút để mở khóa scroll */}
      {isScrollLocked && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsScrollLocked(false);
            setShowScrollHint(false);
            setShowSwipeHint(false);
          }}
          className="absolute top-8 right-8 z-50 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 text-white transition-all duration-300"
        >
          <motion.div
            className="text-xl"
          >
            <FaLock/>
          </motion.div>
        </motion.button>
      )}
    </motion.div>
  );
}
