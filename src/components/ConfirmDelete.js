import React, { useEffect, useRef, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MutatingDots } from "react-loader-spinner";
import Button from "./Button";

const ConfirmDelete = ({
  closeDel,
  loading,
  deleteTicketHandle,
  viewDetails,
}) => {
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
        <div className="fixed w-[352px] py-[25px] bg-white rounded-[10px] top-[20%] left-[40%]">
          <GiCancel
            color="red"
            size={20}
            className="absolute right-3 top-2 cursor-pointer"
            onClick={closeDel}
          />
          {/* {success ? } */}
          <h1 className="text-[30px] font-[600] text-center pt-2 pb-2">
            Are you sure?
          </h1>
          <section className="flex justify-center itens-center pb-5">
            <p className="p-5 text-center">
              Do you really want to delete this ticket? This process cannot be
              undone
            </p>
          </section>
          <section className="flex justify-center items-center gap-4">
            <Button
              ButtonText="Cancel"
              ClassName="bg-slate-500 w-[100px] h-[40px] text-white rounded-[5px] text-[14px] font-[600]"
              HandleOpen={closeDel}
            />
            <Button
              ButtonText="Delete"
              ClassName="bg-[#EE095B] w-[100px] h-[40px] text-white rounded-[5px] text-[14px] font-[600]"
              HandleOpen={() => deleteTicketHandle(viewDetails.id)}
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
};

export default ConfirmDelete;
