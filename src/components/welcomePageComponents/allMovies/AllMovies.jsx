import React from "react";
import MovieCard from "../../shared/MovieCard/MovieCard";

const AllMovies = () => {
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
    {
      id: 6,
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
      id: 7,
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
      id: 8,
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
  ];
  return (
    <div className="container mx-auto px-5 mb-20">
      {/* Trending Movies */}
      <div className="space-y-8 py-8 mb-5">
        <h2 className="text-3xl md:text-5xl font-medium">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {moviesData?.map((movie) => (
            <MovieCard key={movie?.id} movie={movie}></MovieCard>
          ))}
        </div>
      </div>
      {/* Latest Dramas */}
      <div className="space-y-8 py-8">
        <h2 className="text-3xl md:text-5xl font-medium">Latest Dramas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {moviesData?.map((movie) => (
            <MovieCard key={movie?.id} movie={movie}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
