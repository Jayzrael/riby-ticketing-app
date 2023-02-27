import React, { useState, useEffect, useRef, useContext } from "react";
import axios, { BaseUrl } from "../../Api/axios";
import Riby from "../../assets/riby-logo.png";
import { Link, useNavigate } from "react-router-dom";
import ResetPwdModal from "../../components/ResetPwdModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MutatingDots } from "react-loader-spinner";
import { useAuthUser, useSignIn } from "react-auth-kit";

const AgentLogin = () => {
  const Navigate = useNavigate();

  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const signIn = useSignIn();

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    var data = { email, password };
    var config = {
      method: "POST",
      headers: {},
      url: `${BaseUrl}/agents/login`,
      data: data,
    };

    axios(config)
      .then((res) => {
        console.log(JSON.stringify(res.data.user));

        localStorage.setItem("user", JSON.stringify(res.data.user));

        signIn({
          token: res.data.token,
          expiresIn: "3600",
          tokenType: "Bearer",
          authState: { email: data.email },
        });

        setEmail("");
        setPassword("");
        setLoading(false);
        Navigate("/home");
      })
      .catch((err) => {
        setLoading(false);
        const msg = err.message;
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
      });
  };

  return (
    <>
      {show && <ResetPwdModal Show={handleShow} Close={handleClose} />}

      {loading && (
        <div className="fixed flex justify-center items-center w-full h-full bg-[#0D233D] bg-opacity-[0.7]">
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
      <div className="w-screen h-screen bg-[#0D233D]">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="mb-5">
            <img src={Riby} alt="" />
          </div>
          <section>
            <p
              ref={errRef}
              className={
                errMsg ? "bg-red-500 text-white text-xs p-2" : "hidden"
              }
              aria-live="assertive"
            >
              {errMsg}
            </p>
          </section>
          <div className="w-[352px] h-[388px] max-w-[500px] my-7">
            <form
              className="flex flex-col w-full h-full  bg-white rounded-[10px]"
              onSubmit={handleSubmit}
            >
              <h2 className="text-[#0D233D] font-[600] text-[24px] text-center mt-10">
                Sign In
              </h2>
              <div className="flex flex-col justify-center text-[#0D233D] m-4 ">
                <label htmlFor="email">Email Address</label>
                <input
                  className="w-[304px] h-[40px] border-[1px] rounded-[5px] border-[#C9C9C9] border-solid mt-2 text-[14px] font-[400]  pl-3 box-border outline-none"
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email Address"
                />
              </div>
              <div className="flex flex-col justify-center text-[#0D233D] m-4 ">
                <label htmlFor="password">Password</label>
                <input
                  className="w-[304px] h-[40px] border-[1px] rounded-[5px] border-[#C9C9C9] border-solid mt-2 text-[14px] font-[400]  pl-3 box-border outline-none "
                  type="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  placeholder="Password"
                />
              </div>
              <button
                className="w-[304px] h-[40px] bg-[#EE095B] ml-auto mr-auto text-white my-2 rounded-[5px]"
                type="submit"
              >
                Sign In
              </button>
              <p
                className="text-[#EE095B] text-center text-[12px] font-[500] cursor-pointer"
                onClick={handleShow}
              >
                Forgot Password?
              </p>
            </form>
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
    </>
  );
};

export default AgentLogin;
