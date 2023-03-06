import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";

export const ContactMe = () => {
  const emailAddress = "eliuttth@gmail.com";
  return (
    <div className="h-fit text-primaryBlack dark:text-primaryWhite bg-secodaryWhite dark:bg-[#303030]">
      <div
        className="container h-full mx-auto flex flex-col items-center justify-center 
        py-4"
      >
        <h2 className=" text-center text-[2rem] lg:text-[4rem] font-bold">
          Tell me about your <br /> next project
        </h2>
        <Link to={`mailto:${emailAddress}`}>
          <button
            className="w-[300px] h-[150px] lg:w-[600px] mt-[2rem] flex items-center justify-center 
          dark:bg-primaryWhite dark:text-primaryBlack bg-secondaryBlack 
          text-primaryWhite rounded-xl"
          >
            <div className="p-2 w-fit flex items-center justify-center  rounded-full bg-transparent ">
              <MailOutlineIcon sx={{ fontSize: "4rem" }} />
            </div>
            <p className="pl-2 font-bold text-[2rem]">Get in touch</p>
          </button>
        </Link>
      </div>
    </div>
  );
};
