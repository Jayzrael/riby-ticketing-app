import { createContext, useEffect, useState } from "react";
import axios from "../Api/axios";

export const UserContext = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect((e) => {
    var data = {
      email: "israel.omole@riby.ng",
      password: "password",
    };

    var config = {
      method: "post",
      url: "https://dev-apis.riby.ng/cus/api/v1/login",
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        setUser(response.data.user);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default Context;
