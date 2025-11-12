"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  // ==== Câu hỏi lịch sử & chính trị ====
  {
    id: 1,
    question:
      "Bối cảnh lịch sử nào dẫn đến việc Việt Nam khởi xướng công cuộc Đổi mới năm 1986?",
    options: [
      "Việt Nam muốn hội nhập quốc tế và gia nhập ASEAN.",
      "Nền kinh tế khủng hoảng, lạm phát phi mã, sản xuất trì trệ và cơ chế bao cấp không còn phù hợp.",
      "Việt Nam bị ảnh hưởng bởi sự tan rã của Liên Xô.",
      "Áp lực cạnh tranh từ các nền kinh tế mới nổi Đông Á.",
    ],
    correct: 1,
    explanation:
      "Khủng hoảng kinh tế, lạm phát cao, sản xuất trì trệ và cơ chế bao cấp là nguyên nhân trực tiếp thúc đẩy Đổi mới.",
  },
  {
    id: 2,
    question:
      "Quy mô GDP 476,3 tỷ USD thể hiện rõ nhất yếu tố nào trong nhận định của Tổng Bí thư?",
    options: ["Tiềm lực", "Cơ đồ", "Uy tín", "Vị thế"],
    correct: 3,
    explanation:
      "Con số GDP lớn thể hiện rõ 'Vị thế' và sức mạnh kinh tế của Việt Nam trong khu vực.",
  },
  {
    id: 3,
    question:
      "So với năm 1986, nền kinh tế Việt Nam năm 2024 đã tăng trưởng bao nhiêu lần (GDP danh nghĩa USD)?",
    options: [
      "Khoảng 50 lần",
      "Khoảng 80 lần",
      "Khoảng 100 lần",
      "Khoảng 200 lần",
    ],
    correct: 2,
    explanation:
      "GDP danh nghĩa tăng khoảng 100 lần so với thời điểm bắt đầu Đổi mới.",
  },
  {
    id: 4,
    question:
      "Sau năm 1975, Việt Nam gặp khó khăn kinh tế – xã hội chủ yếu vì:",
    options: [
      "Tác động của Chiến tranh lạnh và bị bao vây, cấm vận quốc tế.",
      "Chính sách công nghiệp hóa tập trung quá nhanh.",
      "Thiếu tài nguyên thiên nhiên.",
      "Tỷ lệ dân số tăng chậm.",
    ],
    correct: 0,
    explanation:
      "Việt Nam chịu ảnh hưởng nặng nề từ Chiến tranh lạnh và lệnh cấm vận quốc tế sau 1975.",
  },
  {
    id: 5,
    question:
      "Cụm từ “chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay” được tuyên bố tại:",
    options: [
      "Đại hội XII (năm 2016)",
      "Hội nghị Trung ương 4 khóa XIII",
      "Đại hội XIII của Đảng Cộng sản Việt Nam (năm 2021)",
      "Hội nghị Tổng kết công tác Đối ngoại năm 2022",
    ],
    correct: 2,
    explanation:
      "Cụm từ này được Tổng Bí thư Nguyễn Phú Trọng nhấn mạnh tại Đại hội XIII năm 2021.",
  },

  // ==== Câu hỏi phân tích chuyên sâu ====
  {
    id: 6,
    question:
      "Nếu vốn Cam kết FDI giảm mạnh, có lập tức phủ nhận đánh giá về 'niềm tin' nhà đầu tư không?",
    options: [
      "Chắc chắn là có.",
      "Hoàn toàn không.",
      "Có thể, nhưng chỉ đối với các ngành nghề mới.",
      "Điều đó tùy thuộc vào lý do.",
    ],
    correct: 3,
    explanation:
      "Vốn cam kết giảm không đồng nghĩa với mất niềm tin, vì còn nhiều yếu tố khác ảnh hưởng.",
  },
  {
    id: 7,
    question:
      "Phân biệt tiềm lực xuất siêu với phụ thuộc FDI/chuỗi cung ứng toàn cầu?",
    options: [
      "Không có sự khác biệt lớn.",
      "Đó là sự phụ thuộc rõ ràng.",
      "Tiềm lực nằm ở sự 'hấp thụ'.",
      "Cán cân thương mại đã trả lời.",
    ],
    correct: 2,
    explanation:
      "Tiềm lực thực sự thể hiện ở khả năng hấp thụ và phát huy nội lực, không chỉ dựa vào FDI.",
  },
  {
    id: 8,
    question:
      "Nếu tốc độ tăng trưởng GDP đầu người ở các thành phố cao hơn nông thôn 5 lần, liệu còn là 'tiềm lực nhân văn'?",
    options: [
      "Vẫn là thành tựu của toàn dân tộc.",
      "Đó là sự thất bại của 'Tiềm lực Nhân văn'.",
      "Dấu hiệu chuyển mình tích cực.",
      "Không phải thất bại, nhưng là 'nguy cơ'.",
    ],
    correct: 1,
    explanation:
      "Tăng trưởng không đồng đều có thể là thành tựu nhưng cũng tạo ra rủi ro về công bằng xã hội.",
  },
  {
    id: 9,
    question:
      "Ổn định tuyệt đối đôi khi được đánh đổi bằng giảm tốc độ cải cách hành chính, liệu có cản trở phát triển bền vững?",
    options: [
      "Không thể có sự đánh đổi.",
      "Có, đó là rào cản tiềm ẩn.",
      "Tấm khiên vẫn là quan trọng nhất.",
      "Cả hai đều là tiềm lực.",
    ],
    correct: 1,
    explanation:
      "Ổn định quá mức nếu đánh đổi cải cách có thể trở thành rào cản tiềm ẩn cho phát triển dài hạn.",
  },
];

export default function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (!answered) {
      setSelectedAnswer(index);
      setAnswered(true);
      if (index === questions[currentQuestion].correct) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setAnswered(false);
  };

  return (
    <section id="quiz" className="py-16 md:py-24 bg-gray-200 rounded-2xl">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trò chơi Câu đố
          </h2>
          <p className="text-lg text-muted-foreground">
            Kiểm tra kiến thức của bạn về tiềm lực và vị thế của Việt Nam
          </p>
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
                  <div className="text-sm text-muted-foreground">
                    Điểm: {score}
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-4">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{
                      width: `${
                        ((currentQuestion + 1) / questions.length) * 100
                      }%`,
                    }}
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-6">
                  {questions[currentQuestion].question}
                </h3>
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
                          : answered &&
                            index === questions[currentQuestion].correct
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
                              : answered &&
                                index === questions[currentQuestion].correct
                              ? "border-green-500 bg-green-500"
                              : "border-primary/40"
                          }`}
                        >
                          {selectedAnswer === index && (
                            <span className="text-white text-sm">
                              {index === questions[currentQuestion].correct
                                ? "✓"
                                : "✗"}
                            </span>
                          )}
                          {answered &&
                            index === questions[currentQuestion].correct &&
                            selectedAnswer !== index && (
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
                    <p className="text-sm font-semibold text-blue-900 mb-2">
                      Giải thích:
                    </p>
                    <p className="text-sm text-blue-800">
                      {questions[currentQuestion].explanation}
                    </p>
                  </div>
                )}

                <Button
                  onClick={handleNext}
                  disabled={!answered}
                  className="w-full"
                >
                  {currentQuestion === questions.length - 1
                    ? "Xem kết quả"
                    : "Câu tiếp theo"}
                </Button>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </section>
  );
}
