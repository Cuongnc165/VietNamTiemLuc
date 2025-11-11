export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 md:py-32"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6">
          <div className="inline-block bg-blue-500/30 backdrop-blur-sm border border-blue-400/50 rounded-full px-4 py-2 mb-4">
            <p className="text-sm font-semibold text-blue-100">Phân tích Toàn diện</p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Việt Nam: Cơ đồ, Tiềm lực, Vị thế và Uy tín Quốc tế
          </h2>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto text-balance">
            Nhận định của Tổng Bí thư Nguyễn Phú Trọng tại Đại hội XIII:
          </p>

          <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/50 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl italic font-semibold text-blue-50">
              "Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay"
            </p>
          </div>

          <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
            Chứng minh bằng dữ liệu kinh tế, thống kê quốc tế, và các chỉ số phát triển
          </p>
        </div>
      </div>
    </section>
  )
}
