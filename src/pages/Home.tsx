import React from 'react';
import { Link } from 'react-router-dom';
import { Diamond, Award, Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      text: "The attention to detail and customer service is exceptional. My engagement ring is absolutely perfect!"
    },
    {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      text: "Lumière's craftsmanship is unmatched. The vintage necklace I purchased exceeded all expectations."
    },
    {
      name: "Emma Thompson",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      text: "Every piece tells a story. The sapphire bracelet I received is truly a work of art."
    }
  ];

  const featuredCollections = [
    {
      title: "Royal Diamonds",
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
      description: "Exquisite diamond pieces for life's special moments"
    },
    {
      title: "Vintage Elegance",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
      description: "Timeless designs inspired by classic aesthetics"
    },
    {
      title: "Modern Romance",
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80",
      description: "Contemporary pieces for the modern connoisseur"
    },
    {
      title: "Sapphire Dreams",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
      description: "Elegant sapphire jewelry for the sophisticated"
    },
    {
      title: "Pearl Essence",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
      description: "Timeless pearl collections for every occasion"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen relative bg-gradient-to-br from-purple-50 to-pink-50 flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-serif font-bold mb-8 bg-gradient-to-r from-purple-900 to-pink-800 bg-clip-text text-transparent">
              Timeless Elegance, Crafted for Eternity
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12">
              Discover our exquisite collection of handcrafted jewelry, where each piece tells a unique story of luxury and sophistication.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/collections"
                className="bg-gradient-to-r from-purple-700 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
              >
                Explore Collections
              </Link>
              <Link
                to="/contact"
                className="border-2 border-purple-700 text-purple-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">Featured Collections</h2>
          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-purple-600',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-purple-600',
              }}
              className="px-4 py-8"
            >
              {featuredCollections.map((collection, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative overflow-hidden rounded-xl shadow-lg">
                    <div className="aspect-w-3 aspect-h-4">
                      <img
                        src={collection.image}
                        alt={collection.title}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-serif font-bold text-white mb-2">{collection.title}</h3>
                      <p className="text-gray-200 mb-4">{collection.description}</p>
                      <Link
                        to="/collections"
                        className="text-white font-medium hover:text-purple-300 transition-colors inline-flex items-center"
                      >
                        Explore Collection
                        <span className="ml-2">→</span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="swiper-button-prev !w-12 !h-12 !bg-white/80 rounded-full shadow-lg backdrop-blur-sm after:!text-2xl after:!text-purple-600 hover:!bg-white transition-colors">
              <ChevronLeft className="h-6 w-6 text-purple-600" />
            </button>
            <button className="swiper-button-next !w-12 !h-12 !bg-white/80 rounded-full shadow-lg backdrop-blur-sm after:!text-2xl after:!text-purple-600 hover:!bg-white transition-colors">
              <ChevronRight className="h-6 w-6 text-purple-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Diamond className="h-16 w-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-serif font-bold mb-4">Master Craftsmanship</h3>
              <p className="text-gray-600">
                Each piece is meticulously crafted by our master artisans with decades of experience
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Award className="h-16 w-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-serif font-bold mb-4">Award Winning</h3>
              <p className="text-gray-600">
                Recognized globally for our innovative designs and exceptional quality
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="h-16 w-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-serif font-bold mb-4">Lifetime Warranty</h3>
              <p className="text-gray-600">
                We stand behind the quality of our jewelry with a lifetime warranty
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">Client Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
                <div className="flex mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  {testimonial.text}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-serif font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}