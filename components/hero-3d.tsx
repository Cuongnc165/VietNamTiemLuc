"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;

      // Clear canvas with gradient
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "rgba(15, 23, 42, 0.95)");
      gradient.addColorStop(1, "rgba(30, 41, 59, 0.95)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw animated particles
      for (let i = 0; i < 50; i++) {
        const x =
          (Math.sin(time * 0.5 + i) * canvas.width) / 2 + canvas.width / 2;
        const y =
          (Math.cos(time * 0.3 + i * 0.5) * canvas.height) / 2 +
          canvas.height / 2;
        const size = Math.sin(time + i) * 2 + 3;

        ctx.fillStyle = `rgba(59, 130, 246, ${0.3 + Math.sin(time + i) * 0.2})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw connecting lines
      ctx.strokeStyle = "rgba(59, 130, 246, 0.1)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 30; i++) {
        const x1 =
          (Math.sin(time * 0.3 + i) * canvas.width) / 2 + canvas.width / 2;
        const y1 =
          (Math.cos(time * 0.2 + i * 0.7) * canvas.height) / 2 +
          canvas.height / 2;
        const x2 =
          (Math.sin(time * 0.3 + i + 1) * canvas.width) / 2 + canvas.width / 2;
        const y2 =
          (Math.cos(time * 0.2 + (i + 1) * 0.7) * canvas.height) / 2 +
          canvas.height / 2;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-950">
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="absolute inset-0 flex items-center justify-between px-8 md:px-16">
        {/* Left side - Text content */}
        <motion.div
          className="z-10 max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 text-sm font-medium">
              Phân tích Toàn diện
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            VIỆT NAM:
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              TIỀM LỰC & VỊ THẾ & UY TÍN
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Khám phá dữ liệu chính xác về vị thế quốc tế, tiềm lực kinh tế và uy
            tín của Việt Nam trên trường quốc tế.
          </motion.p>
        </motion.div>

        {/* Right side - Animated 3D elements */}
        <motion.div
          className="hidden lg:flex items-center justify-center flex-1 h-full relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-96 h-96">
            {/* Rotating rings */}
            <motion.div
              className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute inset-8 border-2 border-cyan-500/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute inset-16 border-2 border-blue-600/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Center glowing element */}
            <motion.div
              className="absolute inset-1/3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-blue-400 rounded-full"
                animate={{
                  x: Math.cos((i / 6) * Math.PI * 2) * 150,
                  y: Math.sin((i / 6) * Math.PI * 2) * 150,
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{
                  left: "50%",
                  top: "50%",
                  marginLeft: "-6px",
                  marginTop: "-6px",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-blue-400 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </div>
  );
}
