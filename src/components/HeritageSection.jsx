import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeritageSection() {
  return (
    <section
      id="heritage"
      className="py-20 bg-gradient-to-br from-[#D9C4B0] via-[#BBDCE5] to-[#ECEEDF] relative overflow-hidden"
    >
      {/* Arabic Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          className="absolute inset-0"
        >
          <pattern
            id="arabicPattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="2" fill="#CFAB8D" />
            <path
              d="M5,5 Q10,0 15,5 Q10,10 5,5"
              fill="none"
              stroke="#CFAB8D"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#arabicPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8" dir="rtl">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-[#CFAB8D] font-bold text-sm tracking-wider uppercase bg-white px-4 py-2 rounded-full shadow-md">
                  اكتشف سر العراقة والجمال مع عطور جولد
                </span>
              </div>

              <h2
                className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight"
                style={{ fontFamily: "Almarai, sans-serif" }}
              >
                من أرض مصر
                <span className="block text-[#CFAB8D]">عطور جولد</span>
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-[#CFAB8D] to-[#D9C4B0] rounded-full"></div>

              <p
                className="text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: "Almarai, sans-serif" }}
              >
                اكتشف روعة العطور المصرية مع جولد – حيث تلتقي الفخامة بالجودة في
                كل قطرة. نصنع عطورنا من أجود المكونات الطبيعية لنمنحك تجربة
                عطرية لا تُنسى كل يوم.
              </p>

              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: "Almarai, sans-serif" }}
              >
                عطور جولد تجمع بين الفخامة والجودة لتمنحك تجربة عطرية فريدة.
                نصنع عطورنا بعناية فائقة لتناسب جميع الأذواق وتضفي لمسة من
                التميز على كل يوم.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center p-4 bg-white bg-opacity-50 rounded-xl">
                  <div
                    className="text-3xl font-bold text-[#CFAB8D] mb-2"
                    style={{ fontFamily: "Almarai, sans-serif" }}
                  >
                    ٤٠+
                  </div>
                  <div
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "Almarai, sans-serif" }}
                  >
                    سنة خبرة
                  </div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-50 rounded-xl">
                  <div
                    className="text-3xl font-bold text-[#CFAB8D] mb-2"
                    style={{ fontFamily: "Almarai, sans-serif" }}
                  >
                    ١٥٠+
                  </div>
                  <div
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "Almarai, sans-serif" }}
                  >
                    عطر مصري
                  </div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-50 rounded-xl">
                  <div
                    className="text-3xl font-bold text-[#CFAB8D] mb-2"
                    style={{ fontFamily: "Almarai, sans-serif" }}
                  >
                    ١٠٠٪
                  </div>
                  <div
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "Almarai, sans-serif" }}
                  >
                    مصري طبيعي
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <ImageWithFallback
                    src="/oud.jpg"
                    alt="Traditional Arabic perfume"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <ImageWithFallback
                    src="/2.jpg"
                    alt="Rose perfume crafting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <ImageWithFallback
                    src="/1.jpg"
                    alt="Luxury perfume collection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <ImageWithFallback
                    src="/sea.jpg"
                    alt="Heritage perfume bottle"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#CFAB8D] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#BBDCE5] rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
