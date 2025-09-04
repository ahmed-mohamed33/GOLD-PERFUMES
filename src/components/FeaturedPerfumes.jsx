import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";

const perfumes = [
  {
    id: 1,
    name: "عود الفراعنة",
    arabicName: "Pharaoh's Oud",
    price: "٤٥٠ جنيه",
    originalPrice: "٥٥٠ جنيه",
    image: "/images/oud.jpg",
    rating: 4.9,
    isNew: true,
    description: "عطر فاخر مستوحى من حضارة الفراعنة بأجود أنواع العود",
  },
  {
    id: 2,
    name: "ياسمين النيل",
    arabicName: "Nile Jasmine",
    price: "٣٢٠ جنيه",
    originalPrice: null,
    image: "/images/nile.jpg",
    rating: 4.8,
    isNew: false,
    description: "عبير الياسمين المصري الأصيل من ضفاف النيل",
  },
  {
    id: 3,
    name: "ذهب الصحراء",
    arabicName: "Desert Gold",
    price: "٦٠٠ جنيه",
    originalPrice: null,
    image: "/images/gold.jpg",
    rating: 5.0,
    isNew: false,
    description: "تركيبة حصرية تحاكي كنوز الصحراء المصرية الذهبية",
  },
  {
    id: 4,
    name: "عنبر الإسكندرية",
    arabicName: "Alexandria Amber",
    price: "٣٨٠ جنيه",
    originalPrice: "٤٥٠ جنيه",
    image: "/images/sea.jpg",
    rating: 4.7,
    isNew: true,
    description: "عنبر البحر المتوسط بلمسة الإسكندرية العريقة",
  },
];

export function FeaturedPerfumes() {
  return (
    <section
      id="featured"
      className="py-20 bg-gradient-to-b from-[#ECEEDF] to-white"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" dir="rtl">
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "Almarai, sans-serif" }}
          >
            مجموعة جولد المميزة
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl "
            style={{ fontFamily: "Almarai, sans-serif" }}
          >
            عطور فاخرة مصنوعة بحرفية عالية من أجود المكونات الطبيعية
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perfumes.map((perfume) => (
            <Card
              key={perfume.id}
              className="group cursor-pointer bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl overflow-hidden"
            >
              <div className="relative">
                {/* Product Image */}
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={perfume.image}
                    alt={perfume.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {perfume.isNew && (
                    <Badge
                      className="bg-[#CFAB8D] text-white px-3 py-1 rounded-full text-xs"
                      style={{ fontFamily: "Almarai, sans-serif" }}
                    >
                      جديد
                    </Badge>
                  )}
                  {perfume.originalPrice && (
                    <Badge
                      variant="destructive"
                      className="px-3 py-1 rounded-full text-xs"
                      style={{ fontFamily: "Almarai, sans-serif" }}
                    >
                      خصم
                    </Badge>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center h-full w-full pointer-events-auto">
                    <button
                      className="bg-[#CFAB8D] text-white px-6 py-2 rounded-full hover:bg-[#D9C4B0] transition-colors duration-200"
                      style={{ fontFamily: "Almarai, sans-serif" }}
                    >
                      إضافة للسلة
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6" dir="rtl">
                <div className="mb-3">
                  <h3
                    className="text-xl font-bold text-gray-800 mb-1"
                    style={{ fontFamily: "Almarai, sans-serif" }}
                  >
                    {perfume.name}
                  </h3>
                  <p
                    className="text-sm text-gray-500"
                    style={{ fontFamily: "Almarai, sans-serif" }}
                  >
                    {perfume.arabicName}
                  </p>
                </div>

                <p
                  className="text-sm text-gray-600 mb-4 line-clamp-2"
                  style={{ fontFamily: "Almarai, sans-serif" }}
                >
                  {perfume.description}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-end gap-2 mb-4">
                  <span
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "Almarai, sans-serif" }}
                  >
                    ({perfume.rating})
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < Math.floor(perfume.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="text-right">
                    <span
                      className="text-2xl font-bold text-[#CFAB8D]"
                      style={{ fontFamily: "Almarai, sans-serif" }}
                    >
                      {perfume.price}
                    </span>
                    {perfume.originalPrice && (
                      <span
                        className="text-sm text-gray-400 line-through mr-2"
                        style={{ fontFamily: "Almarai, sans-serif" }}
                      >
                        {perfume.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            className="bg-gradient-to-r from-[#CFAB8D] to-[#D9C4B0] text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{ fontFamily: "Almarai, sans-serif" }}
          >
            عرض جميع العطور
          </button>
        </div>
      </div>
    </section>
  );
}
