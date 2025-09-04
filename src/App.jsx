import { HeroSection } from "./components/HeroSection";
import { FeaturedPerfumes } from "./components/FeaturedPerfumes";
import { HeritageSection } from "./components/HeritageSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { NewsletterFooter } from "./components/NewsletterFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-[#ECEEDF] scroll-smooth">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              className="bg-[#CFAB8D] hover:bg-[#D9C4B0] text-white px-6 py-2 rounded-lg transition-colors duration-200"
              style={{ fontFamily: "Almarai, sans-serif" }}
            >
              تسوق الآن
            </button>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8" dir="rtl">
              <a
                href="#hero"
                className="text-gray-700 hover:text-[#CFAB8D] transition-colors duration-200 scroll-smooth"
                style={{ fontFamily: "Almarai, sans-serif" }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("hero")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                الرئيسية
              </a>
              <a
                href="#featured"
                className="text-gray-700 hover:text-[#CFAB8D] transition-colors duration-200 scroll-smooth"
                style={{ fontFamily: "Almarai, sans-serif" }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("featured")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                مجموعاتنا
              </a>
              <a
                href="#heritage"
                className="text-gray-700 hover:text-[#CFAB8D] transition-colors duration-200 scroll-smooth"
                style={{ fontFamily: "Almarai, sans-serif" }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("heritage")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                تراثنا المصري
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#CFAB8D] transition-colors duration-200 scroll-smooth"
                style={{ fontFamily: "Almarai, sans-serif" }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                تواصل معنا
              </a>
            </div>

            {/* CTA Button */}

            <div
              className="text-2xl font-bold text-[#CFAB8D]"
              style={{ fontFamily: "Almarai, sans-serif" }}
            >
              جـــولــــد
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <FeaturedPerfumes />
        <HeritageSection />
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <NewsletterFooter />
    </div>
  );
}
