"use client";

import { useEffect, useRef } from "react";

const TOTAL_FRAMES = 299;
const FRAME_PATH = (index: number) =>
  `/frames/main_${index.toString().padStart(3, "0")}.webp`;

// hệ số: bao nhiêu px scroll thì đi qua 1 frame
const SCROLL_PER_FRAME = 24; 

export default function VideoScrub() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);

  // preload ảnh
  useEffect(() => {
    const loadImages = async () => {
      const imgs: HTMLImageElement[] = [];
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = FRAME_PATH(i);
        imgs.push(img);
      }
      imagesRef.current = imgs;
    };
    loadImages();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    // Resize canvas full màn hình
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawFrame = (index: number) => {
      const img = imagesRef.current[index];
      if (!img) return;
      context.clearRect(0, 0, canvas.width, canvas.height);

      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = canvas.width / 2 - (img.width / 2) * scale;
      const y = canvas.height / 2 - (img.height / 2) * scale;

      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Mapping scroll -> targetFrame
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const progress = scrollTop / (TOTAL_FRAMES * SCROLL_PER_FRAME);

      targetFrameRef.current = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(progress * (TOTAL_FRAMES - 1))
      );
    };

    // Animation loop (mượt hóa)
    const animate = () => {
      const current = currentFrameRef.current;
      const target = targetFrameRef.current;

      const next = current + (target - current) * 0.1; 
      const frameIndex = Math.round(next);

      if (frameIndex !== current) {
        currentFrameRef.current = frameIndex;
        drawFrame(frameIndex);
      } else {
        currentFrameRef.current = next;
      }

      requestAnimationFrame(animate);
    };

    // Set chiều cao body dựa vào số frame
    document.body.style.height = `${TOTAL_FRAMES * SCROLL_PER_FRAME}px`;

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", handleScroll);
    resizeCanvas();
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
      />

      {/* Content overlay */}
      <section className="flex flex-col items-center justify-center text-white relative z-10 min-h-screen">
        <h1 className="text-6xl font-bold mb-20">Story World</h1>
        <p className="text-2xl">Scroll to explore smoothly...</p>
      </section>
    </main>
  );
}
