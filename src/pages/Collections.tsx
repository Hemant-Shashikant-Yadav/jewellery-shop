import React, { useState } from 'react';

const collections = [
  {
    id: 1,
    name: "Royal Diamonds",
    category: "Engagement",
    price: "From $5,000",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Vintage Elegance",
    category: "Necklaces",
    price: "From $2,500",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Modern Romance",
    category: "Rings",
    price: "From $1,800",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Pearl Essence",
    category: "Earrings",
    price: "From $1,200",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Sapphire Dreams",
    category: "Bracelets",
    price: "From $3,500",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Emerald Allure",
    category: "Necklaces",
    price: "From $4,200",
    image: "https://images.unsplash.com/photo-1599459183200-59c7687a0275?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Diamond Infinity",
    category: "Engagement",
    price: "From $6,500",
    image: "https://images.unsplash.com/photo-1544917567-3e10286bc57e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Ruby Romance",
    category: "Rings",
    price: "From $2,800",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Ocean Pearl",
    category: "Earrings",
    price: "From $1,500",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Golden Heritage",
    category: "Bracelets",
    price: "From $3,200",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    name: "Platinum Elite",
    category: "Engagement",
    price: "From $7,500",
    image: "https://images.unsplash.com/photo-1595781572981-d63151b232ed?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    name: "Crystal Cascade",
    category: "Necklaces",
    price: "From $2,900",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Rings", "Necklaces", "Earrings", "Bracelets", "Engagement"];

  const filteredCollections = selectedCategory === "All"
    ? collections
    : collections.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-24 bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-serif font-bold text-center mb-6">Our Collections</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Discover our exquisite jewelry collections, each piece carefully crafted to perfection.
          From timeless classics to contemporary designs, find the perfect piece to tell your story.
        </p>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border-2 transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? 'border-purple-600 bg-purple-600 text-white shadow-lg'
                  : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Collections Grid */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((collection) => (
            <div
              key={collection.id}
              className="group transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative aspect-w-4 aspect-h-3">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 text-purple-600 text-sm rounded-full shadow-lg backdrop-blur-sm">
                      {collection.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-2">{collection.name}</h3>
                  <p className="text-purple-600 font-semibold">{collection.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}