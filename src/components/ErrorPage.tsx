import { Link } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
export const ErrorPage = () => {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center
      text-primaryBlack dark:text-primaryWhite"
    >
      <h1 className="text-[2rem] lg:text-[4rem] font-bold text-center">
        Sorry I don't recognize this URL
      </h1>
      <SentimentVeryDissatisfiedIcon
        className="mt-[4rem]"
        sx={{ fontSize: "8rem" }}
      />
      <Link to="/">
        <button className="border-primaryBlack dark:border-primaryWhite mt-8 p-4 border rounded text-[2rem]">
          GO HOME
        </button>
      </Link>
    </div>
  );
};
