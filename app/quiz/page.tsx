"use client";

import { motion } from "framer-motion";
import Header from "@/components/header";
import SidebarNav from "@/components/sidebar-nav";
import QuizGame from "@/components/quiz-game";
import Footer from "@/components/footer";

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      <Header />
      <div className="flex">
        <SidebarNav activeSection="quiz" />
        <main className="flex-1">
          {/* Hero Section with Asymmetric Layout */}
          <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Right side - Animated visual element (reversed) */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative h-96 hidden lg:block order-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-3xl blur-3xl" />
                  <div className="absolute inset-0 border border-indigo-500/30 rounded-3xl" />

                  {/* Quiz visualization */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <div className="text-center">
                      <motion.div
                        className="w-32 h-32 rounded-full border-4 border-indigo-500/50 flex items-center justify-center mx-auto mb-4"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <div className="text-4xl font-bold text-indigo-400">
                          ?
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-12 left-12 glass-dark p-4 rounded-xl"
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <p className="text-indigo-400 font-bold">100+ Câu hỏi</p>
                    <p className="text-gray-400 text-sm">Kiến thức toàn diện</p>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-12 right-12 glass-dark p-4 rounded-xl"
                    animate={{ y: [0, 15, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 0.5,
                    }}
                  >
                    <p className="text-violet-400 font-bold">Xếp hạng</p>
                    <p className="text-gray-400 text-sm">Cạnh tranh bạn bè</p>
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
                    <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/50 text-indigo-300 text-sm font-medium">
                      Trò chơi & Học tập
                    </span>
                  </motion.div>

                  <motion.h1
                    className="text-5xl md:text-6xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Câu đố
                    <br />
                    <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-600 bg-clip-text text-transparent">
                      Kiến thức
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-xl text-gray-300 leading-relaxed max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Kiểm tra kiến thức của bạn về cơ đồ, tiềm lực, vị thế và uy
                    tín quốc tế của Việt Nam qua các câu hỏi thú vị.
                  </motion.p>

                  <motion.div
                    className="flex gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50">
                      Bắt đầu ngay
                    </button>
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
                <QuizGame />
              </motion.div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
