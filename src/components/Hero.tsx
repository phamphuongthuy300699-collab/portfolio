"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { ArrowRight, MessageSquare } from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import the 3D Scene with disabled SSR for FCP/LCP optimization
const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-black/10 dark:border-white/10 border-t-black dark:border-t-white rounded-full animate-spin" />
    </div>
  )
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--foreground)] opacity-[0.03] rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-6 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Доступен для B2B проектов
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Цифровые решения, которые{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-900 dark:from-gray-300 dark:to-white">
              увеличивают средний чек
            </span>
          </h1>

          <p className="text-xl opacity-80 leading-relaxed">
            PWA, доставка, автоматизация HoReCa. Разработка премиальных IT-продуктов с глубоким пониманием бизнес-процессов ресторанов и кальянных.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a href="#showroom" className="group flex items-center gap-2 px-6 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-2xl font-semibold hover:scale-105 transition-transform active:scale-95 shadow-xl">
              Смотреть проекты
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="#contact" className="group flex items-center gap-2 px-6 py-4 glass-card rounded-2xl font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-colors active:scale-95">
              <MessageSquare className="w-5 h-5" />
              Обсудить проект
            </a>
          </div>

          {/* Hand-drawn arrow indication (Human-centric) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="hidden sm:block absolute -bottom-10 right-1/4 opacity-40 rotate-12"
          >
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10,90 Q50,90 90,10" fill="none" />
              <path d="M70,10 L90,10 L90,30" fill="none" />
            </svg>
          </motion.div>
        </motion.div>

        {/* 3D Model Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[600px] w-full relative cursor-grab active:cursor-grabbing"
        >
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <Environment preset="city" />
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>

          {/* Tooltip for 3D */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono opacity-50 flex items-center gap-2">
            <span>[Зажмите и потяните для вращения]</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
