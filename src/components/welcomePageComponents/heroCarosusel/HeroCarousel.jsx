import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";
import { useLocation } from "react-router-dom";

const moviesData = [
  {
    id: 1,
    title: "Iron Man",
    year: 2025,
    logline:
      "In a gripping tale of courage and discovery, a lone traveler embarks on his final expedition to unearth secrets hidden beneath layers of time and mystery. As he ventures deeper into uncharted lands, every step reveals ancient civilizations, forgotten histories, and dangers that threaten not only his life but the fate of humanity itself.",
    type: "movie",
    genre: ["Action"],
    duration: 128,
    thumbnail_url: "https://i.ibb.co.com/2VV1ZZt/iron-man.jpg",
    trailer_url:
      "https://res.cloudinary.com/dubsxif8w/video/upload/full_films/pqggbovamtb6ximqazpc.m3u8",
    full_film_url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    rent_price: 4.99,
    buy_price: 14.99,
  },
  {
    id: 2,
    title: "Avengers-Endgame",
    year: 2024,
    logline:
      "In a futuristic metropolis plagued by corruption and shadowy conspiracies, one detective races against time to unravel the truth behind a mysterious force threatening the city's fragile peace. Battling powerful enemies and his own demons, he must uncover secrets buried deep in the neon-lit streets before everything falls into chaos.",
    type: "movie",
    genre: ["Sci-Fi", "Thriller"],
    duration: 115,
    thumbnail_url: "https://i.ibb.co.com/WWN3L6cC/avengers-endgame.jpg",
    trailer_url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    full_film_url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    rent_price: 3.99,
    buy_price: 12.99,
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2023,
    logline:
      "When a passionate marine biologist uncovers signs of a hidden civilization beneath the ocean's surface, she embarks on a daring quest filled with peril and wonder. Facing the mysteries of the deep and unexpected alliances, she must protect her discovery from forces eager to exploit it and change the course of history forever.",
    type: "movie",
    genre: ["Adventure", "Fantasy"],
    duration: 142,
    thumbnail_url: "https://i.ibb.co.com/KPCC2HS/interstellar.jpg",
    trailer_url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    full_film_url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    rent_price: 5.49,
    buy_price: 15.99,
  },
  {
    id: 4,
    title: "Avengers End Game",
    year: 2025,
    logline:
      "In a world teetering on the brink of darkness, a young hero discovers ancient warriors hidden away by time. With courage and determination, he must rally these forgotten champions to stand against the encroaching shadows and protect the fragile balance between light and dark, facing impossible odds and forging unbreakable bonds.",
    type: "movie",
    genre: ["Action", "Fantasy"],
    duration: 130,
    thumbnail_url: "https://i.ibb.co.com/WWN3L6cC/avengers-endgame.jpg",
    trailer_url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    full_film_url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    rent_price: 4.49,
    buy_price: 13.99,
  },
  {
    id: 5,
    title: "Hulk",
    year: 2022,
    logline:
      "A poet finds her life forever changed when the whispers carried by the wind reveal voices from another world. Navigating a delicate balance between reality and the mystical, she embarks on a soulful journey to understand these messages, confronting her past and unlocking truths that bind her to a destiny beyond imagination.",
    type: "movie",
    genre: ["Drama", "Romance"],
    duration: 108,
    thumbnail_url: "https://i.ibb.co.com/nMGNd50b/hulk-image.jpg",
    trailer_url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    full_film_url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    rent_price: 3.49,
    buy_price: 11.99,
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);

  const location = useLocation();

  const atUserDashBoard = location?.pathname.includes("/userDashboard/watch")
    ? true
    : false;

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % moviesData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleSlideChange = (newSlide) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setContentVisible(false);

    setTimeout(() => {
      setCurrentSlide(newSlide);
      setContentVisible(true);
      setIsAnimating(false);
    }, 300);
  };

  const truncateText = (text, maxLength = 200) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const currentMovie = moviesData[currentSlide];

  return (
    <div
      className={`relative ${
        atUserDashBoard ? "h-full" : "h-screen"
      }  overflow-hidden `}
    >
      {/* Background Images with Transition */}
      <div
        className={`absolute inset-0  ${
          atUserDashBoard ? "ml-0" : "container mx-auto"
        } `}
      >
        {moviesData.map((movie, index) => (
          <div
            key={movie.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out  ${
              index === currentSlide
                ? "opacity-100 transform translate-x-0"
                : index < currentSlide
                ? "opacity-0 transform -translate-x-full"
                : "opacity-0 transform translate-x-full"
            }`}
          >
            <img
              src={movie.thumbnail_url}
              alt={movie.title}
              className={`h-full w-full ${
                atUserDashBoard ? "object-cover object-top " : "object-cover"
              } `}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,_theme(colors.blackPrimary),_rgba(0,0,0,0.5),_theme(colors.blackPrimary)),linear-gradient(to_top,_theme(colors.blackPrimary),_transparent)]" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div
              className={`transition-all duration-700 ease-out ${
                contentVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Movie Title */}
              <h1
                className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${
                  contentVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                {currentMovie.title}
              </h1>

              {/* Genre */}
              <h2
                className={`text-xl md:text-2xl lg:text-3xl font-semibold text-gray-200 mb-4 transition-all duration-700 delay-200 ${
                  contentVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                {currentMovie.genre.join(", ")}
              </h2>

              {/* Logline */}
              <p
                className={`text-sm md:text-base text-gray-300 mb-8 max-w-xl transition-all duration-700 delay-300 ${
                  contentVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                {window.innerWidth < 768
                  ? truncateText(currentMovie.logline, 150)
                  : currentMovie.logline}
              </p>

              {/* Buttons */}
              <div
                className={`flex gap-4 transition-all duration-700 delay-400 ${
                  contentVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <button className="flex items-center gap-2 bg-bluePrimary hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  <Play size={20} />
                  Watch Now
                </button>
                <button className="border border-bluePrimary hover:border-bluePrimary/60 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/10">
                  Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Progress Bars */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-1">
        {moviesData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            disabled={isAnimating}
            className={`h-1 transition-all duration-300 ${
              index === currentSlide
                ? "bg-blue-500 w-8"
                : "bg-white/30 hover:bg-white/50 w-6"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
