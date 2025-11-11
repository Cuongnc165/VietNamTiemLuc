"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

const gdpData = [
  { year: 2010, gdp: 93.1, growth: 6.4 },
  { year: 2012, gdp: 135.6, growth: 5.2 },
  { year: 2014, gdp: 178.1, growth: 6.0 },
  { year: 2016, gdp: 205.3, growth: 6.2 },
  { year: 2018, gdp: 245.2, growth: 7.1 },
  { year: 2020, gdp: 261.9, growth: 2.9 },
  { year: 2022, gdp: 362.6, growth: 8.0 },
  { year: 2024, gdp: 476.3, growth: 7.09 },
]

const fdiSectorData = [
  { year: 2010, manufacturing: 4.2, tech: 1.5, real_estate: 1.2, other: 0.7 },
  { year: 2015, manufacturing: 6.8, tech: 2.5, real_estate: 2.0, other: 1.2 },
  { year: 2020, manufacturing: 8.5, tech: 4.0, real_estate: 2.5, other: 1.0 },
  { year: 2024, manufacturing: 25.58, tech: 6.5, real_estate: 3.0, other: 3.15 },
]

const fdiData = [
  { year: 2010, fdi: 7.6 },
  { year: 2012, fdi: 8.5 },
  { year: 2014, fdi: 12.0 },
  { year: 2016, fdi: 15.5 },
  { year: 2018, fdi: 18.0 },
  { year: 2020, fdi: 16.0 },
  { year: 2022, fdi: 19.2 },
  { year: 2024, fdi: 25.35 },
]

const exportData = [
  { name: "Điện tử & Máy tính", value: 17.9 },
  { name: "Điện thoại & Linh kiện", value: 13.3 },
  { name: "Máy móc & Thiết bị", value: 12.9 },
  { name: "Dệu may", value: 9.1 },
  { name: "Giày dép", value: 5.6 },
  { name: "Gỗ & Sản phẩm gỗ", value: 4.0 },
  { name: "Khác", value: 20.2 },
]

const tradePartnersData = [
  { country: "Mỹ", export: 120, import: 25 },
  { country: "Trung Quốc", export: 45, import: 85 },
  { country: "EU", export: 65, import: 35 },
  { country: "Nhật Bản", export: 35, import: 28 },
  { country: "Hàn Quốc", export: 28, import: 32 },
]

const COLORS = ["#1e40af", "#2563eb", "#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe", "#dbeafe"]

