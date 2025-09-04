import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "أحمد حسن",
    city: "القاهرة",
    rating: 5,
    text: "عطور جولد رائعة ومميزة! عطر عود الفراعنة له رائحة فخمة تدوم طويلاً. جودة مصرية عالية وأسعار ممتازة.",
    product: "عود الفراعنة",
  },
  {
    id: 2,
    name: "نورا محمد",
    city: "الإسكندرية",
    rating: 5,
    text: "أحب ياسمين النيل! رائحة مصرية أصيلة تذكرني بجمال بلدنا. التغليف أنيق والخدمة ممتازة.",
    product: "ياسمين النيل",
  },
  {
    id: 3,
    name: "محمود علي",
    city: "الجيزة",
    rating: 5,
    text: "ذهب الصحراء عطر استثنائي! يحمل عبق التراث المصري العريق. توصيل سريع وخدمة عملاء رائعة.",
    product: "ذهب الصحراء",
  },
  {
    id: 4,
    name: "سارة أحمد",
    city: "أسوان",
    rating: 5,
    text: "جولد أفضل متجر عطور في مصر! العطور طبيعية وجودتها عالية. عنبر الإسكندرية عطري المفضل.",
    product: "عنبر الإسكندرية",
  },
  {
    id: 5,
    name: "يوسف مصطفى",
    city: "الأقصر",
    rating: 5,
    text: "تراث فرعوني عريق في زجاجة! كل عطر يحكي قصة مصر الجميلة. فخر أن عندنا علامة مصرية بهذا المستوى.",
    product: "عود الفراعنة",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-white to-[#ECEEDF]"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" dir="rtl">
          <div className="inline-block mb-4">
            <span className="text-[#CFAB8D] font-bold text-sm tracking-wider uppercase bg-[#BBDCE5] bg-opacity-30 px-4 py-2 rounded-full">
              آراء عملاء جولد
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "Almarai, sans-serif" }}
          >
            ماذا يقول أهل مصر
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "Almarai, sans-serif" }}
          >
            تجارب حقيقية من عملائنا المصريين الأعزاء في جميع أنحاء الجمهورية
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {visibleTestimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`p-8 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl border-0 relative overflow-hidden ${
                index === 1
                  ? "transform scale-105 border-2 border-[#CFAB8D]"
                  : ""
              }`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                <Quote size={80} className="text-[#CFAB8D]" />
              </div>

              <div className="relative z-10" dir="rtl">
                {/* Rating */}
                <div className="flex justify-end gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < testimonial.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p
                  className="text-gray-700 leading-relaxed mb-6 text-right"
                  style={{ fontFamily: "Almarai, sans-serif" }}
                >
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="text-right">
                      <h4
                        className="font-bold text-gray-800 mb-1"
                        style={{ fontFamily: "Almarai, sans-serif" }}
                      >
                        {testimonial.name}
                      </h4>
                      <p
                        className="text-sm text-gray-500"
                        style={{ fontFamily: "Almarai, sans-serif" }}
                      >
                        {testimonial.city}
                      </p>
                    </div>
                    <div className="text-left">
                      <div className="inline-block bg-[#CFAB8D] bg-opacity-10 text-[#CFAB8D] px-3 py-1 rounded-full text-xs font-medium">
                        {testimonial.product}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-[#CFAB8D] text-white rounded-full hover:bg-[#D9C4B0] transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-[#CFAB8D] w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-[#CFAB8D] text-white rounded-full hover:bg-[#D9C4B0] transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
