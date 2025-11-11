import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, TrendingUp, Globe, Shield, Award, Zap } from "lucide-react"

const conclusions = [
  {
    icon: TrendingUp,
    title: "Tiềm lực Kinh tế Tăng vọt",
    description:
      "GDP tăng từ 93,1 tỷ USD (2010) lên 476,3 tỷ USD (2024), tăng 411% trong 14 năm. Tăng trưởng 7,09% năm 2024",
  },
  {
    icon: Globe,
    title: "Vị thế Quốc tế Nâng cao",
    description:
      "Xếp thứ 33 thế giới về GDP, thứ 44 về Đổi mới sáng tạo, thứ 12 về Quyền lực Châu Á. Thành viên 8 quan hệ Đối tác Chiến lược Toàn diện",
  },
  {
    icon: Shield,
    title: "Quốc phòng Hiện đại hóa",
    description:
      "Lực lượng quân sự 482.000 quân nhân, 5 triệu dự bị. Ký 16 hợp đồng quốc phòng trị giá 286 triệu USD năm 2024",
  },
  {
    icon: Award,
    title: "Uy tín Quốc tế Gia tăng",
    description:
      "Được công nhận là đối tác chiến lược của Mỹ, Nhật, Hàn, Ấn, Pháp, Đức. Tham gia tích cực các tổ chức quốc tế",
  },
  {
    icon: Zap,
    title: "Đổi mới Sáng tạo Dẫn đầu",
    description:
      "Dẫn đầu thế giới ở 3 chỉ số: nhập khẩu công nghệ cao, xuất khẩu công nghệ cao, xuất khẩu hàng hóa sáng tạo",
  },
  {
    icon: CheckCircle,
    title: "Thương mại Quốc tế Phát triển",
    description: "Xuất khẩu 405,53 tỷ USD (2024), tăng 14,3% so với 2023. Xuất siêu 24,77 tỷ USD - năm thứ 9 liên tiếp",
  },
]

export default function Conclusion() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">✅ Kết luận</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Nhận định của Tổng Bí thư Nguyễn Phú Trọng tại Đại hội XIII được chứng minh bằng dữ liệu thực tế từ các
            nguồn chính thống
            <br />
            <span className="text-sm text-primary-foreground/80">
              Nguồn: Cục Thống kê Việt Nam, Bộ Kế hoạch & Đầu tư, Bộ Quốc phòng, Lowy Institute, WEF, WIPO (2024-2025)
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {conclusions.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 text-sm">{item.title}</h4>
                      <p className="text-xs text-primary-foreground/80">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="bg-primary-foreground/10 border-primary-foreground/20 mb-8">
          <CardHeader>
            <CardTitle className="text-primary-foreground">Chứng minh Toàn diện - 4 Trụ cột</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-primary-foreground/90">
            <p className="font-semibold">
              Dữ liệu kinh tế, thống kê quốc tế, và các chỉ số phát triển đều chứng minh rằng Việt Nam đã đạt được những
              thành tựu chưa từng có:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-primary-foreground/5 rounded-lg p-4 border border-primary-foreground/20">
                <p className="font-bold mb-2">🏗️ CƠ ĐỒ</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Nền kinh tế lớn thứ 33 thế giới</li>
                  <li>✓ Hạ tầng phát triển, công nghiệp đa dạng</li>
                  <li>✓ 30.000+ doanh nghiệp FDI hoạt động</li>
                  <li>✓ Trung tâm sản xuất toàn cầu</li>
                </ul>
              </div>
              <div className="bg-primary-foreground/5 rounded-lg p-4 border border-primary-foreground/20">
                <p className="font-bold mb-2">💪 TIỀM LỰC</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Tăng trưởng GDP 7,09% năm 2024</li>
                  <li>✓ FDI giải ngân 25,35 tỷ USD (kỷ lục)</li>
                  <li>✓ Xuất khẩu 405,53 tỷ USD</li>
                  <li>✓ Lực lượng lao động trẻ, năng động</li>
                </ul>
              </div>
              <div className="bg-primary-foreground/5 rounded-lg p-4 border border-primary-foreground/20">
                <p className="font-bold mb-2">🌍 VỊ THẾ</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Thứ hạng kinh tế toàn cầu #33</li>
                  <li>✓ Thành viên 8 Đối tác Chiến lược Toàn diện</li>
                  <li>✓ Thành viên CPTPP, RCEP, ASEAN</li>
                  <li>✓ Tham gia 15 Hiệp định thương mại tự do</li>
                </ul>
              </div>
              <div className="bg-primary-foreground/5 rounded-lg p-4 border border-primary-foreground/20">
                <p className="font-bold mb-2">⭐ UY TÍN</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Được công nhận là đối tác chiến lược</li>
                  <li>✓ Dẫn đầu thế giới ở 3 chỉ số sáng tạo</li>
                  <li>✓ Quân đội hiện đại hóa, bảo vệ chủ quyền</li>
                  <li>✓ Tham gia tích cực các tổ chức quốc tế</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary-foreground/10 border-primary-foreground/20">
          <CardHeader>
            <CardTitle className="text-primary-foreground">Nhận định Lịch sử</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-primary-foreground/90">
            <p>
              <strong>Tổng Bí thư Nguyễn Phú Trọng tại Đại hội XIII (2021):</strong>
            </p>
            <p className="italic text-lg font-semibold text-accent">
              "Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay"
            </p>
            <p>
              Nhận định này hoàn toàn chính xác và được chứng minh bằng dữ liệu thực tế từ các nguồn chính thống quốc
              tế. Việt Nam đã đạt được những thành tựu kinh tế, ngoại giao, và quốc phòng chưa từng có trong lịch sử,
              khẳng định vị thế của mình trên trường quốc tế.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
