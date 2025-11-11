"use client"

import { Card, CardContent } from "@/components/ui/card"

const videos = [
  {
    title: "Kinh tế Việt Nam Phát triển",
    description: "Tổng quan về tăng trưởng kinh tế",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Vị thế Quốc tế Việt Nam",
    description: "Vai trò của Việt Nam trên trường quốc tế",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Quân đội Việt Nam Hiện đại",
    description: "Lực lượng quân sự hiện đại hóa",
    videoId: "dQw4w9WgXcQ",
  },
]

const images = [
  {
    title: "Thành phố Hồ Chí Minh - Trung tâm Kinh tế",
    description: "Tòa nhà cao tầng và phát triển đô thị",
    query: "Ho Chi Minh City skyline modern buildings",
  },
  {
    title: "Cảng Hải Phòng - Cửa ngõ Thương mại",
    description: "Cảng biển quốc tế lớn nhất",
    query: "Hai Phong port Vietnam international trade",
  },
  {
    title: "Công nghiệp Điện tử - Xuất khẩu Chính",
    description: "Nhà máy sản xuất công nghệ",
    query: "Vietnam electronics manufacturing factory",
  },
  {
    title: "Nông nghiệp Hiện đại",
    description: "Nông sản xuất khẩu chính",
    query: "Vietnam modern agriculture farming",
  },
]

export default function MediaSection() {
  return (
    <section id="media" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">📹 Hình ảnh & Video Trực quan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá sự phát triển của Việt Nam qua hình ảnh và video
          </p>
        </div>

        {/* Videos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Video Tài liệu</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative bg-black aspect-video flex items-center justify-center group cursor-pointer">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <CardContent className="pt-4">
                  <h4 className="font-semibold mb-2">{video.title}</h4>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Images */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Hình ảnh Minh họa</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative bg-muted aspect-video">
                  <img
                    src={`/.jpg?height=300&width=500&query=${encodeURIComponent(image.query)}`}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <h4 className="font-semibold mb-2">{image.title}</h4>
                  <p className="text-sm text-muted-foreground">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
