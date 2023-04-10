import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { BaseUrl, PlainReq } from "../Api/axios";
import close from "../assets/closeticket.png";
import assign from "../assets/assignticket.png";
import deleteTicket from "../assets/deleteticket.png";
import Ticket from "../components/Tickets/Ticket";
import dots from "../assets/dots.png";
import AssignTicket from "../components/Tickets/AssignTicket";
import ViewTicket from "../components/Tickets/ViewTicket";
import EditTicket from "../components/Tickets/EditTicket";
import TablePagination from "@mui/material/TablePagination";
import SkeletonTicket from "../components/Skeleton/SkeletonTicket";
import ConfirmDelete from "../components/ConfirmDelete";
import { toast } from "react-toastify";

const Home = () => {
  const [ticketData, setTicketData] = useState([]);
  const [ticketData2, setTicketData2] = useState([]);
  const [skloader, setSkloader] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(undefined);
  const [totalTickets, setTotalTickets] = useState(0);
  const [totalTickets2, setTotalTickets2] = useState(0);
  const [viewDetails, setViewDetails] = useState({});
  const [showCheckcomp, setShowCheckcomp] = useState(false);
  const [viewEditTicket, setViewEditTicket] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [loading, setLoading] = useState(false);

  const whoIs = localStorage.getItem("user");
  const appUser = JSON.parse(whoIs);

  const adminToken = localStorage.getItem("token");
  const AdminToken = JSON.parse(adminToken);

  const agentToken = localStorage.getItem("agentToken");
  const token = JSON.parse(agentToken);

  const handleOpenDel = () => {
    setConfirmDelete(!confirmDelete);
  };
  const closeDel = () => {
    setConfirmDelete(false);
  };

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
    if (appUser.role === "admin") {
      getData();
    } else {
      getData2();
    }
  }, []);

  const getData = () => {
    var config = {
      method: "get",
      url: `${BaseUrl}/tickets`,
      headers: {},
    };

    PlainReq(config)
      .then((res) => {
        console.log(res.data.tickets);
        setTicketData(res.data.tickets);
        setTotalTickets(res.data.tickets.length);
        setSkloader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("total admin tickets", totalTickets);

  const getData2 = () => {
    var config = {
      method: "get",
      url: "https://dev-apis.riby.ng/cus/api/v1/tickets/agent",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    PlainReq(config)
      .then((res) => {
        console.log("agent tickets", res.data);
        setTicketData2(res.data.tickets);
        setTotalTickets2(res.data.tickets.length);
        setSkloader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("bearer token", token);

  console.log("total agentntickets", totalTickets2);

  const deleteTicketHandle = (id) => {
    setLoading(true);

    setShowCheckcomp(false);

    var config = {
      method: "delete",
      url: `https://dev-apis.riby.ng/cus/api/v1/tickets/${id}`,
      headers: {},
    };

    PlainReq(config)
      .then(function () {
        if (appUser.role === "admin") {
          getData();
        } else {
          getData2();
        }

        setLoading(false);
        toast.success("Ticket Deleted!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          closeDel();
        }, 1000);
        getData();
      })
      .catch(function (err) {
        console.log(err);
        setLoading(false);
        if (!err?.response) {
          toast.error("No server response", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else if (err.response?.status === 400) {
          toast.error("invalid email or password", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else if (err.response?.status === 401) {
          toast.error("Unauthorized", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.error("failed", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        setLoading(false);
      });
  };

  const closeTicket = (id) => {
    var data = { ticketId: `${id}` };

    var config = {
      method: "patch",
      url: "https://dev-apis.riby.ng/cus/api/v1/tickets/close",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AdminToken}`,
      },
      data: data,
    };

    PlainReq(config)
      .then(function () {
        if (appUser.role === "admin") {
          getData();
        } else {
          getData2();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setSelectedTicket(e.target.value);
  };

  const setAssignID = (tickets) => {
    setViewDetails(tickets);
  };

  const viewOneUser = (tickets) => {
    setViewDetails(tickets);
    setShowCheckcomp(!showCheckcomp);
  };

  return (
    <>
      <div className="flex w-full min-h-screen">
        {confirmDelete && (
          <ConfirmDelete
            closeDel={closeDel}
            loading={loading}
            viewDetails={viewDetails}
            deleteTicketHandle={deleteTicketHandle}
          />
        )}
        {viewEditTicket && (
          <EditTicket
            closeEditTicket={closeEditTicket}
            getData={appUser.role === "admin" ? getData : getData2}
          />
        )}
        {openModal && (
          <AssignTicket
            viewDetails={viewDetails}
            CloseModal={CloseModal}
            Open={openModal}
            getData={appUser.role === "admin" ? getData : getData2}
          />
        )}
        <Sidebar />
        <div className="w-full h-full">
          <Navbar />
          <div className="bg-slate-100 w-full h-full p-8 mt-20">
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
                    className={
                      appUser.role === "admin"
                        ? "flex justify-center text-red-600 items-center gap-1 cursor-pointer"
                        : "hidden"
                    }
                    onClick={handleOpenModal}
                  >
                    {" "}
                    <img src={assign} alt="" />
                    Assign ticket
                  </div>
                  <div
                    className={
                      appUser.role === "admin"
                        ? "flex justify-center items-center gap-1 cursor-pointer"
                        : "hidden"
                    }
                    onClick={handleOpenDel}
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
                    All tickets (
                    {appUser.role === "admin" ? totalTickets : totalTickets2})
                  </option>
                  <option value="opened tickets">Opened Tickets</option>
                  <option value="closed tickets">Closed Tickets</option>
                </select>
              </div>
            </section>
            {/* Tickets */}
            <section className="mt-10">
              {appUser.role === "admin"
                ? ticketData
                    .slice(0)
                    .reverse()
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
                        handleOpenDel={handleOpenDel}
                        setAssignID={() => setAssignID(tickets)}
                      />
                    ))
                : ticketData2
                    .slice(0)
                    .reverse()
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
                        // DeleteTicket={() => deleteTicketHandle(tickets.id)}
                        TicketPage={`/ticketDetails/${tickets.id}`}
                        handleOpenDel={handleOpenDel}
                      />
                    ))}
              {skloader &&
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => <SkeletonTicket />)}
              <TablePagination
                rowsPerPageOptions={[10, 15, 20]}
                component="div"
                count={
                  appUser.role === "admin"
                    ? ticketData.length
                    : ticketData2.length
                }
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
