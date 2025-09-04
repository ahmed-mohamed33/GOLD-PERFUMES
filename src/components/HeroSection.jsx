import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-[#ECEEDF] via-[#BBDCE5] to-[#D9C4B0] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 border border-[#CFAB8D] rounded-full"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 border border-[#CFAB8D] rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#CFAB8D] rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 py-20 pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-right" dir="rtl">
            <div className="space-y-4">
              <h1
                className="text-5xl lg:text-7xl font-bold text-gray-800 leading-tight"
                style={{ fontFamily: "Almarai, sans-serif" }}
              >
                جــولـــد
                <span className="block text-3xl lg:text-4xl text-[#CFAB8D] mt-2">
                  عطور مصرية فاخرة
                </span>
              </h1>
              <p
                className="text-lg lg:text-xl text-gray-600 max-w-md mx-auto lg:mx-0"
                style={{ fontFamily: "Almarai, sans-serif" }}
              >
                من أرض الكنانة... عطور مصرية أصيلة مصنوعة بحرفية عالية من أجود
                الخامات الطبيعية
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Button
                size="lg"
                className="bg-[#CFAB8D] hover:bg-[#D9C4B0] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ fontFamily: "Almarai, sans-serif" }}
              >
                تسوق الآن
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#CFAB8D] text-[#CFAB8D] hover:bg-[#CFAB8D] hover:text-white px-8 py-4 rounded-xl transition-all duration-300"
                style={{ fontFamily: "Almarai, sans-serif" }}
              >
                اكتشف المزيد
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="src/assets/images/hero.jpg"
                alt="Luxury perfume bottle"
                className="w-72 mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                style={{ height: "auto" }}
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-[#CFAB8D] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#BBDCE5] rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#CFAB8D] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#CFAB8D] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
