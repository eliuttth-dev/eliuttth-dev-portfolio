import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
export const Projects = () => {
  return (
    <div className="w-full h-screen text-primaryBlack dark:text-primaryWhite">
      <div className="lg:container mx-auto w-full h-full flex flex-col items-center justify-center ">
        <h1 className="text-[3rem] font-bold text-center">
          New projects will be added soon 🔥
        </h1>
        <DashboardCustomizeIcon className="mt-4" sx={{ fontSize: "6rem" }} />
      </div>
    </div>
  );
};
