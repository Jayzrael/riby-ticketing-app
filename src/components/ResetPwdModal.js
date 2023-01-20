import React, { useEffect, useRef, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";
import axios, { BaseUrl } from "../Api/axios";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MutatingDots } from "react-loader-spinner";

const ResetPwdModal = ({ Close }) => {
  const [errMsg, setErrMsg] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const errRef = useRef();

  useEffect(() => {
    setErrMsg("");
  }, [email]);

  const forgotPassword = (e) => {
    e.preventDefault();

    setLoading(true);

    var data = { email };
    var config = {
      method: "POST",
      url: `${BaseUrl}/qa/resetPassword`,
      headers: {},
      data: data,
    };

    axios(config)
      .then((result) => {
        console.log(JSON.stringify(result.data));
        setLoading(false);
        setEmail("");
        setSuccess(true);
      })
      .catch((err) => {
        const { message } = err.response.data;
        const msg = message[0].message;
        console.log(msg);
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
        <div className="fixed flex justify-center items-center w-full h-full bg-[#0D233D] bg-opacity-[0.7] z-10">
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
      <div className="fixed bg-black bg-opacity-[0.7] w-full h-full">
        <div
          className={
            success
              ? "fixed bg-white w-[400px] h-[40vh]  top-[30%] left-[35%] rounded-[10px]"
              : "fixed bg-white w-[400px] h-[41vh]  top-[30%] left-[35%] rounded-[10px]"
          }
        >
          <GiCancel
            color="red"
            size={20}
            className="absolute right-3 top-2 cursor-pointer"
            onClick={Close}
          />
          <h1 className="text-[20px] font-[600] text-center pt-10 pb-2">
            Reset Password
          </h1>
          <section>
            <p
              ref={errRef}
              className={
                errMsg
                  ? "bg-red-500 text-center text-white text-xs p-2"
                  : "hidden"
              }
              aria-live="assertive"
            >
              {errMsg}
            </p>
          </section>
          {success ? (
            <section className="flex flex-col justify-center items-center">
              <p>Reset password link sent to your email</p>
              <p className="pt-2 text-red-600" onClick={Close}>
                <Link to="/">Back to Login</Link>
              </p>
            </section>
          ) : (
            <section className="flex flex-col justify-center items-center  max-h-[40vh]">
              <p className="text-red-600 text-[12px] pb-2 text-center">
                Provide the email you used to register
              </p>
              <input
                className="flex flex-col w-[304px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]"
                type="email"
                name="email address"
                id="email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
              />
            </section>
          )}
          <section className="flex justify-center items-center">
            <Button
              ButtonText="Reset Password"
              ClassName={
                success
                  ? "hidden"
                  : "bg-[#EE095B] w-[150px] h-[40px] text-white rounded-[5px] text-[14px] font-[600] mt-4"
              }
              HandleOpen={forgotPassword}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default ResetPwdModal;
