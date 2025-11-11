"use client";

import { motion } from "framer-motion";
import Header from "@/components/header";
import SidebarNav from "@/components/sidebar-nav";
import Footer from "@/components/footer";

export default function DashboardPage() {
  const averageScore = 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <Header />
      <div className="flex">
        <SidebarNav activeSection="dashboard" />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h1 className="text-5xl font-bold text-white mb-2">
                  Dashboard
                </h1>
                <p className="text-xl text-gray-400">
                  Khám phá thông tin chi tiết về Việt Nam
                </p>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  {
                    label: "Dân số",
                    value: "98 triệu",
                    color: "from-blue-500 to-cyan-500",
                    icon: "�",
                  },
                  {
                    label: "Diện tích",
                    value: "331,000 km²",
                    color: "from-purple-500 to-pink-500",
                    icon: "🗺️",
                  },
                  {
                    label: "Thủ đô",
                    value: "Hà Nội",
                    color: "from-emerald-500 to-teal-500",
                    icon: "🏛️",
                  },
                  {
                    label: "GDP",
                    value: "$429 tỷ",
                    color: "from-orange-500 to-red-500",
                    icon: "�",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-dark p-6 rounded-2xl border border-white/10"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{stat.icon}</span>
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.color} opacity-20`}
                      />
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                    <p
                      className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="glass-dark p-8 rounded-2xl border border-white/10"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Thông tin nổi bật
                </h2>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0 * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all"
                  >
                    <span className="text-gray-300">
                      Vị trí địa lý: Đông Nam Á
                    </span>
                    <span className="text-blue-400 text-sm">✓</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1 * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all"
                  >
                    <span className="text-gray-300">
                      Nền kinh tế: Đang phát triển nhanh
                    </span>
                    <span className="text-blue-400 text-sm">✓</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 2 * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all"
                  >
                    <span className="text-gray-300">
                      Quân sự: Lực lượng trang bị hiện đại
                    </span>
                    <span className="text-blue-400 text-sm">✓</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12 flex gap-4 flex-wrap"
              >
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                  Làm bài quiz
                </button>
                <button className="px-8 py-3 border border-blue-500/50 text-blue-300 hover:bg-blue-500/10 rounded-lg font-semibold transition-all duration-300">
                  Xem tất cả section
                </button>
              </motion.div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
