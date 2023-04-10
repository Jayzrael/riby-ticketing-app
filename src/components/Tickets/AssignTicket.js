import React, { useEffect, useRef, useState } from "react";
import { GiCancel } from "react-icons/gi";
import axios, { BaseUrl } from "../../Api/axios";
import Button from "../Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MutatingDots } from "react-loader-spinner";

const AssignTicket = ({ CloseModal, viewDetails }) => {
  const [selectAgent, setSelectAgent] = useState([]);
  const [agent, setAgent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    var config = {
      method: "get",
      url: `${BaseUrl}/agents`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.agents);
        setSelectAgent(response.data.agents);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log("viewdetails o", viewDetails);
  const assign = (id) => {
    setLoading(true);

    var data = { ticketId: viewDetails.id, agentId: `${id}` };

    var config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: "https://dev-apis.riby.ng/cus/api/v1/tickets/assign",
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setLoading(false);
        toast.success("Assigned Successfully!", {
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
          CloseModal();
        }, 1000);
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

  return (
    <>
      {loading && (
        <div className="fixed flex justify-center items-center w-full h-full bg-[#0D233D] bg-opacity-[0.7] z-30 inset-0">
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
      <div className="fixed bg-black bg-opacity-[0.7] w-screen h-screen z-10">
        <div className="fixed w-[352px] h-[240px] bg-white rounded-[10px] top-[30%] left-[40%]">
          <GiCancel
            color="red"
            size={20}
            className="absolute right-3 top-2 cursor-pointer"
            onClick={CloseModal}
          />
          {/* {success ? } */}
          <h1 className="text-[20px] font-[600] text-center pt-10 pb-5">
            Assign TIcket
          </h1>
          <section className="flex justify-center items-center pb-5">
            <div>
              <label
                className="flex flex-col text-[10px] font-[500] pb-1"
                htmlFor="agent"
              >
                Agent
              </label>
              <select
                className="flex flex-col w-[304px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 pt-2 outline-none text-[14px] font-[400]"
                name="agent"
                id="agent"
                value={agent}
                onChange={(e) => {
                  setAgent(e.target.value);
                }}
              >
                <option value="Select Agent">Select Agent</option>
                {selectAgent?.map((agent) => (
                  <option value={agent.id}>
                    {agent.firstname + " " + agent.lastname}
                  </option>
                ))}
              </select>
            </div>
          </section>
          <section className="flex justify-center items-center">
            <Button
              ButtonText="Assign"
              ClassName="bg-[#EE095B] w-[304px] h-[40px] text-white rounded-[5px] text-[14px] font-[600]"
              HandleOpen={() => assign(agent)}
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

export default AssignTicket;
