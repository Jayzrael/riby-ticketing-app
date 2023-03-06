import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { BsCircle } from "react-icons/bs";
// import Dots from "../assets/dots.png";
import CustomerFormPage from "../components/CustomerFormPage";
import CrmTable from "../components/CrmTable";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios, { BaseUrl } from "../Api/axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Crm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [drop, setDrop] = useState(false);
  const [ticketData, setTicketData] = useState([]);
  const [search, setSearch] = useState("");

  const handleMenu = () => {
    setDrop(!drop);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    var config = {
      method: "get",
      url: `${BaseUrl}/tickets`,
      headers: {},
    };

    axios(config)
      .then((res) => {
        console.log(res.data.tickets);
        setTicketData(res.data.tickets);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex">
      {open && <CustomerFormPage Open={open} HandleClose={handleClose} />}
      <Sidebar />
      <div className="w-full h-full">
        <Navbar />
        <section className="bg-slate-100 w-full h-screen p-8">
          {/* Agent header  */}
          <div className="flex justify-between items-center ml-11">
            <h1 className="text-[24px] font-[600]">CRM</h1>
            {/* input and button  */}
            <div className="flex gap-4 mr-3">
              <div>
                <BsCircle
                  color="#C9C9C9"
                  className="absolute z-10 top-[17.5%] right-[31%]"
                />{" "}
                <input
                  className="relative w-[272px] h-[40px] border-[1px] border-solid border-[#C9C9C9] rounded-[5px] pl-12 outline-none"
                  type="search"
                  name=""
                  id=""
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search for agents"
                />
              </div>
              <div>
                <Button
                  ButtonText="Create Ticket"
                  ClassName="bg-[#EE095B] w-[120px] h-[40px] text-white rounded-[5px] text-[14px] font-[600]"
                  HandleOpen={handleOpen}
                />
              </div>
            </div>
          </div>

          {/* Agents 0.5px solid #D9D8DA*/}
          <div className="mt-16 ">
            <CrmTable
              Search={search}
              ticketData={ticketData}
              TicketPage="/ticketDetails"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Crm;
