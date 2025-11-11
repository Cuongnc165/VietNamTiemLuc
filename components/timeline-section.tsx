import { Card, CardContent } from "@/components/ui/card"

const timelineEvents = [
  {
    year: "2010",
    title: "Khởi đầu Tăng trưởng",
    description: "GDP: $93 tỷ USD, Bắt đầu hội nhập kinh tế toàn cầu",
    color: "bg-blue-100",
    borderColor: "border-blue-500",
  },
  {
    year: "2015",
    title: "Gia nhập TPP",
    description: "Thành viên Hiệp định Đối tác Xuyên Thái Bình Dương",
    color: "bg-blue-200",
    borderColor: "border-blue-600",
  },
  {
    year: "2019",
    title: "CPTPP Có hiệu lực",
    description: "Mở rộng thị trường, tăng cường hội nhập quốc tế",
    color: "bg-blue-300",
    borderColor: "border-blue-700",
  },
  {
    year: "2022",
    title: "Gia nhập RCEP",
    description: "Khu vực Đối tác Kinh tế Toàn diện Khu vực",
    color: "bg-blue-400",
    borderColor: "border-blue-800",
  },
  {
    year: "2024",
    title: "Đạt Mục tiêu",
    description: "GDP: $430 tỷ USD, Thứ 27 thế giới, Đối tác chiến lược",
    color: "bg-blue-500",
    borderColor: "border-blue-900",
  },
]

export default function TimelineSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hành trình Phát triển Việt Nam</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Những cột mốc quan trọng trong sự phát triển kinh tế và hội nhập quốc tế
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-blue-500 to-blue-800"></div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Content */}
                <div className="flex-1 md:px-8">
                  <Card className={`${event.color} border-2 ${event.borderColor}`}>
                    <CardContent className="pt-6">
                      <div className="text-sm font-bold text-slate-600 mb-2">{event.year}</div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{event.title}</h3>
                      <p className="text-sm text-slate-700">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex justify-center">
                  <div className="w-6 h-6 bg-white border-4 border-blue-600 rounded-full"></div>
                </div>

                {/* Spacer */}
                <div className="flex-1 md:px-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
