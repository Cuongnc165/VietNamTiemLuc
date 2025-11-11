export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Về Website</h3>
            <p className="text-sm text-primary-foreground/80">
              Phân tích toàn diện về cơ đồ, tiềm lực, vị thế và uy tín quốc tế của Việt Nam dựa trên dữ liệu thực tế.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Nguồn Dữ liệu</h3>
            <ul className="text-sm text-primary-foreground/80 space-y-2">
              <li>• IMF - Quỹ Tiền tệ Quốc tế</li>
              <li>• World Bank - Ngân hàng Thế giới</li>
              <li>• WEF - Diễn đàn Kinh tế Thế giới</li>
              <li>• UNDP - Chương trình Phát triển Liên Hợp Quốc</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Liên hệ</h3>
            <p className="text-sm text-primary-foreground/80">
              Để biết thêm thông tin về phân tích này, vui lòng liên hệ với chúng tôi.
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2025 Phân tích Việt Nam. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
