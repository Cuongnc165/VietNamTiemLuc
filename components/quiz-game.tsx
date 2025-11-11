"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "GDP của Việt Nam năm 2024 là bao nhiêu?",
    options: ["250 tỷ USD", "350 tỷ USD", "430 tỷ USD", "500 tỷ USD"],
    correct: 2,
    explanation: "GDP Việt Nam năm 2024 đạt 430 tỷ USD, tăng 361% so với năm 2010 (93 tỷ USD).",
  },
  {
    id: 2,
    question: "Việt Nam xếp thứ mấy về kinh tế toàn cầu?",
    options: ["Thứ 15", "Thứ 27", "Thứ 35", "Thứ 50"],
    correct: 1,
    explanation: "Theo IMF 2024, Việt Nam xếp thứ 27 về kinh tế toàn cầu trong 190 nước.",
  },
  {
    id: 3,
    question: "Vốn FDI vào Việt Nam năm 2024 là bao nhiêu?",
    options: ["10 tỷ USD", "15 tỷ USD", "21.5 tỷ USD", "30 tỷ USD"],
    correct: 2,
    explanation: "FDI vào Việt Nam năm 2024 đạt 21.5 tỷ USD, tăng 183% so với năm 2010.",
  },
  {
    id: 4,
    question: "Ngành nào chiếm tỷ trọng lớn nhất trong xuất khẩu của Việt Nam?",
    options: ["Nông sản", "Điện tử", "Dệu may", "Hóa chất"],
    correct: 1,
    explanation: "Ngành điện tử chiếm 22% tổng xuất khẩu, tiếp theo là dệu may (18%).",
  },
  {
    id: 5,
    question: "Việt Nam là thành viên của những hiệp định nào?",
    options: ["Chỉ ASEAN", "ASEAN, CPTPP, RCEP", "Chỉ CPTPP", "Chỉ RCEP"],
    correct: 1,
    explanation: "Việt Nam là thành viên của ASEAN (1995), CPTPP (2019), và RCEP (2022).",
  },
  {
    id: 6,
    question: "Tỷ lệ tăng trưởng GDP trung bình của Việt Nam là bao nhiêu?",
    options: ["3%", "5%", "7%", "10%"],
    correct: 2,
    explanation: "Tỷ lệ tăng trưởng GDP trung bình của Việt Nam là 7% hàng năm, cao nhất khu vực.",
  },
  {
    id: 7,
    question: "Đối tác thương mại lớn nhất của Việt Nam là ai?",
    options: ["Trung Quốc", "Mỹ", "EU", "Nhật Bản"],
    correct: 1,
    explanation: "Mỹ là đối tác thương mại lớn nhất với xuất khẩu 120 tỷ USD năm 2024.",
  },
  {
    id: 8,
    question: "Lực lượng quân nhân hoạt động của Việt Nam là bao nhiêu?",
    options: ["250,000", "350,000", "482,000", "600,000"],
    correct: 2,
    explanation: "Lực lượng quân nhân hoạt động của Việt Nam là 482,000 người.",
  },
]

export default function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)

  const handleAnswerClick = (index: number) => {
    if (!answered) {
      setSelectedAnswer(index)
      setAnswered(true)
      if (index === questions[currentQuestion].correct) {
        setScore(score + 1)
      }
    }
  }

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setShowScore(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedAnswer(null)
    setAnswered(false)
  }

  return (
    <section id="quiz" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trò chơi Câu đố</h2>
          <p className="text-lg text-muted-foreground">Kiểm tra kiến thức của bạn về tiềm lực và vị thế của Việt Nam</p>
        </div>

        <Card className="border-2 border-primary/20">
          {showScore ? (
            <CardContent className="pt-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Kết quả của bạn</h3>
                <div className="mb-6">
                  <p className="text-5xl font-bold text-primary mb-2">
                    {score}/{questions.length}
                  </p>
                  <p className="text-lg text-muted-foreground">
                    {score === questions.length
                      ? "Tuyệt vời! Bạn là chuyên gia!"
                      : score >= questions.length * 0.7
                        ? "Rất tốt! Bạn hiểu rõ về Việt Nam."
                        : score >= questions.length * 0.5
                          ? "Khá tốt! Hãy tìm hiểu thêm."
                          : "Hãy đọc lại nội dung để hiểu rõ hơn."}
                  </p>
                </div>
                <Button onClick={handleRestart} className="w-full">
                  Chơi lại
                </Button>
              </div>
            </CardContent>
          ) : (
            <>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>
                    Câu {currentQuestion + 1}/{questions.length}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">Điểm: {score}</div>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-4">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-6">{questions[currentQuestion].question}</h3>
                <div className="space-y-3 mb-6">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(index)}
                      disabled={answered}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                        selectedAnswer === index
                          ? index === questions[currentQuestion].correct
                            ? "border-green-500 bg-green-50"
                            : "border-red-500 bg-red-50"
                          : answered && index === questions[currentQuestion].correct
                            ? "border-green-500 bg-green-50"
                            : "border-primary/20 hover:border-primary/40"
                      } ${answered ? "cursor-default" : "cursor-pointer"}`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedAnswer === index
                              ? index === questions[currentQuestion].correct
                                ? "border-green-500 bg-green-500"
                                : "border-red-500 bg-red-500"
                              : answered && index === questions[currentQuestion].correct
                                ? "border-green-500 bg-green-500"
                                : "border-primary/40"
                          }`}
                        >
                          {selectedAnswer === index && (
                            <span className="text-white text-sm">
                              {index === questions[currentQuestion].correct ? "✓" : "✗"}
                            </span>
                          )}
                          {answered && index === questions[currentQuestion].correct && selectedAnswer !== index && (
                            <span className="text-white text-sm">✓</span>
                          )}
                        </div>
                        <span>{option}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {answered && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-sm font-semibold text-blue-900 mb-2">Giải thích:</p>
                    <p className="text-sm text-blue-800">{questions[currentQuestion].explanation}</p>
                  </div>
                )}

                <Button onClick={handleNext} disabled={!answered} className="w-full">
                  {currentQuestion === questions.length - 1 ? "Xem kết quả" : "Câu tiếp theo"}
                </Button>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </section>
  )
}
