import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import axios, { BaseUrl } from "../Api/axios";
import closeTicket from "../assets/closeticket.png";
import assignTicket from "../assets/assignticket.png";
import deleteTicket from "../assets/deleteticket.png";
import Ticket from "../components/Tickets/Ticket";
import dots from "../assets/dots.png";

const Home = () => {
  const [ticketData, setTicketData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full">
        <Navbar />
        <div className="bg-slate-100 w-full h-screen p-8">
          <section className="flex justify-between">
            <h1 className="text-2xl font-bold">Tickets</h1>
            <div className="flex gap-8">
              <div className={isChecked ? "flex gap-4" : "hidden"}>
                <div className="flex justify-center items-center gap-1 cursor-pointer">
                  {" "}
                  <img src={closeTicket} alt="" />
                  Close ticket
                </div>
                <div className="flex justify-center items-center gap-1 cursor-pointer">
                  {" "}
                  <img src={assignTicket} alt="" />
                  Assign ticket
                </div>
                <div className="flex justify-center items-center gap-1 cursor-pointer">
                  {" "}
                  <img src={deleteTicket} alt="" />
                  Delete ticket
                </div>
              </div>
              <select name="" id="" className="p-2 min-w-[184px] outline-none">
                <option value="All tickets (24)">All tickets (24)</option>
                <option value="All tickets (24)">Ticket 1</option>
                <option value="All tickets (24)">Ticket 2</option>
                <option value="All tickets (24)">Ticket 3</option>
              </select>
            </div>
          </section>

          {/* Tickets */}
          <section className="mt-10">
            {ticketData.map((tickets) => (
              <Ticket
                ticket={tickets}
                TicketTime="1 hour ago"
                HandleOnChange={handleOnChange}
                IsChecked={isChecked}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
