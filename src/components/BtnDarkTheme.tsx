import { useState, useEffect } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ModeNightIcon from "@mui/icons-material/ModeNight";

export const BtnDarkTheme = () => {
  // STATE VARIABLES
  const [isStored, setIsStored] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("darkMode");
    return storedValue ? JSON.parse(storedValue) : false;
  });
  const body = document.getElementsByTagName("body");

  const toggleTheme = () => {
    setIsStored(!isStored);
  };

  // CHANGE THEME DEPENDS ON WHAT IS ON LOCAL STORAGE
  useEffect(() => {
    switch (isStored) {
      case false:
        body[0].className = "";
        break;
      default:
        body[0].className = "dark";
        break;
    }
    localStorage.setItem("darkMode", JSON.stringify(isStored));
  }, [isStored]);
  return (
    <button onClick={toggleTheme}>
      {isStored === false ? (
        <ModeNightIcon className="" sx={{ fontSize: "2rem" }} />
      ) : (
        <WbSunnyIcon className="" sx={{ fontSize: "2rem" }} />
      )}
    </button>
  );
};
