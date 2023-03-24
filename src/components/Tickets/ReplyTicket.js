import React, { useEffect, useRef, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MutatingDots } from "react-loader-spinner";
import Button from "../Button";
import AuthReq, { BaseUrl } from "../../Api/axios";

const ReplyTicket = ({ handleClose, ticketDetails }) => {
  const [loading, setLoading] = useState(false);
  const [replyId, setReplyId] = useState(null);
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setLoading(true);
    setReplyId(ticketDetails.id);

    var data = {
      id: ticketDetails.id,
      subject,
      message,
    };
    var config = {
      method: "PATCH",
      url: `${BaseUrl}/tickets/reply`,
      headers: {},
      data: data,
    };

    console.log("reply d data", data);

    AuthReq(config)
      .then((result) => {
        console.log(JSON.stringify(result.data));
        setLoading(false);
        toast.success("Message Sent", {
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
          handleClose();
        }, 1000);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
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
          toast.error("Failed", {
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

  // console.log("reply id", replyId);
  // console.log("reply info", ticketDetails);

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
      <div
        className={
          loading
            ? ""
            : "fixed bg-black bg-opacity-[0.7] w-screen h-screen z-10"
        }
      >
        <div className="fixed w-[640px] max-h-[90vh] bg-white rounded-[10px] top-[5%] left-[30%]">
          <GiCancel
            color="red"
            size={20}
            className="absolute right-3 top-2 cursor-pointer"
            onClick={handleClose}
          />
          {/* {success ? } */}
          <h1 className="text-[20px] font-[600] text-center pt-10 ">
            New Message
          </h1>
          {/* First Name  */}
          <form action="" className="flex flex-col justify-center items-center">
            <div className="mb-5">
              <label
                className="flex flex-col text-[10px] font-[500] pb-1"
                htmlFor="first name"
              >
                To
              </label>
              <input
                className="flex flex-col w-[592px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]"
                type="email"
                name="to"
                id="to"
                value={ticketDetails?.email}
                disabled
              />
            </div>
            <div className="mb-5">
              <label
                className="flex flex-col text-[10px] font-[500] pb-1"
                htmlFor="first name"
              >
                Subject
              </label>
              <input
                className="flex flex-col w-[592px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]"
                type="email"
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Input subject here"
              />
            </div>
            <div className="mb-5">
              <label
                className="flex flex-col text-[10px] font-[500] pb-1"
                htmlFor="first name"
              >
                Message
              </label>
              <textarea
                className="w-[592px] h-[216px] border-[1px] border-solid border-[#C9C9C9] outline-none pl-2"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Type message here..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  // console.log("reply d message", message);
                }}
              ></textarea>
            </div>
            <section className="flex justify-center items-center">
              <Button
                ButtonText="Send Message"
                ClassName="bg-[#EE095B] w-[304px] h-[40px] text-white rounded-[5px] text-[14px] font-[600] mb-10"
                HandleOpen={sendMessage}
              />
            </section>
          </form>
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

export default ReplyTicket;
