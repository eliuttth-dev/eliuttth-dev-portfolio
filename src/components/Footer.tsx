import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <footer
      className="w-full h-fit text-primaryBlack dark:text-primaryWhite flex
    items-center justify-center "
    >
      <div
        className="w-full xl:container mx-auto flex flex-col justify-center items-center
      md:flex-row md:justify-between p-4"
      >
        <h3 className=" text-[1.25rem]">© 2023 All rights reserved.</h3>
        <div>
          <Link to="https://github.com/eliuttth-dev" target="_blank">
            <GitHubIcon sx={{ fontSize: "3rem" }} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/eliuth-bompart-in"
            target="_blank"
          >
            <LinkedInIcon sx={{ fontSize: "3rem" }} />
          </Link>
        </div>
      </div>
    </footer>
  );
};
