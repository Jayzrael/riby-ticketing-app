import { Avatar, styled } from "@mui/material";
import React from "react";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.common.white,
}));

const TicketInformation = ({ ticketDetails }) => {
  return (
    <div className="flex flex-col gap-9 p-5 bg-white w-full min-w-[97.6vh] min-h-[20vh] rounded-[10px] mt-8">
      {/* Name section */}
      <section className="flex justify-between">
        {/* Nmae and email */}
        <div className="flex gap-5">
          <div>
            <StyledAvatar alt={ticketDetails?.firstName} src="." />
          </div>
          <div>
            <div>
              <span className="text-[16px] font-[500]">
                {ticketDetails?.firstName + " " + ticketDetails?.lastName}
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
              {ticketDetails?.agentId.firstname +
                " " +
                ticketDetails?.agentId.lastname}
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
              {ticketDetails?.updatedAt}
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
              {ticketDetails?.deadlineDate}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TicketInformation;
