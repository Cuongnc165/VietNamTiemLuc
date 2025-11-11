"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  TrendingUp,
  Globe,
  Shield,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    id: "home",
    label: "Trang chủ",
    icon: <TrendingUp size={20} />,
    description: "Tổng quan",
    href: "/",
  },
  {
    id: "economic",
    label: "Tiềm lực Kinh tế",
    icon: <TrendingUp size={20} />,
    description: "GDP, FDI, Xuất khẩu",
    href: "/economic",
  },
  {
    id: "international",
    label: "Vị thế Quốc tế",
    icon: <Globe size={20} />,
    description: "Xếp hạng, Ngoại giao",
    href: "/international",
  },
  {
    id: "military",
    label: "Quốc phòng",
    icon: <Shield size={20} />,
    description: "Lực lượng, Hiện đại hóa",
    href: "/military",
  },
  {
    id: "quiz",
    label: "Câu đố Kiến thức",
    icon: <CheckCircle size={20} />,
    description: "Kiểm tra kiến thức",
    href: "/quiz",
  },
];

interface SidebarNavProps {
  activeSection?: string;
}

export default function SidebarNav({ activeSection }: SidebarNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-40 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-16 left-0 h-screen w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-blue-500/20 overflow-y-auto transition-transform duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-6"
          >
            Nội dung chính
          </motion.h2>
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-start gap-3 p-3 rounded-lg transition-all group relative overflow-hidden ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50"
                      : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}

                  <div
                    className={`mt-0.5 flex-shrink-0 relative z-10 ${
                      activeSection === item.id
                        ? "text-blue-200"
                        : "text-slate-400 group-hover:text-blue-400"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0 relative z-10">
                    <p
                      className={`font-semibold text-sm ${
                        activeSection === item.id
                          ? "text-white"
                          : "text-slate-200"
                      }`}
                    >
                      {item.label}
                    </p>
                    <p
                      className={`text-xs ${
                        activeSection === item.id
                          ? "text-blue-100"
                          : "text-slate-400"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                  {activeSection === item.id && (
                    <ChevronRight
                      size={16}
                      className="mt-0.5 flex-shrink-0 relative z-10"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
