import React from "react";
import TicketName from "../../assets/ticketname.png";

const TicketInformation = () => {
  return (
    <div className="flex flex-col gap-9 p-5 bg-white w-full min-w-[97.6vh] min-h-[20vh] rounded-[10px] mt-8">
      {/* Name section */}
      <section className="flex justify-between">
        {/* Nmae and email */}
        <div className="flex gap-5">
          <div>
            <img src={TicketName} alt="" />
          </div>
          <div>
            <div>
              <span className="text-[16px] font-[500]">John Doe</span>
            </div>
            <div>
              <span className="text-[12px] font-[400]">
                jidejohnson@gmail.com
              </span>
            </div>
          </div>
        </div>
        {/* button  */}
        <div>
          <button className="bg-[#C9C9C9] w-[58px] h-[26px] rounded-[5px] text-[12px] font-[500]">
            Open
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
              Chris James
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
              4 Aug 2022 - 9:45AM
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
              20 Aug 2022 - 9:45AM
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TicketInformation;
