import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dots from "../../assets/dots.png";
import SkeletonElement from "../Skeleton/SkeletonElement";
// import ReplyTicket from "./ReplyTicket";

const TicketMessage = ({ ticketDetails, replyHandle, openReply, skloader }) => {
  const [drop, setDrop] = useState(false);
  // const [openReply, setOpenReply] = useState(false);

  const handleDrop = () => {
    setDrop(!drop);
  };

  // function replyHandle() {
  //   setOpenReply(!openReply);
  // }

  return (
    <Fragment>
      <div className="bg-white mt-7 min-w-[97.6vh] min-h-[90vh] rounded-[10px]">
        <div className="flex justify-between items-center bg-white p-5 rounded-[10px]">
          <div>
            #{ticketDetails?.ticketId} <span>{ticketDetails?.title} </span>
          </div>
          <img
            className="relative cursor-pointer"
            src={Dots}
            alt=""
            onClick={handleDrop}
          />
        </div>
        {drop && (
          <div
            class={
              openReply
                ? "hidden"
                : "absolute right-10 z-10 p-2 w-[100px] min-h-[96px] rounded-[10px] box-border mt-[-20px]  origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            }
          >
            <div className="flex flex-col justify-start gap-3 pt-2">
              <h4 className="text-[12px] cursor-pointer" onClick={replyHandle}>
                {" "}
                Reply
              </h4>
              <h5 className="text-[12px] cursor-pointer" onClick={replyHandle}>
                Reply All
              </h5>
              <h5 className="text-[12px] cursor-pointer">Forward</h5>
            </div>
          </div>
        )}
        {/* message */}
        <section className="flex justify-center items-center mt-2">
          <div className="w-full max-w-[1000px] min-h-[50vh] bg-white rounded-[10px] border-[0.5px] border-[#D9D8DA] border-solid mt-[26px]">
            <p className="text-[16px] break-words font-[300] text-[#0D233D] leading-6 bg-white ml-[24px] mt-[46px]">
              {ticketDetails?.reason}
            </p>
            {skloader &&
              [1, 2, 3, 4, 5, 6].map((n) => <SkeletonElement type="text" />)}
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default TicketMessage;
