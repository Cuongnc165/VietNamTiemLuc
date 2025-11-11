import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Award, TrendingUp, Zap } from "lucide-react"

const rankings = [
  {
    title: "Thứ hạng Kinh tế Toàn cầu",
    value: "#33",
    description: "Trong 190 nước (IMF 2024)",
    icon: TrendingUp,
  },
  {
    title: "Chỉ số Đổi mới Sáng tạo",
    value: "#44",
    description: "GII 2024 (tăng 2 bậc so với 2023)",
    icon: Zap,
  },
  {
    title: "Chỉ số Quyền lực Châu Á",
    value: "#12",
    description: "Lowy Institute 2024",
    icon: Award,
  },
  {
    title: "Chỉ số Cạnh tranh Toàn cầu",
    value: "#65",
    description: "GCI (WEF 2024)",
    icon: Globe,
  },
]

const achievements = [
  {
    title: "Quan hệ Đối tác Chiến lược Toàn diện với Pháp",
    description: "Thiết lập tháng 10/2024 - Pháp là thành viên EU đầu tiên đạt cấp độ này với Việt Nam",
  },
  {
    title: "Thành viên CPTPP",
    description: "Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương (2019)",
  },
  {
    title: "Thành viên RCEP",
    description: "Khu vực Đối tác Kinh tế Toàn diện Khu vực (2022)",
  },
  {
    title: "Thành viên ASEAN",
    description: "Tổ chức Hiệp hội các quốc gia Đông Nam Á (1995)",
  },
  {
    title: "Quan hệ Chiến lược Toàn diện",
    description: "Với Mỹ, Nhật Bản, Hàn Quốc, Ấn Độ, Pháp, Đức, Anh, Canada",
  },
  {
    title: "Hội nhập Quốc tế",
    description: "Thành viên WTO (2007), APEC, ASEM, 15 Hiệp định thương mại tự do (FTA)",
  },
]

export default function InternationalPosition() {
  return (
    <section id="international" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🌍 Vị thế Quốc tế</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Việt Nam ngày càng được công nhận và tôn trọng trên trường quốc tế, với vị thế ngoại giao ngày càng tăng
            cường
            <br />
            <span className="text-sm text-primary font-semibold">Nguồn: Lowy Institute, WEF, WIPO, 2024-2025</span>
          </p>
        </div>

        {/* Rankings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {rankings.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
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

        {/* Achievements */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6">Thành tựu Ngoại giao & Hội nhập</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((item, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Diplomatic Relations */}
        <Card className="border-2 border-primary/20 mb-8">
          <CardHeader>
            <CardTitle>Quan hệ Ngoại giao Chiến lược</CardTitle>
            <CardDescription>Các đối tác chiến lược toàn diện của Việt Nam (8 quốc gia)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Mỹ", "Nhật Bản", "Hàn Quốc", "Ấn Độ", "Pháp", "Đức", "Anh", "Canada"].map((country) => (
                <div
                  key={country}
                  className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors"
                >
                  <p className="font-semibold text-primary">{country}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Innovation Achievements */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle>Thành tựu Đổi mới Sáng tạo 2024</CardTitle>
            <CardDescription>Việt Nam dẫn đầu thế giới ở 3 chỉ số quan trọng</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <p className="font-bold text-primary mb-2">🥇 Nhập khẩu công nghệ cao</p>
                <p className="text-sm text-muted-foreground">Xếp thứ 1 thế giới</p>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <p className="font-bold text-primary mb-2">🥇 Xuất khẩu công nghệ cao</p>
                <p className="text-sm text-muted-foreground">Xếp thứ 1 thế giới</p>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <p className="font-bold text-primary mb-2">🥇 Xuất khẩu hàng hóa sáng tạo</p>
                <p className="text-sm text-muted-foreground">Xếp thứ 1 thế giới</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
