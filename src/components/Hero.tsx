import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import logo from "../assets/logo.png";

export const Hero = () => {
  return (
    <div
      className="lg:container h-[654px] mx-auto flex flex-col 
      items-center text-primaryDark dark:text-primaryWhite"
    >
      <Avatar
        className="mt-[75px] mb-[32px]"
        src={logo}
        sx={{ width: 160, height: 160 }}
      >
        EB
      </Avatar>
      <h2 className="text-[1.5rem] mb-[28px]">Hi, I'm Eliuth 👋</h2>
      <h1 className="text-[2rem] xl:text-[3rem] text-center  font-bold">
        Front-End Developer 🚀
      </h1>
      <div className=" w-full h-full flex flex-col lg:flex-row items-center justify-evenly lg:justify-center ">
        <Link
          to="https://www.linkedin.com/in/eliuth-bompart-in/"
          target="_blank"
        >
          <button
            className="w-[214px] h-[66px] xl:w-[230px] xl:h-[80px] font-bold bg-secondaryBlack text-secodaryWhite
        hover:bg-primaryBlack hover:text-primaryWhite dark:bg-secodaryWhite dark:text-secondaryBlack  
        hover:dark:bg-primaryWhite hover:dark:text-primaryBlack rounded-full transition-all 
        duration-300 ease-in-out lg:mr-4"
          >
            About Me <WebStoriesIcon />
          </button>
        </Link>
        <Link to="/" target="_blank">
          <button
            className="w-[214px] h-[66px] xl:w-[230px] xl:h-[80px] font-bold bg-secondaryBlack text-secodaryWhite
        hover:bg-primaryBlack hover:text-primaryWhite dark:bg-secodaryWhite dark:text-secondaryBlack  
        hover:dark:bg-primaryWhite hover:dark:text-primaryBlack rounded-full transition-all 
        duration-300 ease-in-out"
          >
            Projects <WebStoriesIcon />
          </button>
        </Link>
      </div>
    </div>
  );
};
