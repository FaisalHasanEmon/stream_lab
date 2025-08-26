import AllMovies from "../../../components/welcomePageComponents/allMovies/AllMovies";
import HeroCarousel from "../../../components/welcomePageComponents/heroCarosusel/heroCarousel";

const Watch = () => {
  return (
    <section className="mt-10 ">
      <div className="container px-5  ">
        <h2 className="text-[#FEFEFE] text-4xl md:text-6xl lg:text-7xl">
          Welcome Back
        </h2>
        <p className="text-[#C6C6C6] text-[20px]">
          Discover amazing films and earn rewards
        </p>
      </div>
      <div className="mt-7 h-[556px]">
        <HeroCarousel></HeroCarousel>
      </div>
      <div>
        <AllMovies></AllMovies>
      </div>
    </section>
  );
};

export default Watch;
