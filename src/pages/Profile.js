import e from "cors";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import axios, { BaseUrl } from "../Api/axios";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { UserContext } from "../contexts/UserContext";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const userToken = localStorage.getItem("token");
  const token = JSON.parse(userToken);

  const updatePassword = () => {
    var data = { currentPassword, password: newPassword };

    var config = {
      method: "patch",
      url: `${BaseUrl}/updatePassword`,
      headers: {
        Authorization: `Basic ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const User = localStorage.getItem("user");
  const appUser = JSON.parse(User);
  console.log("appUser", appUser._doc);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full">
        <Navbar />

        {/* content  */}
        <div className="flex flex-col gap-4 bg-slate-100 w-full h-full p-8">
          <h1 className="text-[#0D233D] text-[24px] font-[600]">Profile</h1>

          <section className="flex gap-4">
            {/* first form  */}
            <div className="flex flex-col gap-6 p-4 w-[400px] min-h-[280px] bg-white rounded-[10px]">
              <h2 className="text-[14px] font-[500] text-[#0D233D]">
                Personal Information
              </h2>
              <section className="flex gap-4">
                <div>
                  <label
                    className="text-[10px] font-[400] text-[#0D233D]"
                    htmlFor="firstname"
                  >
                    First Name
                  </label>
                  <input
                    className="w-[176px] h-[40px] outline-none bg-white border-[1px] border-solid border-[#C9C9C9] rounded-[5px] pl-2"
                    type="text"
                    name="firstname"
                    value={appUser._doc.firstname}
                    readOnly
                    id="firstname"
                  />
                </div>
                <div>
                  <label
                    className="text-[10px] font-[400] text-[#0D233D]"
                    htmlFor="lastname"
                  >
                    Last Name
                  </label>
                  <input
                    className="w-[176px] h-[40px] outline-none bg-white border-[1px] border-solid border-[#C9C9C9] rounded-[5px] pl-2"
                    type="text"
                    name="lastname"
                    value={appUser._doc.lastname}
                    readOnly
                    id="lastname"
                  />
                </div>
              </section>

              {/* email  */}
              <div>
                <label
                  className="text-[10px] font-[400] text-[#0D233D]"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="w-[368px] h-[40px] outline-none bg-white border-[1px] border-solid border-[#C9C9C9] rounded-[5px] pl-2"
                  type="text"
                  name="email"
                  value={appUser._doc.email}
                  readOnly
                  id="email"
                />
              </div>
            </div>

            {/* profile picture  */}
            <div className="flex flex-col justify-center items-center gap-8 w-[366px] min-h-[288px] bg-white rounded-[10px] border-[0.5px] border-[#D9D8DA] border-solid">
              <div className="relative bg-[#605D66] bg-opacity-[0.4] w-[100px] h-[100px] border-[1px] rounded-full borderblack border-solid">
                <BsFillPersonFill
                  size={90}
                  color="#605D66"
                  className="absolute left-[2px]"
                />
              </div>
              <h1 className="text-[18px] font-[600] text-[#0D233D]">
                {appUser._doc.firstname + " " + appUser._doc.lastname}
              </h1>

              {/* <input type="file" name="Edit Photo" id="edit photo" /> */}
              <p className="text-[#EE095B] text-[14px] font-[600] cursor-pointer">
                Edit Photo
              </p>
            </div>
          </section>

          {/* last form  */}
          <div className="flex flex-col gap-6 p-4 w-[400px] min-h-[300px] bg-white rounded-[10px]">
            <h2 className="text-[14px] font-[500] text-[#0D233D]">Password</h2>
            <section className="">
              <div>
                <label
                  className="text-[10px] font-[400] text-[#0D233D]"
                  htmlFor="current-password"
                >
                  Current Password
                </label>
                <input
                  className="w-[368px] h-[40px] outline-none bg-white border-[1px] border-solid border-[#C9C9C9] rounded-[5px] pl-2"
                  type="Password"
                  name="current-password"
                  id="current"
                  value={currentPassword}
                  onChange={(e) => {
                    setCurrentPassword(e.target.value);
                  }}
                />
              </div>
            </section>

            {/* email  */}
            <div>
              <label
                className="text-[10px] font-[400] text-[#0D233D]"
                htmlFor="email"
              >
                New Password
              </label>
              <input
                className="w-[368px] h-[40px] outline-none bg-white border-[1px] border-solid border-[#C9C9C9] rounded-[5px] pl-2"
                type="password"
                name="new-password"
                id="new"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                className="text-[10px] font-[400] text-[#0D233D]"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                className="w-[368px] h-[40px] outline-none bg-white border-[1px] border-solid border-[#C9C9C9] rounded-[5px] pl-2"
                type="password"
                name="confirm-password"
                id="confirm"
              />
            </div>
            <Button
              ButtonText="Save Changes"
              ClassName="w-[136px] h-[40px] bg-[#EE095B] rounded-[5px] text-white text-[14px] font-[600]"
              HandleOpen={updatePassword}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
