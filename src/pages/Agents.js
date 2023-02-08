// import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { BsCircle } from "react-icons/bs";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import CrmComp from "../components/CrmComp";
import CustomerList from "../lists/CustomerList";
import CustomerFormPage from "../components/CustomerFormPage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AgentForm from "../components/AgentForm";

const Agents = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="flex">
      {open && <AgentForm Close={handleClose} />}
      <Sidebar />
      <div className="w-full h-full">
        <Navbar />
        <section className="bg-slate-100 w-full h-full p-8">
          {/* Agent header  */}
          <div className="flex justify-between items-center ml-11">
            <h1 className="text-[24px] font-[600]">Agents</h1>
            {/* input and button  */}
            <div className="flex gap-4 mr-10">
              <div className={open ? "hidden" : ""}>
                <BsCircle
                  color="#C9C9C9"
                  className="absolute z-10 top-[17.5%] right-[33%]"
                />{" "}
                <input
                  className="relative w-[272px] h-[40px] border-[1px] border-solid border-[#C9C9C9] rounded-[5px] pl-12 outline-none"
                  type="search"
                  name=""
                  id=""
                  placeholder="Search for agents"
                />
              </div>
              <div>
                <Button
                  ButtonText="Create Agent"
                  ClassName="bg-[#EE095B] w-[120px] h-[40px] text-white rounded-[5px] text-[14px] font-[600]"
                  HandleOpen={handleOpen}
                />
              </div>
            </div>
          </div>

          {/* Agents 0.5px solid #D9D8DA*/}
          <div className="mt-16 w-[976px] h-[488px] border-[0.5px] border-solid border-[#D9D8DA] rounded-[10px] ml-10">
            <CrmComp />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Agents;
