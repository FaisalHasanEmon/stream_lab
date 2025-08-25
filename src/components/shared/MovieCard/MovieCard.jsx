// import React from "react";

// const MovieCard = ({ movie }) => {
//   //   {
//   //   id: 5,
//   //   title: "Hulk",
//   //   year: 2022,
//   //   logline:
//   //     "A poet finds her life forever changed when the whispers carried by the wind reveal voices from another world. Navigating a delicate balance between reality and the mystical, she embarks on a soulful journey to understand these messages, confronting her past and unlocking truths that bind her to a destiny beyond imagination.",
//   //   type: "movie",
//   //   genre: ["Drama", "Romance"],
//   //   duration: 108,
//   //   thumbnail_url: "https://i.ibb.co.com/nMGNd50b/hulk-image.jpg",
//   //   trailer_url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
//   //   full_film_url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
//   //   rent_price: 3.49,
//   //   buy_price: 11.99,
//   // }
//   return (
//     <div className="p-4 bg-[#272727] rounded-xl">
//       {/* Image Section */}
//       <div>
//         <figure className="h-[202px] ">
//           <img
//             src={movie?.thumbnail_url}
//             className="w-full h-full object-cover rounded-xl"
//             alt="Movie Thumbnail"
//           />
//         </figure>
//         <button className="bg-[#B9341C] text-white text-[20px]">Trailer</button>
//       </div>
//       <h3>{movie?.title}</h3>
//       <div>
//         <p>{movie?.type}</p>
//         <div>
//           <p>{movie?.duration}m</p>
//         </div>
//       </div>
//       <p>{movie?.logline}</p>
//       <div></div>
//     </div>
//   );
// };

// export default MovieCard;

import React from "react";
import { Play, Clock, Share2 } from "lucide-react";
import { FaShareFromSquare } from "react-icons/fa6";

const MovieCard = ({ movie }) => {
  // Format duration from minutes to hours and minutes
  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="bg-[#272727] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Movie Poster with Trailer Button */}
      <div className="relative aspect-[16/10] p-4 pb-0">
        <img
          src={movie.thumbnail_url}
          alt={movie.title}
          className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
        />

        {/* Trailer Button Overlay */}
        <div className="absolute bottom-3 left-7">
          <button className="bg-[#B9341C] text-white px-3 py-1.5 rounded-4xl flex items-center gap-2 text-sm font-medium hover:bg-[#9e2e18] transition-colors duration-200">
            <Play size={14} fill="white" />
            Trailer
          </button>
        </div>
      </div>

      {/* Movie Details */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="text-white text-lg font-bold leading-tight">
          {movie.title}
        </h3>

        {/* Movie Info */}
        <div className="flex items-center gap-3 text-gray-400 text-sm">
          <span className="capitalize">{movie.type}</span>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{formatDuration(movie.duration)}</span>
          </div>
        </div>

        {/* Logline */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {movie.logline.length > 60
            ? `${movie.logline.substring(0, 60)}...`
            : movie.logline}
        </p>

        {/* Pricing */}
        <div className="space-y-1 pt-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Rent</span>
            <span className="text-white font-medium">${movie.rent_price}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Buy</span>
            <span className="text-white font-medium">${movie.buy_price}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-3">
          <button className="flex-1 bg-bluePrimary hover:bg-blue-600 text-white py-2.5 px-4 rounded-md font-medium transition-colors duration-200">
            Rent
          </button>
          <button className="flex-1 bg-transparent border border-bluePrimary hover:border-blue-500 text-white py-2.5 px-4 rounded-md font-medium transition-colors duration-200">
            Buy
          </button>
          <button className="bg-transparent   text-bluePrimary p-2.5 rounded-md transition-colors duration-200">
            <FaShareFromSquare size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
