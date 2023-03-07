import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import { Link } from "react-router-dom";
export const Projects = () => {
  return (
    <div className="w-full h-screen text-primaryBlack dark:text-primaryWhite">
      <div className="lg:container mx-auto w-full h-full flex flex-col items-center justify-center ">
        <h1 className="text-[3rem] font-bold text-center">
          New projects will be added soon 🔥
        </h1>
        <DashboardCustomizeIcon className="mt-" sx={{ fontSize: "6rem" }} />
        <Link to="/">
          <button className="border-primaryBlack dark:border-primaryWhite mt-8 p-4 border rounded text-[2rem]">
            GO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};
