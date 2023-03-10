import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MutatingDots } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import axios, { BaseUrl } from "../Api/axios";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  // const [currentPassword, setCurrentPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  const [input, setInput] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const inputChange = (e) => {
    let { name, value } = e.target;

    setInput((prev) => ({ ...prev, [name]: value }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;

    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "currentPassword":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          }
          break;

        case "newPassword":
          if (!value) {
            stateObj[name] = "Please enter newPassword.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const updatePassword = () => {
    setLoading(true);

    var data = {
      currentPassword: input.currentPassword,
      password: input.newPassword,
    };

    var config = {
      method: "patch",
      url: `${BaseUrl}updatePassword`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };
    console.log("this token", token);

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setLoading(false);
        toast.success("Password Updated Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
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
          toast.error("wrong password", {
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

  const User = localStorage.getItem("user");
  const appUser = JSON.parse(User);
  console.log("appUser", appUser._doc);

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
                      value={
                        appUser.role == "admin"
                          ? appUser.firstName
                          : appUser._doc.firstname
                      }
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
                      value={
                        appUser.role == "admin"
                          ? appUser.lastName
                          : appUser._doc.lastname
                      }
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
                    value={
                      appUser.role == "admin"
                        ? appUser.email
                        : appUser._doc.email
                    }
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
                  {appUser.role == "admin"
                    ? appUser.firstName + " " + appUser.lastName
                    : appUser._doc.firstname + " " + appUser._doc.lastname}
                </h1>
                {/* <input type="file" name="Edit Photo" id="edit photo" /> */}
                <p className="text-[#EE095B] text-[14px] font-[600] cursor-pointer">
                  Edit Photo
                </p>
              </div>
            </section>
            {/* last form  */}
            <div className="flex flex-col gap-6 p-4 w-[400px] min-h-[300px] bg-white rounded-[10px]">
              <h2 className="text-[14px] font-[500] text-[#0D233D]">
                Password
              </h2>
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
                    name="currentPassword"
                    id="current"
                    value={input.currentPassword}
                    onChange={inputChange}
                    onBlur={validateInput}
                  />
                  {error.currentPassword && (
                    <span className="text-red-500">
                      {error.currentPassword}
                    </span>
                  )}{" "}
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
                  name="newPassword"
                  id="new"
                  value={input.newPassword}
                  onChange={inputChange}
                  onBlur={validateInput}
                />
                {error.newPassword && (
                  <span className="text-red-500">{error.newPassword}</span>
                )}
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
                  name="confirmPassword"
                  id="confirm"
                  value={input.confirmPassword}
                  onChange={inputChange}
                  onBlur={validateInput}
                />
                {error.confirmPassword && (
                  <span className="text-red-500">{error.confirmPassword}</span>
                )}
              </div>
              <Button
                ButtonText="Save Changes"
                ClassName="w-[136px] h-[40px] bg-[#EE095B] rounded-[5px] text-white text-[14px] font-[600]"
                HandleOpen={updatePassword}
              />
            </div>
          </div>
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

export default Profile;
