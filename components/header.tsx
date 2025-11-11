"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Kinh tế", href: "/economic" },
    { label: "Ngoại giao", href: "/international" },
    { label: "Quốc phòng", href: "/military" },
    { label: "Câu đố", href: "/quiz" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 border-b border-blue-500/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                <span className="text-white font-bold text-lg">VN</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-white">
                  Việt Nam Hôm Nay
                </h1>
                <p className="text-xs text-blue-300">
                  TIỀM LỰC & VỊ THẾ & UY TÍN
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-blue-300 hover:bg-blue-500/10 rounded-md transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side - Auth buttons */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 hover:bg-blue-500/10 rounded-md transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X size={24} className="text-white" />
                ) : (
                  <Menu size={24} className="text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <nav className="lg:hidden pb-4 flex flex-col gap-2 border-t border-blue-500/20">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-blue-300 hover:bg-blue-500/10 rounded-md transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