export default function EconomicStats() {
  const [selectedYear, setSelectedYear] = useState(2024)

  return (
    <section id="economic" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tiềm lực Kinh tế</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Việt Nam đã trở thành một trong những nền kinh tế tăng trưởng nhanh nhất thế giới với GDP tăng từ 93,1 tỷ
            USD (2010) lên 476,3 tỷ USD (2024) - tăng 411% trong 14 năm
            <br />
            <span className="text-sm text-primary font-semibold">Nguồn: Cục Thống kê Việt Nam, 2025</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* GDP Growth */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle>GDP Tăng trưởng (Tỷ USD)</CardTitle>
              <CardDescription>2010 - 2024: Tăng 411% trong 14 năm | Tăng trưởng 2024: 7,09%</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={gdpData}>
                  <defs>
                    <linearGradient id="colorGdp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1e40af" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#1e40af" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value.toFixed(1)} tỷ USD`} />
                  <Area
                    type="monotone"
                    dataKey="gdp"
                    stroke="#1e40af"
                    fillOpacity={1}
                    fill="url(#colorGdp)"
                    name="GDP (Tỷ USD)"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-xs text-muted-foreground mt-4">
                Quy mô nền kinh tế 2024: 11.511,9 nghìn tỷ VND (476,3 tỷ USD) - Xếp thứ 33 thế giới
              </p>
            </CardContent>
          </Card>

          {/* FDI Inflow */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle>Vốn Đầu tư Nước ngoài (Tỷ USD)</CardTitle>
              <CardDescription>2024: Vốn giải ngân lập kỷ lục 25,35 tỷ USD (tăng 9,4% so với 2023)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={fdiData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value.toFixed(2)} tỷ USD`} />
                  <Legend />
                  <Bar dataKey="fdi" fill="#2563eb" name="FDI Giải ngân (Tỷ USD)" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-xs text-muted-foreground mt-4">
                Vốn FDI đăng ký 2024: 38,23 tỷ USD | Singapore là nhà đầu tư lớn nhất (26,7%)
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-primary/20 mb-8">
          <CardHeader>
            <CardTitle>Vốn FDI theo Ngành (Tỷ USD)</CardTitle>
            <CardDescription>
              Phân bổ vốn đầu tư nước ngoài theo các ngành chính - Công nghiệp chế biến, chế tạo dẫn đầu (66,9%)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fdiSectorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => `${value.toFixed(2)} tỷ USD`} />
                <Legend />
                <Bar dataKey="manufacturing" fill="#1e40af" name="Sản xuất" />
                <Bar dataKey="tech" fill="#2563eb" name="Công nghệ" />
                <Bar dataKey="real_estate" fill="#3b82f6" name="Bất động sản" />
                <Bar dataKey="other" fill="#60a5fa" name="Khác" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Export Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle>Cơ cấu Xuất khẩu 2024</CardTitle>
              <CardDescription>Tổng xuất khẩu: 405,53 tỷ USD (tăng 14,3% so với 2023)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={exportData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {exportData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle>Thương mại với Đối tác Chính (Tỷ USD)</CardTitle>
              <CardDescription>Xuất khẩu vs Nhập khẩu 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={tradePartnersData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="country" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value} tỷ USD`} />
                  <Legend />
                  <Bar dataKey="export" fill="#10b981" name="Xuất khẩu" />
                  <Bar dataKey="import" fill="#f59e0b" name="Nhập khẩu" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-2">476,3</p>
                <p className="text-sm text-muted-foreground">GDP 2024 (Tỷ USD)</p>
                <p className="text-xs text-muted-foreground mt-2">Thứ 33 thế giới</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-2">7,09%</p>
                <p className="text-sm text-muted-foreground">Tăng trưởng 2024</p>
                <p className="text-xs text-muted-foreground mt-2">Cao nhất khu vực</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-2">25,35</p>
                <p className="text-sm text-muted-foreground">FDI Giải ngân 2024 (Tỷ USD)</p>
                <p className="text-xs text-muted-foreground mt-2">Kỷ lục mới</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-2">405,53</p>
                <p className="text-sm text-muted-foreground">Xuất khẩu 2024 (Tỷ USD)</p>
                <p className="text-xs text-muted-foreground mt-2">Tăng 14,3% so với 2023</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle>Thành tựu Kinh tế Nổi bật</CardTitle>
            <CardDescription>Dữ liệu từ Cục Thống kê Việt Nam, Bộ Kế hoạch và Đầu tư, 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-sm">Nền kinh tế tăng trưởng nhanh nhất Đông Nam Á</p>
                  <p className="text-xs text-muted-foreground">
                    Tăng trưởng GDP 7,09% năm 2024, vượt mục tiêu của Quốc hội
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-sm">Trung tâm sản xuất toàn cầu</p>
                  <p className="text-xs text-muted-foreground">
                    Khu vực FDI đóng góp 71,7% tổng xuất khẩu (290,94 tỷ USD)
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-sm">Xuất khẩu hàng hóa đa dạng</p>
                  <p className="text-xs text-muted-foreground">
                    37 mặt hàng xuất khẩu trên 1 tỷ USD, 8 mặt hàng vượt 10 tỷ USD
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-sm">Cán cân thương mại thặng dư liên tiếp</p>
                  <p className="text-xs text-muted-foreground">Năm thứ 9 liên tiếp có xuất siêu 24,77 tỷ USD (2024)</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-sm">Vốn FDI giải ngân lập kỷ lục</p>
                  <p className="text-xs text-muted-foreground">25,35 tỷ USD năm 2024, tăng 9,4% so với 2023</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-sm">Tốc độ tăng trưởng thương mại cao nhất</p>
                  <p className="text-xs text-muted-foreground">
                    Nằm trong TOP 30 quốc gia tăng trưởng thương mại cao nhất thế giới
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
