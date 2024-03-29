import React from "react";
import Inbox from "../assets/minbox.png";
import Notification from "../assets/mbell.png";
import Profile from "../assets/profile.png";
import ArrowDown from "../assets/arrowdown.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios, { BaseUrl } from "../Api/axios";
import { useSignOut } from "react-auth-kit";
import { Avatar, styled } from "@mui/material";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.common.white,
}));

const Navbar = () => {
  const [drop, setDrop] = useState(false);

  const whoIs = localStorage.getItem("user");
  const appUser = JSON.parse(whoIs);

  const handleMenu = () => {
    setDrop(!drop);
  };

  const logOut = useSignOut();

  const Navigate = useNavigate();

  const signOut1 = () => {
    logOut();
    Navigate("/");
    // var config = {
    //   method: "get",
    //   maxBodyLength: Infinity,
    //   url: "logout",
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //     Navigate("/");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  const signOut2 = () => {
    logOut();
    Navigate("/agent-login");

    // var config = {
    //   method: "get",
    //   maxBodyLength: Infinity,
    //   url: "logout",
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //     Navigate("/agentLogin");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  return (
    <>
      <div className="fixed w-[80%] z-[1]">
        <div className="min-w-[30vh] flex-1 h-[64px] bg-white flex justify-end items-center gap-6 p-4">
          <div className="cursor-pointer">
            {/* <img src={Inbox} alt="" /> */}
          </div>
          <div className="cursor-pointer">
            {/* <img src={Notification} alt="" /> */}
          </div>
          <div className="cursor-pointer">
            <Link to="">
              <StyledAvatar>
                {appUser.role == "admin"
                  ? appUser.firstName[0] + appUser.lastName[0]
                  : appUser.firstname[0] + appUser.lastname[0]}
              </StyledAvatar>
            </Link>
          </div>
          <div className="relative pr-10 cursor-pointer" onClick={handleMenu}>
            <img src={ArrowDown} alt="" />
            {drop && (
              <div class="absolute right-0 z-10 p-3 w-[136px] h-[96px] rounded-[10px] box-border mt-8  origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="flex flex-col justify-start gap-3 pt-2">
                  <Link
                    to="/profile"
                    class="text-gray-700 text-[12px] font-[400]"
                  >
                    Profile
                  </Link>
                  <a
                    className="text-red-700 w-full text-[12px] font-[400] cursor-pointer"
                    onClick={appUser.role == "admin" ? signOut1 : signOut2}
                  >
                    Sign out
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
