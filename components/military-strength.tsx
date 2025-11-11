import { CardDescription } from "@/components/ui/card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Zap, Anchor } from "lucide-react"

const militaryStats = [
  {
    title: "Quân nhân Hoạt động",
    value: "482,000",
    description: "Lực lượng quân sự chính quy",
    icon: Users,
  },
  {
    title: "Dự bị Quân sự",
    value: "5 Triệu",
    description: "Lực lượng dự bị được huấn luyện",
    icon: Shield,
  },
  {
    title: "Tàu Chiến",
    value: "100+",
    description: "Tàu chiến và tàu tuần tra",
    icon: Anchor,
  },
  {
    title: "Máy bay Quân sự",
    value: "200+",
    description: "Máy bay chiến đấu và vận tải",
    icon: Zap,
  },
]

const modernization = [
  {
    title: "Hiện đại hóa Quân đội 2024",
    items: [
      "Tàu Kilo-class (Tàu ngầm hiện đại)",
      "Máy bay Su-30MK2 (Chiến đấu cơ)",
      "Hệ thống Phòng không S-300",
      "Tàu Gepard-class (Tàu tuần dương)",
      "Đa dạng hóa nguồn cung vũ khí (Mỹ, Israel, Hà Lan, Hàn Quốc)",
    ],
  },
  {
    title: "Vũ khí 'Made in Vietnam' 2024",
    items: [
      "UAV (Máy bay không người lái) tiên tiến",
      "Radar phát hiện máy bay tàng hình",
      "Hệ thống phòng không hiện đại",
      "Xe chiến đấu bộ binh XCB-01",
      "Các thiết bị quân sự khác được phát triển trong nước",
    ],
  },
]

const defenseAchievements = [
  {
    title: "Triển lãm Quốc phòng Quốc tế 2024",
    stats: [
      { label: "Hợp đồng ký kết", value: "16" },
      { label: "Giá trị hợp đồng", value: "$286 triệu" },
      { label: "Thỏa thuận hợp tác", value: "17" },
    ],
  },
]

export default function MilitaryStrength() {
  return (
    <section id="military" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🛡️ Tiềm lực Quốc phòng</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Việt Nam liên tục hiện đại hóa lực lượng quân sự để bảo vệ chủ quyền và lãnh thổ
            <br />
            <span className="text-sm text-primary font-semibold">
              Nguồn: Bộ Quốc phòng, Triển lãm Quốc phòng Quốc tế 2024
            </span>
          </p>
        </div>

        {/* Military Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {militaryStats.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-primary mb-1">{item.value}</p>
                      <p className="font-semibold text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Modernization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {modernization.map((section, index) => (
            <Card key={index} className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Defense Expo 2024 Achievements */}
        <Card className="border-2 border-primary/20 mb-8">
          <CardHeader>
            <CardTitle>Triển lãm Quốc phòng Quốc tế 2024 - Thành tựu Nổi bật</CardTitle>
            <CardDescription>Diễn ra tại Hà Nội, tháng 12/2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <p className="text-3xl font-bold text-primary mb-2">16</p>
                <p className="text-sm font-semibold mb-1">Hợp đồng Quốc phòng</p>
                <p className="text-xs text-muted-foreground">Ký kết tại triển lãm</p>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <p className="text-3xl font-bold text-primary mb-2">$286M</p>
                <p className="text-sm font-semibold mb-1">Giá trị Hợp đồng</p>
                <p className="text-xs text-muted-foreground">Tổng giá trị các hợp đồng</p>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <p className="text-3xl font-bold text-primary mb-2">17</p>
                <p className="text-sm font-semibold mb-1">Thỏa thuận Hợp tác</p>
                <p className="text-xs text-muted-foreground">Với các công ty quốc phòng</p>
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                Triển lãm Quốc phòng Quốc tế 2024 là bằng chứng rõ ràng về sự hiện đại hóa quân đội Việt Nam, với sự
                tham gia của các nhà sản xuất vũ khí hàng đầu thế giới và các công ty quốc phòng từ nhiều quốc gia.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Defense Strategy */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle>Chiến lược Quốc phòng & Hiện đại hóa</CardTitle>
            <CardDescription>Mục tiêu đến năm 2030</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-sm">Hiện đại hóa Hải quân</p>
                  <p className="text-xs text-muted-foreground">
                    Tăng cường năng lực kiểm soát Biển Đông, mua sắm tàu chiến hiện đại
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-sm">Hiện đại hóa Không quân</p>
                  <p className="text-xs text-muted-foreground">
                    Nâng cấp máy bay chiến đấu, hệ thống phòng không, radar
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-sm">Đa dạng hóa Nguồn cung</p>
                  <p className="text-xs text-muted-foreground">
                    Mua sắm vũ khí từ Mỹ, Israel, Hà Lan, Hàn Quốc, không chỉ Nga
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-sm">Phát triển Công nghệ Quốc phòng</p>
                  <p className="text-xs text-muted-foreground">
                    Sản xuất vũ khí "Made in Vietnam", UAV, radar, hệ thống phòng không
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-sm">Ngân sách Quốc phòng</p>
                  <p className="text-xs text-muted-foreground">Khoảng 1 tỷ USD hàng năm cho hiện đại hóa quân sự</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-sm">Bảo vệ Chủ quyền</p>
                  <p className="text-xs text-muted-foreground">
                    Tăng cường năng lực bảo vệ lãnh thổ, lãnh hải, vùng đặc quyền kinh tế
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
