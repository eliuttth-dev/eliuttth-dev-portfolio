import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import { Link } from "react-router-dom";
import dashboard_img from "../assets/dashboard-app-project.jpg";
export const Projects = () => {
  return (
    <div className="w-full min-h-screen text-primaryBlack dark:text-primaryWhite">
      <div className="lg:container px-4 mx-auto w-full h-full flex flex-col items-center justify-center ">
        <Link
          to="https://dashboardapp-eliuth-dev.netlify.app"
          target="_blank"
          className="relative mt-8 p-2 md:p-4 bg-secodaryWhite shadow-lg dark:bg-secondaryBlack rounded-xl "
        >
          <img
            src={dashboard_img}
            alt="Dashboard App"
            className="w-full hover:bg-slate-100"
          />
          <h2 className="mt-2 md:mt-4">Click here to see this project</h2>
        </Link>
        <h1 className="text-[3rem] font-bold text-center mt-8">
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
