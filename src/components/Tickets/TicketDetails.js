import React, { useEffect, useState } from "react";
import CloseTicket from "../../assets/closeticket.png";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import TicketInformation from "./TicketInformation";
import TicketMessage from "./TicketMessage";
import { Link } from "react-router-dom";
import axios, { BaseUrl } from "../../Api/axios";
import { useParams } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import ReplyTicket from "./ReplyTicket";

const TicketDetails = () => {
  const [ticketDetails, setTicketDetails] = useState();
  const [loading, setLoading] = useState(false);
  const [openReply, setOpenReply] = useState(false);
  const [skloader, setSkloader] = useState(true);

  function replyHandle() {
    setOpenReply(!openReply);
  }

  const handleClose = () => {
    setOpenReply(false);
  };

  const { id } = useParams();
  console.log("id in details", id);

  const getTicket = (id) => {
    var config = {
      method: "get",
      url: `https://dev-apis.riby.ng/cus/api/v1/tickets/${id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log("single ticket", response.data.ticket);
        setTicketDetails(response.data.ticket);
        setSkloader(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getTicket(id);
  }, []);

  const closeTicket = (id) => {
    setLoading(true);

    var data = { ticketId: `${id}` };

    var config = {
      method: "patch",
      url: "https://dev-apis.riby.ng/cus/api/v1/tickets/close",
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (res) {
        console.log(res.data);
        setLoading(false);
        toast.success("Ticket Closed Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        getTicket(id);
      })
      .catch(function (err) {
        setLoading(false);
        console.log(err);
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
          toast.error("Login failed", {
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

  return (
    <>
      {loading && (
        <div className="fixed flex justify-center items-center w-full h-full bg-[#0D233D] bg-opacity-[0.7] z-10 inset-0">
          <MutatingDots
            height="100"
            width="100"
            color="#EE095B"
            secondaryColor="#EE095B"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      {openReply && (
        <ReplyTicket ticketDetails={ticketDetails} handleClose={handleClose} />
      )}

      <div className="flex">
        <Sidebar />
        <div className="w-full h-full">
          <Navbar />
          <section className="bg-slate-100 w-full h-full p-8 mt-20">
            <div className="flex justify-between">
              <div className="flex justify-center items-center">
                <span className="text-[#707070] text-[14px] font-[400]">
                  <Link to="/home">Tickets/</Link>
                </span>
                <span className="text-[#0D233D] text-[24px] font-[600]">
                  Tickets Details
                </span>
              </div>
              <div
                className={
                  ticketDetails?.status === "closed"
                    ? "hidden"
                    : "flex justify-center items-center gap-1 cursor-pointer"
                }
                onClick={() => closeTicket(ticketDetails.id)}
              >
                <img src={CloseTicket} alt="" />{" "}
                <span className="text-red-500 mr-2">Close Ticket</span>
              </div>
            </div>
            <TicketInformation
              ticketDetails={ticketDetails}
              skloader={skloader}
            />
            <TicketMessage
              ticketDetails={ticketDetails}
              replyHandle={replyHandle}
              openReply={openReply}
              skloader={skloader}
            />
          </section>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </>
  );
};

export default TicketDetails;
