"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

const comparisonData = {
  gdp: [
    { country: "Việt Nam", value: 430, color: "#1e40af" },
    { country: "Thái Lan", value: 495, color: "#2563eb" },
    { country: "Philippines", value: 580, color: "#3b82f6" },
    { country: "Indonesia", value: 1120, color: "#60a5fa" },
    { country: "Hàn Quốc", value: 1780, color: "#93c5fd" },
  ],
  growth: [
    { country: "Việt Nam", value: 7.0, color: "#1e40af" },
    { country: "Thái Lan", value: 2.5, color: "#2563eb" },
    { country: "Philippines", value: 5.8, color: "#3b82f6" },
    { country: "Indonesia", value: 5.1, color: "#60a5fa" },
    { country: "Hàn Quốc", value: 2.8, color: "#93c5fd" },
  ],
  fdi: [
    { country: "Việt Nam", value: 21.5, color: "#1e40af" },
    { country: "Thái Lan", value: 15.2, color: "#2563eb" },
    { country: "Philippines", value: 12.8, color: "#3b82f6" },
    { country: "Indonesia", value: 28.5, color: "#60a5fa" },
    { country: "Hàn Quốc", value: 8.2, color: "#93c5fd" },
  ],
  metrics: [
    {
      metric: "GDP (Tỷ USD)",
      "Việt Nam": 430,
      "Thái Lan": 495,
      Philippines: 580,
      Indonesia: 1120,
      "Hàn Quốc": 1780,
    },
    {
      metric: "Tăng trưởng (%)",
      "Việt Nam": 7.0,
      "Thái Lan": 2.5,
      Philippines: 5.8,
      Indonesia: 5.1,
      "Hàn Quốc": 2.8,
    },
    {
      metric: "FDI (Tỷ USD)",
      "Việt Nam": 21.5,
      "Thái Lan": 15.2,
      Philippines: 12.8,
      Indonesia: 28.5,
      "Hàn Quốc": 8.2,
    },
    {
      metric: "Dân số (Triệu)",
      "Việt Nam": 98,
      "Thái Lan": 72,
      Philippines: 120,
      Indonesia: 275,
      "Hàn Quốc": 52,
    },
    {
      metric: "GDP/Người (USD)",
      "Việt Nam": 4388,
      "Thái Lan": 6875,
      Philippines: 4833,
      Indonesia: 4073,
      "Hàn Quốc": 34231,
    },
  ],
}

type ComparisonType = "gdp" | "growth" | "fdi"

export default function ComparisonTool() {
  const [selectedComparison, setSelectedComparison] = useState<ComparisonType>("gdp")
  const [selectedCountries, setSelectedCountries] = useState<string[]>(["Việt Nam", "Thái Lan", "Philippines"])

  const getComparisonData = () => {
    const data = comparisonData[selectedComparison]
    return data.filter((item) => selectedCountries.includes(item.country))
  }

  const getRadarData = () => {
    return comparisonData.metrics.map((item) => ({
      metric: item.metric,
      ...Object.fromEntries(selectedCountries.map((country) => [country, item[country as keyof typeof item] || 0])),
    }))
  }

  const toggleCountry = (country: string) => {
    setSelectedCountries((prev) => (prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country]))
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">So sánh Kinh tế Khu vực</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            So sánh các chỉ số kinh tế của Việt Nam với các nước trong khu vực
          </p>
        </div>

        {/* Comparison Type Selector */}
        <Card className="border-2 border-primary/20 mb-8">
          <CardHeader>
            <CardTitle>Chọn chỉ số so sánh</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {[
                { id: "gdp", label: "GDP (Tỷ USD)" },
                { id: "growth", label: "Tăng trưởng (%)" },
                { id: "fdi", label: "FDI (Tỷ USD)" },
              ].map((option) => (
                <Button
                  key={option.id}
                  onClick={() => setSelectedComparison(option.id as ComparisonType)}
                  variant={selectedComparison === option.id ? "default" : "outline"}
                  className="px-6"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Country Selector */}
        <Card className="border-2 border-primary/20 mb-8">
          <CardHeader>
            <CardTitle>Chọn các nước để so sánh</CardTitle>
            <CardDescription>Chọn từ 1 đến 5 nước</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {["Việt Nam", "Thái Lan", "Philippines", "Indonesia", "Hàn Quốc"].map((country) => (
                <Button
                  key={country}
                  onClick={() => toggleCountry(country)}
                  variant={selectedCountries.includes(country) ? "default" : "outline"}
                  className="px-4"
                >
                  {country}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bar Chart Comparison */}
        <Card className="border-2 border-primary/20 mb-8">
          <CardHeader>
            <CardTitle>
              {selectedComparison === "gdp"
                ? "So sánh GDP"
                : selectedComparison === "growth"
                  ? "So sánh Tăng trưởng"
                  : "So sánh FDI"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={getComparisonData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#1e40af" name="Giá trị" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Radar Chart for Multi-metric Comparison */}
        {selectedCountries.length > 0 && (
          <Card className="border-2 border-primary/20 mb-8">
            <CardHeader>
              <CardTitle>So sánh Đa chỉ số</CardTitle>
              <CardDescription>Biểu đồ radar so sánh các chỉ số kinh tế</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={getRadarData()}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarRadiusAxis />
                  {selectedCountries.map((country, index) => (
                    <Radar
                      key={country}
                      name={country}
                      dataKey={country}
                      stroke={["#1e40af", "#2563eb", "#3b82f6", "#60a5fa", "#93c5fd"][index]}
                      fill={["#1e40af", "#2563eb", "#3b82f6", "#60a5fa", "#93c5fd"][index]}
                      fillOpacity={0.25}
                    />
                  ))}
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        {/* Detailed Comparison Table */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle>Bảng so sánh chi tiết</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="text-left py-3 px-4 font-semibold">Chỉ số</th>
                    {selectedCountries.map((country) => (
                      <th key={country} className="text-right py-3 px-4 font-semibold">
                        {country}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.metrics.map((row, index) => (
                    <tr key={index} className="border-b border-primary/10 hover:bg-primary/5">
                      <td className="py-3 px-4 font-medium">{row.metric}</td>
                      {selectedCountries.map((country) => (
                        <td key={country} className="text-right py-3 px-4">
                          {row[country as keyof typeof row]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
