"use client";

import { motion } from "framer-motion";
import Header from "@/components/header";
import SidebarNav from "@/components/sidebar-nav";
import InternationalPosition from "@/components/international-position";
import Footer from "@/components/footer";

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
                    transition={{
                      duration: 30,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <div className="w-64 h-64 border-2 border-purple-500/30 rounded-full" />
                  </motion.div>

                  <motion.div
                    className="absolute top-12 left-12 glass-dark p-4 rounded-xl"
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <p className="text-purple-400 font-bold">Xếp hạng 44</p>
                    <p className="text-gray-400 text-sm">GII 2024</p>
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
                    <p className="text-pink-400 font-bold">Đối tác 8</p>
                    <p className="text-gray-400 text-sm">
                      Chiến lược toàn diện
                    </p>
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
                    Xếp hạng toàn cầu, quan hệ ngoại giao chiến lược, và uy tín
                    quốc tế của Việt Nam trên trường quốc tế.
                  </motion.p>

                  <motion.div
                    className="flex gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="glass-dark px-6 py-3 rounded-lg">
                      <p className="text-purple-400 font-bold text-2xl">
                        12/27
                      </p>
                      <p className="text-gray-400 text-sm">Quyền lực châu Á</p>
                    </div>
                    <div className="glass-dark px-6 py-3 rounded-lg">
                      <p className="text-pink-400 font-bold text-2xl">8</p>
                      <p className="text-gray-400 text-sm">
                        Đối tác chiến lược
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 text-gray-200 space-y-32 max-w-6xl mx-auto">
            {/* ===== PHẦN 1: VỊ THẾ ÂM ===== */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-red-400">
                PHẦN 1️⃣: Giai đoạn "Vị thế âm" - Bị cô lập (1979-1990)
              </h2>
              <p className="leading-relaxed text-lg">
                Điều này khá khó tin nhưng thực sự đã có lúc "vị thế" của Việt
                Nam ở mức "âm".
                <br />
                <br />
                Sau năm 1979, do vấn đề Campuchia và bối cảnh Chiến tranh Lạnh,
                Việt Nam rơi vào tình trạng bị "bao vây cấm vận" toàn diện.
                Chúng ta bị cô lập về kinh tế, chính trị và ngoại giao. Các nước
                láng giềng ASEAN khi đó thậm chí còn coi chúng ta là "mối đe
                dọa" an ninh khu vực.
                <br />
                <br />
                Minh chứng cay đắng nhất cho "vị thế âm" của chúng ta lúc bấy
                giờ là tại Liên Hợp Quốc. Dù chúng ta đã đưa quân sang lật đổ
                chế độ diệt chủng Pol Pot, nhưng cộng đồng quốc tế, vì lý do
                địa-chính trị, lại bỏ phiếu công nhận ghế đại diện của... Khmer
                Đỏ. Mọi tiếng nói chính nghĩa của Việt Nam đều bị bác bỏ. Vị thế
                của chúng ta lúc này là vị thế của một quốc gia bị cô lập.
              </p>
            </motion.div>

            {/* ===== PHẦN 2: PHÁ THẾ & TẠO DỰNG NỀN TẢNG ===== */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-yellow-400">
                PHẦN 2️⃣: Giai đoạn "Phá thế" và Tạo dựng nền tảng (1991-2007)
              </h2>
              <img
                src="/hanhtrinh.jpg"
                alt="Việt Nam"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
              <p className="leading-relaxed text-lg">
                Từ tình thế bị cô lập đó, Đảng ta đã có một bước chuyển chiến
                lược. Bắt đầu từ tư duy "thêm bạn bớt thù" của Nghị quyết 13 Bộ
                Chính trị (1988), và được chính thức hóa tại Đại hội VII (1991),
                Đảng ta đã khẳng định đường lối đối ngoại: "Việt Nam muốn là bạn
                với tất cả các nước", thực hiện "đa dạng hóa, đa phương hóa"
                quan hệ.
                <br />
                <br />
                Chúng ta đã thực hiện một loạt bước đi ngoại giao chiến lược để
                "phá băng" và tham gia vào các "sân chơi" lớn.
                <br />
                <br />
                <strong>Năm 1991:</strong> Chúng ta bình thường hóa quan hệ với
                Trung Quốc, giải tỏa áp lực an ninh lớn nhất.
                <br />
                <strong>Năm 1995:</strong> Đây là một năm "bản lề" then chốt.
                Tháng 7 năm 1995, chúng ta vừa chính thức gia nhập ASEAN – biến
                các nước láng giềng từ "đối đầu" thành "đối tác" – vừa bình
                thường hóa quan hệ ngoại giao với Hoa Kỳ, khép lại hoàn toàn quá
                khứ chiến tranh và phá vỡ thế cấm vận.
                <br />
                <strong>Năm 1998:</strong> Chúng ta tiếp tục gia nhập APEC, vươn
                ra vành đai kinh tế năng động Châu Á - Thái Bình Dương.
                <br />
                <strong>Năm 2007:</strong> Việt Nam chính thức trở thành thành
                viên thứ 150 của WTO, chấp nhận hoàn toàn "luật chơi" chung của
                toàn cầu.
                <br />
                <br />
                Như vậy, chỉ trong 15 năm, từ một quốc gia bị cô lập, Việt Nam
                đã trở thành một thành viên đầy đủ, bình đẳng của cộng đồng quốc
                tế.
              </p>
            </motion.div>

            {/* ===== PHẦN 3: KHẲNG ĐỊNH VỊ THẾ ===== */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-emerald-400">
                PHẦN 3️⃣: Giai đoạn "Khẳng định vị thế" (2007 - Nay)
              </h2>

              <p className="leading-relaxed text-lg">
                Nếu giai đoạn 2 là "tham gia", thì giai đoạn 3 (từ 2007 đến nay,
                và đặc biệt là đến năm 2025) là giai đoạn Việt Nam "chủ động
                đóng góp", "kiến tạo luật chơi" và khẳng định vị thế "đối tác
                tin cậy".
              </p>

              <p className="leading-relaxed text-lg">
                Điều này được thể hiện rõ qua 4 trụ cột vị thế sau:
              </p>

              <p className="leading-relaxed text-lg">
                <strong>Thứ nhất, Vị thế trong quan hệ Song phương:</strong>
                <br />
                Đây là minh chứng phi thường nhất. Tính đến tháng 11 năm 2025,
                Việt Nam đã thiết lập quan hệ Đối tác Chiến lược Toàn diện (cấp
                độ cao nhất) với 14 quốc gia.
                <br />
                Một là, Việt Nam đã HOÀN TẤT việc thiết lập quan hệ cấp cao nhất
                với TẤT CẢ 5 nước Ủy viên Thường trực HĐBA LHQ: Trung Quốc, Nga,
                Hoa Kỳ, Pháp và Vương Quốc Anh (tháng 10/2025).
                <br />
                Hai là, tạo ra mạng lưới quan hệ sâu rộng với tất cả các cường
                quốc G7, G20 và láng giềng quan trọng. Năm 2025, nâng cấp quan
                hệ ĐTCLTT với New Zealand, Indonesia, Singapore, Thái Lan.
              </p>

              {/* ✅ Đưa ảnh ra ngoài p */}

              <img
                src="/14nuoc.jpg"
                alt="Việt Nam"
                className="rounded-2xl shadow-lg w-full object-cover"
              />

              <p className="leading-relaxed text-lg">
                <strong>Thứ hai, Vị thế tại các Diễn đàn Đa phương:</strong>
                <br />
                Nếu thập niên 80 thất bại tại LHQ, giờ đây vị thế được đo bằng
                tín nhiệm tuyệt đối:
                <br />
                - HĐBA 2020-2021: trúng cử 192/193 phiếu.
                <br />
                - Hội đồng Nhân quyền 2026-2028: đắc cử 180 phiếu.
                <br />
                - Ủy ban luật pháp quốc tế 2023-2027: tái đắc cử 145/193, đứng
                thứ 4 khu vực.
                <br />
                Việt Nam chủ trì Nghị quyết 2573 HĐBA về bảo vệ hạ tầng thiết
                yếu trong xung đột.
                <br />
                Tại ASEAN, vai trò "trụ cột", Chủ tịch ASEAN 2020 dẫn dắt khối
                vượt đại dịch, ký RCEP.
              </p>
              <img
                src="/vithe.jpg"
                alt="Việt Nam"
                className="rounded-2xl shadow-lg w-full object-cover"
              />

              <p className="leading-relaxed text-lg">
                <strong>Thứ ba, Vị thế Kinh tế:</strong>
                <br />
                Chủ động tham gia đàm phán và kiến tạo FTA thế hệ mới, tiêu
                chuẩn cao như CPTPP và EVFTA. Vị thế kinh tế vững chắc, là mắt
                xích quan trọng trong chuỗi cung ứng toàn cầu.
              </p>

              <p className="leading-relaxed text-lg">
                <strong>Thứ tư, Vị thế An ninh:</strong>
                <br />
                Từ quốc gia bị chiến tranh tàn phá, Việt Nam trở thành thành
                viên có trách nhiệm, đóng góp hòa bình toàn cầu.
                <br />
                Từ 2014, cử lực lượng Gìn giữ Hòa bình: Bệnh viện Dã chiến cấp 2
                (Nam Sudan), Đội Công binh (Abyei). LHQ đánh giá "hoàn thành
                xuất sắc nhiệm vụ", biểu tượng trách nhiệm quốc tế Việt Nam.
              </p>
            </motion.div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
