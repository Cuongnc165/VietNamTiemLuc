"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import SidebarNav from "@/components/sidebar-nav"
import EconomicStats from "@/components/economic-stats"
import ComparisonTool from "@/components/comparison-tool"
import Footer from "@/components/footer"

export default function EconomicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <Header />
      <div className="flex">
        <SidebarNav activeSection="economic" />
        <main className="flex-1">
          {/* Hero Section with Asymmetric Layout */}
          <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Text with animations */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-sm font-medium">
                      Kinh tế Việt Nam
                    </span>
                  </motion.div>

                  <motion.h1
                    className="text-5xl md:text-6xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Tiềm lực
                    <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-600 bg-clip-text text-transparent">
                      Kinh tế
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-xl text-gray-300 leading-relaxed max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Phân tích chi tiết về sức mạnh kinh tế của Việt Nam qua các chỉ số GDP, FDI, xuất khẩu và tăng
                    trưởng bền vững.
                  </motion.p>

                  <motion.div
                    className="flex gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="glass-dark px-6 py-3 rounded-lg">
                      <p className="text-emerald-400 font-bold text-2xl">476.3B</p>
                      <p className="text-gray-400 text-sm">GDP 2024 (USD)</p>
                    </div>
                    <div className="glass-dark px-6 py-3 rounded-lg">
                      <p className="text-cyan-400 font-bold text-2xl">7.09%</p>
                      <p className="text-gray-400 text-sm">Tăng trưởng</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right side - Animated visual element */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-96 hidden lg:block"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
                  <div className="absolute inset-0 border border-emerald-500/30 rounded-3xl" />

                  {/* Floating cards */}
                  <motion.div
                    className="absolute top-8 left-8 glass-dark p-6 rounded-2xl w-48"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <p className="text-emerald-400 font-bold text-lg">405.53B USD</p>
                    <p className="text-gray-400 text-sm">Xuất khẩu 2024</p>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-8 right-8 glass-dark p-6 rounded-2xl w-48"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  >
                    <p className="text-cyan-400 font-bold text-lg">38.23B USD</p>
                    <p className="text-gray-400 text-sm">FDI đăng ký</p>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 right-12 w-24 h-24 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <EconomicStats />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ComparisonTool />
              </motion.div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}
