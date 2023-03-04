import { Link } from "react-router-dom";

export const Skills = () => {
  return (
    <div className="w-full h-fit dark:bg-primaryBlack dark:text-primaryWhite py-4 ">
      <div className="lg:container mx-auto h-full flex flex-col items-center justify-center ">
        <h2 className=" dark:text-primaryWhite text-center text-[4rem] font-bold">
          Skills
        </h2>
        <div
          className="w-full h-full flex flex-col justify-center items-center py-4
        lg:flex-row lg:flex-wrap cursor-pointer"
        >
          {/* JAVASCRIPT CARD */}

          <div
            className="w-[300px] h-[350px] mb-4 lg:ml-4  flex flex-col items-start justify-end 
           bg-[#f0db4f] rounded-xl px-4 shadow-xl transition-all
           durantion-300 ease-linear hover:-translate-y-2"
          >
            <h2 className="font-bold text-[2rem] mt-4 text-primaryBlack">
              JAVASCRIPT
            </h2>
            <p className="mt-4 mb-4 text-primaryBlack font-semibold">
              2 years using Javascript for Front-End Development
            </p>
          </div>

          {/* TYPESCRIPT CARD */}

          <div
            className="w-[300px] h-[350px] mb-4 lg:ml-4  flex flex-col items-start justify-end 
            bg-[#2d79c7] text-primaryWhite rounded-xl px-4 shadow-xl transition-all
            durantion-300 ease-linear hover:-translate-y-2"
          >
            <h2 className="font-bold text-[2rem] mt-4">TYPESCRIPT</h2>
            <p className="font-semibold mt-4 mb-4 font">
              1 year using Typescript for professional Development
            </p>
          </div>

          {/* REACT CARD */}

          <div
            className="w-[300px] h-[350px] mb-4 lg:ml-4 flex flex-col items-start justify-end 
            bg-[#303030] text-primaryWhite rounded-xl px-4 shadow-xl transition-all
            durantion-300 ease-linear hover:-translate-y-2 "
          >
            <h2 className="font-bold text-[2rem] mt-4">REACT</h2>
            <p className="font-semibold mt-4 mb-4">
              2 years using React for professional Development
            </p>
          </div>

          {/* REDUX CARD */}

          <div
            className="w-[300px] h-[350px] mb-4 lg:ml-4 flex flex-col items-start justify-end 
            bg-[#7749bd] text-primaryWhite rounded-xl px-4 shadow-xl transition-all
            durantion-300 ease-linear hover:-translate-y-2"
          >
            <h2 className="font-bold text-[2rem] mt-4">REDUX</h2>
            <p className="font-semibold mt-4 mb-4">
              1 years using Redux for professional Development
            </p>
          </div>

          {/* TAILWIND CARD */}

          <div
            className="w-[300px] h-[350px] mb-4 lg:ml-4 flex flex-col items-start justify-end 
            bg-[#38bdf8] text-primaryWhite rounded-xl px-4 shadow-xl transition-all
            durantion-300 ease-linear hover:-translate-y-2"
          >
            <h2 className="font-bold text-[2rem] mt-4">TAILWINDCSS</h2>
            <p className="font-semibold mt-4 mb-4">
              1 years using Tailwindcss for professional Development
            </p>
          </div>

          {/* NODE JS CARD */}

          <div
            className="w-[300px] h-[350px] mb-4 lg:ml-4 flex flex-col items-start justify-end 
            bg-[#90c53f] text-[#46483d] rounded-xl px-4 shadow-xl transition-all
            durantion-300 ease-linear hover:-translate-y-2"
          >
            <h2 className="font-bold text-[2rem] mt-4">NODE JS</h2>
            <p className="font-semibold mt-4 mb-4">
              1 years using Node.js for professional Development
            </p>
          </div>

          {/* PYTHON CARD */}

          <div
            className="w-[300px] h-[350px] mb-4 lg:ml-4 flex flex-col items-start justify-end 
            bg-[#3673a5] text-[#ffd342] rounded-xl px-4 shadow-xl transition-all
            durantion-300 ease-linear hover:-translate-y-2"
          >
            <h2 className="font-bold text-[2rem] mt-4">PYTHON</h2>
            <p className="font-semibold mt-4 mb-4">
              1 years using Python for personal projects
            </p>
          </div>

          {/* LEETCODE CARD */}

          <Link to="https://leetcode.com/eliuttth-dev/" target="_blank">
            <div
              className="w-[300px] h-[350px] mb-4 lg:ml-4 flex flex-col items-start justify-end 
            bg-[#eab03c] text-primaryWhite rounded-xl px-4 shadow-xl transition-all
            durantion-300 ease-linear hover:-translate-y-2"
            >
              <h2 className="font-bold text-[2rem] mt-4">LEETCODE</h2>
              <p className="font-semibold mt-4 mb-4">
                I usually use this web to practice my coding and analytics
                skills. CLICK HERE
              </p>
            </div>
          </Link>

          {/*  */}
        </div>
      </div>
    </div>
  );
};
