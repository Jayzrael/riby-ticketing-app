import React from "react";
import SkeletonElement from "./SkeletonElement";
import "./Skeleton.css";
import Shimmer from "./Shimmer";

const SkeletonTicket = ({ theme }) => {
  const themeClass = theme || "light";
  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-ticket">
        <SkeletonElement type="ticket" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonTicket;
