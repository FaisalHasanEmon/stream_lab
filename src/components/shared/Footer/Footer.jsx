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
      <div className=" container mx-auto px-5 flex flex-col items-center justify-center space-y-[60px]">
        <figure className="mx-auto">
          <img src="/Logo/Logo.png" alt="Logo" />
        </figure>

        <ul className=" flex justify-center items-center gap-[50px]">
          {footerTabs?.map((item) => (
            <li className="text-2xl font-normal" key={item?.id}>
              <Link to={item?.link}>{item?.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
