import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Briefcase, Zap, Target } from "lucide-react"

const highlights = [
  {
    icon: Award,
    title: "Thứ hạng Kinh tế",
    items: ["#27 Toàn cầu", "#1 Tăng trưởng ĐNA", "#2 Xuất khẩu ĐNA"],
  },
  {
    icon: Briefcase,
    title: "Đối tác Chiến lược",
    items: ["Mỹ", "Nhật Bản", "Hàn Quốc", "Ấn Độ", "Pháp", "Đức"],
  },
  {
    icon: Zap,
    title: "Ngành Chính",
    items: ["Điện tử (22%)", "Dệu may (18%)", "Nông sản (15%)"],
  },
  {
    icon: Target,
    title: "Hiệp định Quốc tế",
    items: ["CPTPP", "RCEP", "ASEAN", "WTO"],
  },
]

export default function HighlightsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Điểm Nổi bật</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Những thành tựu và vị thế nổi bật của Việt Nam trên trường quốc tế
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-6 h-6 text-primary" />
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {highlight.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
