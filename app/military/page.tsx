"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import SidebarNav from "@/components/sidebar-nav"
import MilitaryStrength from "@/components/military-strength"
import Footer from "@/components/footer"

export default function MilitaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-slate-950">
      <Header />
      <div className="flex">
        <SidebarNav activeSection="military" />
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
                    <span className="inline-block px-4 py-2 rounded-full bg-red-500/20 border border-red-500/50 text-red-300 text-sm font-medium">
                      Quốc phòng & An ninh
                    </span>
                  </motion.div>

                  <motion.h1
                    className="text-5xl md:text-6xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Năng lực
                    <br />
                    <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-600 bg-clip-text text-transparent">
                      Quốc phòng
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-xl text-gray-300 leading-relaxed max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Lực lượng vũ trang hiện đại, chiến lược quốc phòng, và năng lực bảo vệ chủ quyền quốc gia.
                  </motion.p>

                  <motion.div
                    className="flex gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="glass-dark px-6 py-3 rounded-lg">
                      <p className="text-red-400 font-bold text-2xl">1B USD</p>
                      <p className="text-gray-400 text-sm">Ngân sách hàng năm</p>
                    </div>
                    <div className="glass-dark px-6 py-3 rounded-lg">
                      <p className="text-orange-400 font-bold text-2xl">286M USD</p>
                      <p className="text-gray-400 text-sm">Hợp đồng 2024</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right side - Animated military visualization */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-96 hidden lg:block"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-3xl" />
                  <div className="absolute inset-0 border border-red-500/30 rounded-3xl" />

                  {/* Animated military elements */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-red-500/30 rounded-lg"
                    animate={{ rotate: 45, scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  />

                  <motion.div
                    className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-orange-500/30 rounded-full"
                    animate={{ rotate: -45, scale: [1, 1.15, 1] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                  />

                  <motion.div
                    className="absolute top-8 right-8 glass-dark p-4 rounded-xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <p className="text-red-400 font-bold">Hiện đại hóa</p>
                    <p className="text-gray-400 text-sm">Vũ khí Made in VN</p>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-8 left-8 glass-dark p-4 rounded-xl"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  >
                    <p className="text-orange-400 font-bold">16 Hợp đồng</p>
                    <p className="text-gray-400 text-sm">Triển lãm 2024</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <MilitaryStrength />
              </motion.div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}
