import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { GiCancel } from "react-icons/gi";
import Button from "./Button";

const CustomerFormPage = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [loading, setLoading] = useState(false)

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full">
        <Navbar />
        <div className="flex justify-center items-center bg-slate-100 w-full h-full p-8">
          <div className=" w-[352px] min-h-[750px] bg-white rounded-[10px]">
            {/* {success ? } */}
            <h1 className="text-[20px] font-[600] text-center pt-10 pb-10">
              Create Ticket
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
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
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
                  htmlFor="email address"
                >
                  Phone Number
                </label>
                <input
                  className="flex flex-col w-[304px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]"
                  type="text"
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
                  htmlFor="email address"
                >
                  Call Type
                </label>
                <select className="flex flex-col w-[304px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]">
                  <option value="All Tickets(24)">Select</option>
                  <option value="Ticket 1">Ticket 1</option>
                  <option value="Ticket 2">Ticket 2</option>
                  <option value="Ticket 3">Ticket 3</option>
                  <option value="Ticket 4">Ticket 4</option>
                </select>
              </div>
            </section>

            <section className="flex justify-center itens-center pb-5">
              <div>
                <label
                  className="flex flex-col text-[10px] font-[500] pb-1"
                  htmlFor="email address"
                >
                  Product Category
                </label>
                <select className="flex flex-col w-[304px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]">
                  <option value="All Tickets(24)">Select</option>
                  <option value="Ticket 1">Ticket 1</option>
                  <option value="Ticket 2">Ticket 2</option>
                  <option value="Ticket 3">Ticket 3</option>
                  <option value="Ticket 4">Ticket 4</option>
                </select>
              </div>
            </section>

            <section className="flex justify-center itens-center pb-5">
              <div>
                <label
                  className="flex flex-col text-[10px] font-[500] pb-1"
                  htmlFor="email address"
                >
                  Reason
                </label>
                <textarea
                  className="flex flex-col w-[304px] h-[120px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]"
                  placeholder="Type reason here"
                />
              </div>
            </section>

            <section className="flex justify-center items-center">
              <Button
                ButtonText="Create Ticket"
                ClassName="bg-[#EE095B] w-[304px] h-[40px] text-white rounded-[5px] text-[14px] font-[600]"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFormPage;
