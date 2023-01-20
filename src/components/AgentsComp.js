// import React, { useEffect } from "react";
// import "../App.css";
// import { useState } from "react";
// import axios, { BaseUrl } from "../Api/axios";

// const AgentsComp = ({ currentItems }) => {
//   return (
//     <>
//       <table className="bg-[#EAEAF0] w-full h-[40px] flex flex-col gap-5 items-center  rounded-r-[10px] rounded-l-[10px] ">
//         <thead className="w-full pl-10">
//           <tr className="flex w-full gap-20">
//             <th>Agent Name</th>
//             <th>Email Address</th>
//             <th>Date Joined</th>
//             <th>Extension</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody className="w-full">
//           {currentItems &&
//             currentItems.map((data) => (
//               <tr key={data.id} className="flex w-full gap-5 pl-10 ">
//                 <td className="p-5 ml-[-28px]">
//                   <span className="bg-[#5410AA] text-white text-[16px] w-[32px] h-[32px] p-[5px] rounded-[50%]">
//                     {data.firstname[0]}
//                     {data.lastname[0]}
//                   </span>{" "}
//                   {data.firstname} {data.lastname}
//                 </td>
//                 <td className="p-5">{data.email}</td>
//                 <td className="p-5">22 jul 2022</td>
//                 <td className="p-5">456</td>
//                 <td className="p-5">active</td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default AgentsComp;

import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const AgentsComp = ({ currentItem }) => {
  return (
    <div>
      {currentItem &&
        currentItem.map((customer, index) => (
          <div className={customer.divClass} key={index}>
            <h2 className="flex justify-center items-center gap-2">
              <img src={customer.Initials} alt="" />{" "}
              <span>{customer.Name}</span>
            </h2>
            <h2>{customer.Email}</h2>
            <h2>{customer.Phone}</h2>
            <h2>{customer.Type}</h2>
            <h2 className="flex justify-center items-center gap-2">
              <span className="">{customer.Category}</span>
            </h2>
            <HiOutlineDotsHorizontal />
          </div>
        ))}
    </div>
  );
};

export default AgentsComp;
