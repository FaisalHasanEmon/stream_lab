import { Link } from "react-router-dom";

const Footer = () => {
  const footerTabs = [
    { id: 1, text: "Home", link: "#" },
    { id: 2, text: "Movie", link: "#" },
    { id: 3, text: "Latest Movie", link: "#" },
    { id: 4, text: "Trending Movie", link: "#" },
  ];
  return (
    <div className="bg-[#272727] py-[60px]">
      <div className=" container mx-auto px-5 flex flex-col items-center justify-center space-y-[30px] md:space-y-[60px]">
        <figure className="w-[120px]">
          <img src="/Logo/Logo.png" alt="Logo" />
        </figure>

        <ul className=" flex flex-col md:flex-row justify-center items-center gap-[18px] md:gap-[50px]">
          {footerTabs?.map((item) => (
            <li className="text-lg font-normal" key={item?.id}>
              <Link to={item?.link}>{item?.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
