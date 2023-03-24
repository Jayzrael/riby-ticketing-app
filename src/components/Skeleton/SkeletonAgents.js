import React from "react";
import SkeletonElement from "./SkeletonElement";
import "./Skeleton.css";
import Shimmer from "./Shimmer";
import SkeletonAvatar from "antd/es/skeleton/Avatar";

const SkeletonAgents = ({ theme }) => {
  const themeClass = theme || "light";
  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="flex justify-center items-center gap-3 ml-2">
        <SkeletonElement type="avatar" /> <SkeletonElement type="ticket" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonAgents;
