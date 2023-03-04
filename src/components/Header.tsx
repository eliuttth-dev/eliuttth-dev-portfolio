import { useState, useEffect } from "react";
import { BtnDarkTheme } from "./BtnDarkTheme";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Header = () => {
  // STATE VARIABLES
  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth >= 1023 ? false : true
  );
  // CONFIGURATION DEPENDS ON WHAT DEVICE IS VIEWING
  const handleResize = () =>
    window.innerWidth >= 1024 ? setIsMobile(false) : setIsMobile(true);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <header className="w-full h-fit text-primaryBlack dark:text-primaryWhite ">
      <div
        className="xl:container p-1 mx-auto flex
      justify-between items-center relative after:absolute 
      after:bottom-0 after:h-[1px] after:w-full after:bg-secondaryBlack after:dark:bg-primaryWhite"
      >
        {/* GET IN TOUCH CONTAINER */}
        <button
          className="w-[156px] p-1  flex items-center dark:bg-primaryWhite dark:text-primaryBlack
        bg-secondaryBlack text-primaryWhite rounded"
        >
          <div className="p-2 w-fit flex items-center justify-center  rounded-full bg-transparent ">
            <MailOutlineIcon />
          </div>
          <p className="pl-2 font-semibold">Get in touch</p>
        </button>

        {/* NAVIGATION */}
        <nav className="w-fit flex items-center">
          <BtnDarkTheme />
          {isMobile ? (
            <>
              <Link
                to="https://www.linkedin.com/in/eliuth-bompart-in"
                target="_blank"
              >
                <LinkedInIcon className="ml-2" sx={{ fontSize: "2rem" }} />
              </Link>
              <Link to="https://github.com/eliuttth-dev" target="_blank">
                <GitHubIcon className="ml-2" sx={{ fontSize: "2rem" }} />
              </Link>
            </>
          ) : (
            <>
              <Link
                to="https://www.linkedin.com/in/eliuth-bompart-in"
                target="_blank"
                className="ml-6 font-bold text-[1.2rem] "
              >
                Linkedin
              </Link>
              <Link
                to="https://github.com/eliuttth-dev"
                target="_blank"
                className="ml-6 font-bold text-[1.2rem] "
              >
                Github
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
