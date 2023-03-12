import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import axios, { BaseUrl } from "../Api/axios";
import close from "../assets/closeticket.png";
import assign from "../assets/assignticket.png";
import deleteTicket from "../assets/deleteticket.png";
import Ticket from "../components/Tickets/Ticket";
import dots from "../assets/dots.png";
import AssignTicket from "../components/Tickets/AssignTicket";
import ViewTicket from "../components/Tickets/ViewTicket";
import EditTicket from "../components/Tickets/EditTicket";
import TablePagination from "@mui/material/TablePagination";

const Home = () => {
  const [ticketData, setTicketData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(undefined);
  const [totalTickets, setTotalTickets] = useState(0);
  const [viewDetails, setViewDetails] = useState({});
  const [showCheckcomp, setShowCheckcomp] = useState(false);
  const [viewTicketMod, setViewTicketMod] = useState(false);
  const [viewEditTicket, setViewEditTicket] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const editTicketMod = () => {
    setViewEditTicket(true);
  };

  const closeEditTicket = () => {
    setViewEditTicket(false);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const CloseModal = () => setOpenModal(false);

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
        setTotalTickets(res.data.tickets.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTicketHandle = (id) => {
    setShowCheckcomp(false);

    var config = {
      method: "delete",
      url: `https://dev-apis.riby.ng/cus/api/v1/tickets/${id}`,
      headers: {},
    };

    axios(config)
      .then(function () {
        // var newTickets = ticketData.filter((item) => item.id !== id);
        // setTicketData(newTickets);
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const closeTicket = (id) => {
    var data = { ticketId: `${id}` };

    var config = {
      method: "patch",
      url: "https://dev-apis.riby.ng/cus/api/v1/tickets/close",
      headers: {},
      data: data,
    };

    axios(config)
      .then(function () {
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setSelectedTicket(e.target.value);
  };

  const viewOneUser = (tickets) => {
    setViewDetails(tickets);
    setShowCheckcomp(!showCheckcomp);
  };

  console.log("ticketState", viewDetails);

  return (
    <>
      <div className="flex w-full min-h-screen">
        {viewEditTicket && (
          <EditTicket closeEditTicket={closeEditTicket} getData={getData} />
        )}
        {openModal && (
          <AssignTicket
            viewDetails={viewDetails}
            CloseModal={CloseModal}
            Open={openModal}
            getData={getData}
          />
        )}
        <Sidebar />
        <div className="w-full h-full">
          <Navbar />
          <div className="bg-slate-100 w-full h-full p-8">
            <section className="flex justify-between">
              <h1 className="text-2xl font-bold">Tickets</h1>
              <div className="flex gap-8">
                <div className={showCheckcomp ? "flex gap-4" : "hidden"}>
                  <div
                    className="flex justify-center text-red-600 items-center gap-1 cursor-pointer"
                    onClick={() => closeTicket(viewDetails.id)}
                  >
                    {" "}
                    <img src={close} alt="" />
                    Close ticket
                  </div>
                  <div
                    className="flex justify-center text-red-600 items-center gap-1 cursor-pointer"
                    onClick={handleOpenModal}
                  >
                    {" "}
                    <img src={assign} alt="" />
                    Assign ticket
                  </div>
                  <div
                    className="flex justify-center items-center gap-1 cursor-pointer"
                    onClick={() => deleteTicketHandle(viewDetails.id)}
                  >
                    {" "}
                    <img src={deleteTicket} alt="" />
                    Delete ticket
                  </div>
                </div>
                <select
                  name="opend"
                  id=""
                  className="p-2 min-w-[184px] outline-none"
                  onChange={handleSelectChange}
                >
                  <option value="All tickets (24)">
                    All tickets ({totalTickets})
                  </option>
                  <option value="opened tickets">Opened Tickets</option>
                  <option value="closed tickets">Closed Tickets</option>
                </select>
              </div>
            </section>
            {/* Tickets */}
            <section className="mt-10">
              {ticketData
                .filter((value) => {
                  if (selectedTicket === "opened tickets") {
                    return value.status === "open";
                  } else if (selectedTicket === "closed tickets") {
                    return value.status === "closed";
                  } else {
                    return value;
                  }
                })
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((tickets) => (
                  <Ticket
                    key={tickets.id}
                    ticket={tickets}
                    TicketTime=""
                    ViewTicketDetail={() => viewOneUser(tickets)}
                    editTicketMod={editTicketMod}
                    HandleOpenModal={handleOpenModal}
                    CloseTicket={() => closeTicket(tickets.id)}
                    DeleteTicket={() => deleteTicketHandle(tickets.id)}
                    TicketPage={`/ticketDetails/${tickets.id}`}
                  />
                ))}
            </section>
          </div>
        </div>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 15, 20]}
        component="div"
        count={ticketData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default Home;
