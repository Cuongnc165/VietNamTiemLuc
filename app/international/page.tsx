"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import SidebarNav from "@/components/sidebar-nav"
import InternationalPosition from "@/components/international-position"
import Footer from "@/components/footer"

export default function InternationalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <Header />
      <div className="flex">
        <SidebarNav activeSection="international" />
        <main className="flex-1">
          {/* Hero Section with Asymmetric Layout */}
          <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Right side - Animated visual element (reversed order) */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative h-96 hidden lg:block order-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
                  <div className="absolute inset-0 border border-purple-500/30 rounded-3xl" />

                  {/* Floating world map visualization */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <div className="w-64 h-64 border-2 border-purple-500/30 rounded-full" />
                  </motion.div>

                  <motion.div
                    className="absolute top-12 left-12 glass-dark p-4 rounded-xl"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <p className="text-purple-400 font-bold">Xếp hạng 44</p>
                    <p className="text-gray-400 text-sm">GII 2024</p>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-12 right-12 glass-dark p-4 rounded-xl"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  >
                    <p className="text-pink-400 font-bold">Đối tác 8</p>
                    <p className="text-gray-400 text-sm">Chiến lược toàn diện</p>
                  </motion.div>
                </motion.div>

                {/* Left side - Text with animations */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6 order-1"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-300 text-sm font-medium">
                      Ngoại giao & Quan hệ
                    </span>
                  </motion.div>

                  <motion.h1
                    className="text-5xl md:text-6xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Vị thế
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                      Quốc tế
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-xl text-gray-300 leading-relaxed max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Xếp hạng toàn cầu, quan hệ ngoại giao chiến lược, và uy tín quốc tế của Việt Nam trên trường quốc
                    tế.
                  </motion.p>

                  <motion.div
                    className="flex gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="glass-dark px-6 py-3 rounded-lg">
                      <p className="text-purple-400 font-bold text-2xl">12/27</p>
                      <p className="text-gray-400 text-sm">Quyền lực châu Á</p>
                    </div>
                    <div className="glass-dark px-6 py-3 rounded-lg">
                      <p className="text-pink-400 font-bold text-2xl">8</p>
                      <p className="text-gray-400 text-sm">Đối tác chiến lược</p>
                    </div>
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
                <InternationalPosition />
              </motion.div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}
