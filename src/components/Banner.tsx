import WebIcon from "@mui/icons-material/Web";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";

export const Banner = () => {
  return (
    <div className="w-full h-fit bg-secodaryWhite dark:bg-[#303030] dark:text-primaryWhite py-4">
      <div className="lg:container mx-auto h-full flex flex-col items-center justify-center">
        <h2 className=" dark:text-primaryWhite text-center text-[4rem] font-bold">
          Knowledge
        </h2>
        <div
          className="w-full h-full flex flex-col justify-center items-center py-4
        lg:flex-row cursor-pointer "
        >
          {/* UX & UI CARD */}

          <div
            className="w-[300px] h-[350px] mb-4 lg:ml-4 lg:mb-0 flex flex-col items-start justify-end 
           bg-[#272727] text-primaryWhite  rounded-xl px-4 shadow-xl transition-all
           durantion-300 ease-linear hover:-translate-y-2"
          >
            <WebIcon sx={{ fontSize: "3rem" }} />
            <h2 className="font-bold text-[2rem] mt-4">UX & UI</h2>
            <p className="font-light mt-4 mb-4">
              Designing interfaces that are intuitive, efficient, and enjoyable
              to use.
            </p>
          </div>

          {/* WEB & MOBILE CARD */}

          <div
            className="w-[300px] h-[350px] mb-4 lg:ml-4 lg:mb-0 flex flex-col items-start justify-end 
            bg-[#272727] text-primaryWhite rounded-xl px-4 shadow-xl transition-all
            durantion-300 ease-linear hover:-translate-y-2"
          >
            <PhonelinkIcon sx={{ fontSize: "3rem" }} />
            <h2 className="font-bold text-[2rem] mt-4">Web & Mobile App</h2>
            <p className="font-light mt-4 mb-4">
              Transforming ideas into exceptional web and mobile app
              experiences.
            </p>
          </div>

          {/* DEVELOPMENT CARD */}

          <div
            className="w-[300px] h-[350px] mb-4 lg:ml-4 lg:mb-0 flex flex-col items-start justify-end 
            bg-[#272727] text-primaryWhite rounded-xl px-4 shadow-xl transition-all
            durantion-300 ease-linear hover:-translate-y-2"
          >
            <DisplaySettingsIcon sx={{ fontSize: "3rem" }} />
            <h2 className="font-bold text-[2rem] mt-4">Development</h2>
            <p className="font-light mt-4 mb-4">
              Bringing your vision to life with the latest technology and design
              trends.
            </p>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};
