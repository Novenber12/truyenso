"use client";

import { useGlobalTransition, SectionTransition, ScrollReveal, ParallaxScroll } from "./TransitionReveal";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TransitionDemo() {
  const { triggerTransition, isTransitioning } = useGlobalTransition();
  const [currentSection, setCurrentSection] = useState(1);

  const handleManualTransition = async (color: string) => {
    try {
      await triggerTransition(color);
      // setTimeout(async () => {
      //   await triggerTransition(color);
      // }, 500);
    } catch (error) {
      console.error('Transition failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Manual Transition Controls */}
      <div className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-[#3C4A3E]/20">
        <h3 className="text-lg font-semibold text-[#1b263b] mb-3 font-['Playfair_Display']">
          Manual Controls
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => handleManualTransition("#ffffff")}
            disabled={isTransitioning}
            className="w-full bg-[#1b263b] text-white py-2 px-3 rounded text-sm hover:bg-[#1b263b]/90 
                       disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isTransitioning ? "Transitioning..." : "White Transition"}
          </button>
        </div>
      </div>

      {/* Section 1: Hero with Scroll Animations - Black Background */}
      <SectionTransition 
        transitionColor="#ffffff"
        className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden"
      >
        <div className="text-center max-w-4xl mx-auto px-6">
          <ScrollReveal delay={0} direction="up">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 font-['Playfair_Display']">
              Section 1
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={1} direction="left">
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Scroll xuống để xem scroll-based animations và double circular reveal effect.
              Mỗi element sẽ animate khi vào viewport. Khi scroll hết, sẽ có 2 vòng tròn: phủ nội dung rồi reveal section mới.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={2} direction="right">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-2">Feature 1</h3>
                <p className="text-gray-300">Scroll-based reveal animations</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-2">Feature 2</h3>
                <p className="text-gray-300">Parallax scrolling effects</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-2">Feature 3</h3>
                <p className="text-gray-300">Double circular reveal</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ParallaxScroll speed={0.3}>
            <div className="bg-gradient-to-r from-[#4B2E83] to-[#D4AF37] p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Parallax Element</h3>
              <p>Element này di chuyển với tốc độ khác khi scroll</p>
            </div>
          </ParallaxScroll>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ScrollReveal delay={3} direction="up">
            <div className="text-center text-white">
              <p className="text-sm mb-2">Scroll xuống để xem double circular reveal</p>
              <div className="w-6 h-10 border-2 border-white rounded-full mx-auto">
                <div className="w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-bounce"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionTransition>

      {/* Section 3: Final section - Appears after Section 2 */}
      {currentSection >= 2 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="min-h-screen bg-gradient-to-br from-[#4B2E83] to-[#D4AF37] flex items-center justify-center text-white"
        >
          <div className="text-center max-w-4xl mx-auto px-6">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 font-['Playfair_Display']">
              Section 3
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Đây là section cuối cùng thể hiện toàn bộ flow. 
              Mỗi section transition tạo ra trải nghiệm độc đáo với màu sắc và animation khác nhau.
            </p>
            
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-[#4B2E83] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Về đầu trang
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
