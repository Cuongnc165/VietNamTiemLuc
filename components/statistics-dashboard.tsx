"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Globe, Zap } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    label: "GDP 2024",
    value: "$430B",
    change: "+361%",
    period: "từ 2010",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Zap,
    label: "Tăng trưởng TB",
    value: "7%",
    change: "Cao nhất khu vực",
    period: "hàng năm",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Globe,
    label: "FDI 2024",
    value: "$21.5B",
    change: "+183%",
    period: "từ 2010",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Users,
    label: "Dân số",
    value: "98M",
    change: "Thứ 3 ĐNA",
    period: "năm 2024",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
]

export default function StatisticsDashboard() {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className={`${stat.bgColor} border-0 hover:shadow-lg transition-shadow`}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{stat.value}</p>
                  <p className={`text-sm font-semibold ${stat.color} mb-1`}>{stat.change}</p>
                  <p className="text-xs text-muted-foreground">{stat.period}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
