import React from "react";
import SentimentDissatisfiedRoundedIcon from "@mui/icons-material/SentimentDissatisfiedRounded";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <SentimentDissatisfiedRoundedIcon
        style={{ fontSize: "160px", color: "slategray" }}
      />
      <h1 className=" text-[120px] text-gray-500">404</h1>
      <h1 className="text-[30px] text-gray-500">Page not found</h1>
      <div className="flex flex-col justify-center items-center">
        <p className="text-[20px] text-gray-500 text-center">
          Oops...The page you are looking for doesn't exist or <br /> an error
          occured.
        </p>
        <button className="text-white bg-slate-700 w-[140px] h-[40px] mt-5 rounded-[5px] hover:bg-slate-800  transition delay-150 duration-300 ...">
          <Link to="/home">Go back</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
