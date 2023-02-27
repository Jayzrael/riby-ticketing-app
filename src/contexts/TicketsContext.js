import { createContext, useEffect, useState } from "react";
import axios, { BaseUrl } from "../Api/axios";

export const TicketContext = createContext([]);

const TicketProvider = ({ children }) => {
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    var config = {
      method: "get",
      url: `${BaseUrl}/tickets`,
      headers: {},
    };

    axios(config)
      .then((res) => {
        setTicket(res.data.tickets);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <TicketContext.Provider value={ticket}>{children}</TicketContext.Provider>
  );
};

export default TicketProvider;
