import { Avatar, styled } from "@mui/material";
import React from "react";
import Moment from "react-moment";
import SkeletonElement from "../Skeleton/SkeletonElement";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.common.white,
}));

const TicketInformation = ({ ticketDetails, skloader }) => {
  return (
    <div className="flex flex-col gap-9 p-5 bg-white w-full min-w-[97.6vh] min-h-[20vh] rounded-[10px] mt-8">
      {/* Name section */}
      <section className="flex justify-between">
        {/* Nmae and email */}
        <div className="flex gap-5">
          <div>
            <StyledAvatar>
              {ticketDetails &&
                ticketDetails?.firstName[0] + ticketDetails?.lastName[0]}
            </StyledAvatar>
          </div>
          <div>
            <div>
              <span className="text-[16px] font-[500]">
                {ticketDetails &&
                  ticketDetails?.firstName + " " + ticketDetails?.lastName}
              </span>
            </div>

            <div>
              <span className="text-[12px] font-[400]">
                {ticketDetails?.email}
              </span>
            </div>
          </div>
        </div>
        {/* button  */}
        <div>
          <button className="bg-[#C9C9C9] w-[58px] h-[26px] rounded-[5px] text-[12px] font-[500]">
            {ticketDetails?.status}
          </button>
        </div>
      </section>

      {/* Assignee section */}
      <section className="flex gap-5">
        <div>
          <div>
            <span className="text-[12px] font-[400] text-[#707070]">
              Assigned to
            </span>
          </div>
          <div>
            <span className="text-[16px] font-[500] text-[#0D233D]">
              {ticketDetails?.agentId &&
                ticketDetails?.agentId?.firstname +
                  " " +
                  ticketDetails?.agentId?.lastname}
            </span>
          </div>
        </div>
        <div>
          <div>
            <span className="text-[12px] font-[400] text-[#707070]">
              Date Created
            </span>
          </div>
          <div>
            <span className="text-[16px] font-[500] text-[#0D233D]">
              <Moment>{ticketDetails?.updatedAt}</Moment>
            </span>
          </div>
        </div>
        <div>
          <div>
            <span className="text-[12px] font-[400] text-[#707070]">
              Date Due
            </span>
          </div>
          <div>
            <span className="text-[16px] font-[500] text-[#0D233D]">
              <Moment>{ticketDetails?.deadlineDate}</Moment>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TicketInformation;
