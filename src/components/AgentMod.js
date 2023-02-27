import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Modal } from "bootstrap";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { MutatingDots } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import axios from "../Api/axios";
import Button from "./Button";

const AgentMod = ({ CloseMod }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("firstname"));
    setLastName(localStorage.getItem("lastname"));
    setEmail(localStorage.getItem("email"));
  }, []);

  return (
    <>
      <div
        className={
          loading
            ? ""
            : "fixed bg-black bg-opacity-[0.7] w-screen h-screen z-10"
        }
      >
        <div className="fixed w-[352px] h-[350px] bg-white rounded-[10px] top-[20%] left-[40%]">
          <GiCancel
            color="red"
            size={20}
            className="absolute right-3 top-2 cursor-pointer"
            onClick={CloseMod}
          />
          {/* {success ? } */}
          <h1 className="text-[20px] font-[600] text-center pt-10 pb-10">
            Update Agent
          </h1>
          <section className="flex justify-center items-center gap-4 pb-5">
            {/* First Name  */}
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
                readOnly
                value={firstname}
                placeholder="First Name"
              />
            </div>
            {/* Last Name  */}
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
                readOnly
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
                readOnly
                value={email}
                placeholder="Email Address"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AgentMod;
