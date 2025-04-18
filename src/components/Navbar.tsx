import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Diamond, Menu, X, Search, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWomenMenuOpen, setIsWomenMenuOpen] = useState(false);
  const [isMenMenuOpen, setIsMenMenuOpen] = useState(false);
  const [isCollectionsMenuOpen, setIsCollectionsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const womenMenuRef = useRef<HTMLDivElement>(null);
  const menMenuRef = useRef<HTMLDivElement>(null);
  const collectionsMenuRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/collections?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const navigateToCollection = (category: string) => {
    navigate(`/collections?category=${encodeURIComponent(category)}`);
    setIsWomenMenuOpen(false);
    setIsMenMenuOpen(false);
    setIsCollectionsMenuOpen(false);
    setIsOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        womenMenuRef.current &&
        !womenMenuRef.current.contains(event.target as Node)
      ) {
        setIsWomenMenuOpen(false);
      }
      if (
        menMenuRef.current &&
        !menMenuRef.current.contains(event.target as Node)
      ) {
        setIsMenMenuOpen(false);
      }
      if (
        collectionsMenuRef.current &&
        !collectionsMenuRef.current.contains(event.target as Node)
      ) {
        setIsCollectionsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-2">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://res.cloudinary.com/dcidvttvz/image/upload/v1740777244/logo_ohh01b.jpg"
              alt="RB Jewellers"
              className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] object-contain"
            />
            <span className="text-xl md:text-2xl lg:text-3xl font-serif font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              RB JEWELERS
            </span>
          </Link>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-700 transition-colors font-medium"
            >
              Home
            </Link>

            {/* Women's Dropdown */}
            <div className="relative group" ref={womenMenuRef}>
              <button
                className="flex items-center text-gray-700 hover:text-green-700 transition-colors font-medium"
                onClick={() => {
                  setIsWomenMenuOpen(!isWomenMenuOpen);
                  setIsMenMenuOpen(false);
                  setIsCollectionsMenuOpen(false);
                }}
              >
                Women <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {isWomenMenuOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                  <button
                    onClick={() => navigateToCollection("Women-Rings")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Rings
                  </button>
                  <button
                    onClick={() => navigateToCollection("Women-Necklaces")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Necklaces
                  </button>
                  <button
                    onClick={() => navigateToCollection("Women-Earrings")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Earrings
                  </button>
                  <button
                    onClick={() => navigateToCollection("Women-Bracelets")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Bracelets
                  </button>
                </div>
              )}
            </div>

            {/* Men's Dropdown */}
            <div className="relative group" ref={menMenuRef}>
              <button
                className="flex items-center text-gray-700 hover:text-green-700 transition-colors font-medium"
                onClick={() => {
                  setIsMenMenuOpen(!isMenMenuOpen);
                  setIsWomenMenuOpen(false);
                  setIsCollectionsMenuOpen(false);
                }}
              >
                Men <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {isMenMenuOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                  <button
                    onClick={() => navigateToCollection("Men-Rings")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Rings
                  </button>
                  <button
                    onClick={() => navigateToCollection("Men-Necklaces")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Necklaces
                  </button>
                  <button
                    onClick={() => navigateToCollection("Men-Bracelets")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Bracelets
                  </button>
                  <button
                    onClick={() => navigateToCollection("Men-Watches")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Watches
                  </button>
                </div>
              )}
            </div>

            {/* Collections Dropdown */}
            <div className="relative group" ref={collectionsMenuRef}>
              <button
                className="flex items-center text-gray-700 hover:text-green-700 transition-colors font-medium"
                onClick={() => {
                  setIsCollectionsMenuOpen(!isCollectionsMenuOpen);
                  setIsWomenMenuOpen(false);
                  setIsMenMenuOpen(false);
                }}
              >
                Collections <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {isCollectionsMenuOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                  <button
                    onClick={() => navigateToCollection("Gold")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Gold
                  </button>
                  <button
                    onClick={() => navigateToCollection("Silver")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Silver
                  </button>
                  <button
                    onClick={() => navigateToCollection("Platinum")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Platinum
                  </button>
                  <button
                    onClick={() => navigateToCollection("Diamonds")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Diamonds
                  </button>
                  <button
                    onClick={() => navigateToCollection("Engagement")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Engagement
                  </button>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-gray-700 hover:text-green-700 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-green-700 transition-colors font-medium"
            >
              Contact
            </Link>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-48"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </form>
          </div>
        </nav>
      </div>
    </header>
  );
}
