import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Instagram,
  Facebook,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export function NewsletterFooter() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <pattern
            id="footerPattern"
            x="0"
            y="0"
            width="25"
            height="25"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="12.5" cy="12.5" r="3" fill="#CFAB8D" />
            <path
              d="M5,5 Q12.5,0 20,5 Q12.5,10 5,5"
              fill="none"
              stroke="#CFAB8D"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footerPattern)" />
        </svg>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-gray-700 relative z-10">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Newsletter Content */}
            <div className="text-center lg:text-right" dir="rtl">
              <h3
                className="text-3xl lg:text-4xl font-bold mb-4 text-[#CFAB8D]"
                style={{ fontFamily: "Almarai, sans-serif" }}
              >
                اشترك في نشرتنا البريدية
              </h3>
              <p
                className="text-lg text-gray-300 mb-6"
                style={{ fontFamily: "Almarai, sans-serif" }}
              >
                كن أول من يعلم بالعطور الجديدة والعروض الحصرية
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="max-w-md mx-auto lg:mx-0">
              <div className="flex gap-3" dir="rtl">
                <Button
                  className="bg-[#CFAB8D] hover:bg-[#D9C4B0] text-white px-8 py-3 rounded-xl transition-all duration-300 whitespace-nowrap"
                  style={{ fontFamily: "Almarai, sans-serif" }}
                >
                  اشتراك
                </Button>
                <Input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 rounded-xl flex-1 text-right"
                  style={{ fontFamily: "Almarai, sans-serif" }}
                />
              </div>
              <p
                className="text-xs text-gray-400 mt-3 text-right"
                style={{ fontFamily: "Almarai, sans-serif" }}
              >
                نحترم خصوصيتك ولن نرسل رسائل مزعجة
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1" dir="rtl">
            <h3
              className="text-2xl font-bold text-[#CFAB8D] mb-4"
              style={{ fontFamily: "Almarai, sans-serif" }}
            >
              جـــولــــد
            </h3>
            <p
              className="text-gray-300 leading-relaxed mb-6"
              style={{ fontFamily: "Almarai, sans-serif" }}
            >
              أربعة عقود من التميز في صناعة العطور .
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-end">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#CFAB8D] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#CFAB8D] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#CFAB8D] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div dir="rtl">
            <h4
              className="text-lg font-bold text-white mb-4"
              style={{ fontFamily: "Almarai, sans-serif" }}
            >
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {["الرئيسية", "العطور", "عروض خاصة", "من نحن", "المدونة"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#CFAB8D] transition-colors duration-200"
                      style={{ fontFamily: "Almarai, sans-serif" }}
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Categories */}
          <div dir="rtl">
            <h4
              className="text-lg font-bold text-white mb-4"
              style={{ fontFamily: "Almarai, sans-serif" }}
            >
              المجموعات المصرية
            </h4>
            <ul className="space-y-3">
              {[
                "عطور الفراعنة",
                "ياسمين مصري",
                "عنبر البحرين",
                "عود الصعيد",
                "مسك النيل",
              ].map((category, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#CFAB8D] transition-colors duration-200"
                    style={{ fontFamily: "Almarai, sans-serif" }}
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div dir="rtl">
            <h4
              className="text-lg font-bold text-white mb-4"
              style={{ fontFamily: "Almarai, sans-serif" }}
            >
              تواصل معنا
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={18} className="text-[#CFAB8D]" />
                <span style={{ fontFamily: "Almarai, sans-serif" }}>
                  +20 2 1234 5678
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={18} className="text-[#CFAB8D]" />
                <span style={{ fontFamily: "Almarai, sans-serif" }}>
                  info@gold-perfumes.eg
                </span>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="text-[#CFAB8D] mt-1" />
                <span style={{ fontFamily: "Almarai, sans-serif" }}>
                  القاهرة، جمهورية مصر العربية
                  <br />
                  مدينة نصر، شارع النصر الرئيسي
                </span>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-xl">
              <h5
                className="font-bold text-[#CFAB8D] mb-2"
                style={{ fontFamily: "Almarai, sans-serif" }}
              >
                مواعيد العمل
              </h5>
              <div
                className="text-sm text-gray-300 space-y-1"
                style={{ fontFamily: "Almarai, sans-serif" }}
              >
                <div>السبت - الخميس: ١٠ص - ١١م</div>
                <div>الجمعة: ٢ظ - ١١م</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 relative z-10">
        <div className="container mx-auto px-6">
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            dir="rtl"
          >
            <p
              className="text-gray-400 text-sm"
              style={{ fontFamily: "Almarai, sans-serif" }}
            >
              © ٢٠٢٥ جولد للعطور المصرية. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-[#CFAB8D] transition-colors duration-200"
                style={{ fontFamily: "Almarai, sans-serif" }}
              >
                سياسة الخصوصية
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#CFAB8D] transition-colors duration-200"
                style={{ fontFamily: "Almarai, sans-serif" }}
              >
                الشروط والأحكام
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#CFAB8D] transition-colors duration-200"
                style={{ fontFamily: "Almarai, sans-serif" }}
              >
                سياسة الإرجاع
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
