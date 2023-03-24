import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Button from "./Button";
import { toast, ToastContainer } from "react-toastify";
import { MutatingDots } from "react-loader-spinner";
import axios, { BaseUrl } from "../Api/axios";
import { GiCancel } from "react-icons/gi";

const style = {
  position: "fixed",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "352px",
  height: "100%",
  bgcolor: "background.paper",
  borderRadius: "10px",
  p: 4,
  overflow: "scroll",
};

export default function CustomerFormPage({ Open, HandleClose }) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ticketTitle, setTicketTitle] = useState("");
  const [reason, setReason] = useState("");
  const [callType, setCallType] = useState(["Inquiry", "Complaint"]);
  const [productCategory, setProductCategory] = useState([
    "Riby Cobanking",
    "Riby Go",
    "Riby Agent Network",
    "Riby Co-Agent",
  ]);
  const [loading, setLoading] = useState(false);

  const create = (e) => {
    e.preventDefault();

    setLoading(true);
    console.log(loading);

    var data = {
      firstName: firstname,
      lastName: lastname,
      email,
      tell: phone,
      title: ticketTitle,
      callType,
      productCategory,
      reason,
    };
    var config = {
      method: "POST",
      url: `${BaseUrl}/tickets`,
      headers: {},
      data: data,
    };

    axios(config)
      .then((result) => {
        console.log(JSON.stringify(result.data));
        setLoading(false);
        toast.success("Ticket Created Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setEmail("");
        setFirstName("");
        setLastName("");
        setPhone("");
        setReason("");
        setTicketTitle("");
        setTimeout(() => {
          HandleClose();
        }, 1000);
      })
      .catch((err) => {
        setLoading(false);
        const message = err.response.data;
        console.log("error", message);
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
      <div
        className={
          loading
            ? ""
            : "fixed bg-black bg-opacity-[0.7] w-screen h-screen z-10"
        }
      >
        <div className="fixed w-[352px] h-[70vh] p-4 overflow-scroll translate-x-[-15%] translate-y-[-19%] bg-white rounded-[10px] top-[30%] left-[40%]">
          <GiCancel
            color="red"
            size={20}
            className="absolute right-3 top-2 cursor-pointer"
            onClick={HandleClose}
          />
          {/* {success ? } */}
          <h1 className="text-[20px] font-[600] text-center pt-10 pb-10">
            Create Ticket
          </h1>
          <section className="flex justify-center items-center gap-4 pb-5">
            <div>
              <label
                className="flex flex-col text-[10px] font-[500] pb-1"
                htmlFor="first name"
              >
                First Name
              </label>
              <input
                className="flex flex-col w-[144px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]"
                type="text"
                name="first name"
                id="first name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                value={firstname}
                placeholder="First Name"
              />
            </div>
            <div>
              <label
                className="flex flex-col text-[10px] font-[500] pb-1"
                htmlFor="last name"
              >
                Last Name
              </label>
              <input
                className="flex flex-col w-[144px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]"
                type="text"
                name="first name"
                id="first name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                value={lastname}
                placeholder="Last Name"
              />
            </div>
          </section>
          <section className="flex justify-center itens-center pb-5">
            <div>
              <label
                className="flex flex-col text-[10px] font-[500] pb-1"
                htmlFor="email address"
              >
                Email Address
              </label>
              <input
                className="flex flex-col w-[304px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]"
                type="email"
                name="email address"
                id="email address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder="Email Address"
              />
            </div>
          </section>
          <section className="flex justify-center itens-center pb-5">
            <div>
              <label
                className="flex flex-col text-[10px] font-[500] pb-1"
                htmlFor="phone number"
              >
                Phone Number
              </label>
              <input
                className="flex flex-col w-[304px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]"
                type="tel"
                name="phone number"
                id="phone number"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                value={phone}
                placeholder="Phone Number"
              />
            </div>
          </section>
          <section className="flex justify-center itens-center pb-5">
            <div>
              <label
                className="flex flex-col text-[10px] font-[500] pb-1"
                htmlFor="email address"
              >
                Ticket Title
              </label>
              <input
                className="flex flex-col w-[304px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]"
                type="text"
                name="ticket title"
                id="ticket title"
                onChange={(e) => {
                  setTicketTitle(e.target.value);
                }}
                value={ticketTitle}
                placeholder="Ticket Title"
              />
            </div>
          </section>
          <section className="flex justify-center itens-center pb-5">
            <div>
              <label
                className="flex flex-col text-[10px] font-[500] pb-1"
                htmlFor="call type"
              >
                Call Type
              </label>
              <select
                onChange={(e) => {
                  setCallType(e.target.value);
                }}
                value={callType}
                className="flex flex-col w-[304px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 pt-2 outline-none text-[14px] font-[400]"
              >
                <option value="All Tickets(24)">Select</option>
                <option value="inquiry">Inquiry</option>
                <option value="complaint">Complaint</option>
              </select>
            </div>
          </section>
          <section className="flex justify-center itens-center pb-5">
            <div>
              <label
                className="flex flex-col text-[10px] font-[500] pb-1"
                htmlFor="product category"
              >
                Product Category
              </label>
              <select
                onChange={(e) => {
                  setProductCategory(e.target.value);
                }}
                value={productCategory}
                className="flex flex-col w-[304px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 pt-2 outline-none text-[14px] font-[400]"
              >
                <option value="All Tickets(24)">Select</option>
                <option value="riby-co-banking">Riby CoBanking</option>
                <option value="riby-go">Riby Go</option>
                <option value="riby-agent-network">Riby Agent Network</option>
                <option value="riby-co-agent">Riby CoAgent</option>
              </select>
            </div>
          </section>
          <section className="flex justify-center itens-center pb-5">
            <div>
              <label
                className="flex flex-col text-[10px] font-[500] pb-1"
                htmlFor="reason"
              >
                Reason
              </label>
              <textarea
                className="flex flex-col w-[304px] h-[120px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]"
                placeholder="Type reason here"
                value={reason}
                onChange={(e) => {
                  setReason(e.target.value);
                }}
              />
            </div>
          </section>
          <section className="flex justify-center items-center">
            <Button
              ButtonText="Create Ticket"
              ClassName="bg-[#EE095B] w-[304px] h-[40px] text-white rounded-[5px] text-[14px] font-[600]"
              HandleOpen={create}
            />
          </section>{" "}
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
}
