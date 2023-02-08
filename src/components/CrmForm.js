import React from "react";
import { useState } from "react";
import Button from "./Button";

const CrmForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
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
            Call Type
          </label>
          <select className="flex flex-col w-[304px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 pt-2 outline-none text-[14px] font-[400]">
            <option value="All Tickets(24)">Select</option>
            <option value="Ticket 1">Inquiry</option>
            <option value="Ticket 2">Complaint</option>
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
          <select className="flex flex-col w-[304px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 pt-2 outline-none text-[14px] font-[400]">
            <option value="All Tickets(24)">Select</option>
            <option value="Ticket 1">Riby CoBanking</option>
            <option value="Ticket 2">Riby Go</option>
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
    </>
  );
};

export default CrmForm;
