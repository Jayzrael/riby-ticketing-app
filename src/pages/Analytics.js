import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AgentCard from "../lists/AgentCard";
import { useState } from "react";
import Chart from "react-apexcharts";
import AnalyticsCard from "../components/AnalyticsCard";
import ResponseCard from "../components/ResponseCard";
import { AiFillStar } from "react-icons/ai";
import GreenReview from "../assets/greenreview.png";
import YellowReview from "../assets/yellowreview.png";
import RedReview from "../assets/redreview.png";
import { GoPrimitiveDot } from "react-icons/go";
import axios, { BaseUrl } from "../Api/axios";
import CountCards from "../components/CountCards";

const Analytics = () => {
  const [count, setCount] = useState();
  const [count2, setCount2] = useState();
  const [count3, setCount3] = useState();
  const [count4, setCount4] = useState();

  // const appUser = useContext(UserContext);

  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
      },
    },
    series: [
      {
        name: "Average Response Time",
        data: [3, 4, 4, 5, 4, 6, 7, 9],
      },
      {
        name: "Average Wait Time",
        data: [2, 3, 4, 3, 2, 5, 6, 8],
      },
      {
        name: "Average Resolution Time",
        data: [2, 3, 4, 3, 2, 5, 6, 8],
      },
    ],
  });

  const AgentCard2 = [
    {
      Title: "Total Open Tickets",
      Count: count2,
      CountColor: "text-[18px] font-[600] text-orange-400",
    },
    {
      Title: "Total Closed Tickets",
      Count: count3,
      CountColor: "text-[18px] font-[600] text-green-600",
    },
    {
      Title: "Total Overdue Tickets",
      Count: count4,
      CountColor: "text-[18px] font-[600] text-red-500",
    },
  ];

  const AgentCard3 = [
    {
      Title: "Total Closed Tickets",
      Count: count3,
      CountColor: "text-[18px] font-[600] text-green-600",
    },
    {
      Title: "Total Overdue Tickets",
      Count: count4,
      CountColor: "text-[18px] font-[600] text-red-500",
    },
  ];

  useEffect(() => {
    var config = {
      method: "get",
      url: `${BaseUrl}/agents/count`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setCount(response.data.numberOfAgents);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  useEffect(() => {
    var config = {
      method: "get",
      url: `${BaseUrl}/tickets`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setCount2(response.data.tickets.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  useEffect(() => {
    var config = {
      method: "get",
      url: `${BaseUrl}/tickets/closed`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setCount3(response.data.closedTickets);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  useEffect(() => {
    var config = {
      method: "get",
      url: `${BaseUrl}/tickets/overdue`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setCount4(response.data.overdueTickets);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  const who = localStorage.getItem("user");
  const appUser = JSON.parse(who);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full max-h-full">
        <Navbar />
        <div className="bg-slate-100 w-full h-full p-8 mt-20">
          {appUser.role === "admin" ? (
            <div>
              <section>
                <h1 className="text-[24px] font-[600] text-[#0D233D] mb-5">
                  Analytics
                </h1>
              </section>

              {/* cards  0.5px solid #F1F1F1*/}
              <section className="flex gap-4 mb-5">
                <CountCards
                  Title="Total Agents"
                  CountColor="text-[18px] font-[600] "
                  Count={count}
                />
                <CountCards
                  Title="Total Open Tickets"
                  CountColor="text-[18px] font-[600] text-orange-400"
                  Count={count2}
                />
                <CountCards
                  Title="Total Closed Tickets"
                  CountColor="text-[18px] font-[600] text-green-600"
                  Count={count3}
                />
                <CountCards
                  Title="Total Overdue Tickets"
                  CountColor="text-[18px] font-[600] text-red-500"
                  Count={count4}
                />
              </section>

              {/* charts  */}
              <section className="flex gap-[60px]">
                {/* chart  */}
                <div>
                  <Chart
                    options={state.options}
                    series={state.series}
                    type="line"
                    width="500"
                  />
                </div>

                {/* card  0.5px solid ;*/}
                <ResponseCard
                  ClassName="flex flex-col gap-9 bg-white min-w-[400px] h-[296px] border-[0.5px] border-[#F1F1F1] border-solid rounded-[10px] p-3"
                  ClassName0="text-[#0D233D] text-[16px] font-[500]"
                  ClassName1="flex gap-[150px]"
                  ClassName2="flex gap-[179px]"
                  ClassName3="flex gap-[146px]"
                  ClassName4="flex gap-[40px]"
                />
              </section>
            </div>
          ) : (
            <div>
              <h1 className="text-[24px] font-[600] text-[#0D233D] mb-5 ml-4">
                Analytics
              </h1>

              {/* cards  0.5px solid #F1F1F1*/}
              <section className="flex gap-8 mb-5 ml-2">
                <AnalyticsCard
                  mapItems={AgentCard2}
                  ClassName="w-[310px] h-[104px] bg-white border-[0.5px] border-solid border-[#F1F1F1] rounded-[10px] p-4"
                />
              </section>
              <section className="flex gap-5 mb-5 ml-2">
                <AnalyticsCard
                  mapItems={AgentCard3}
                  ClassName="w-[264px] h-[104px] bg-white border-[0.5px] border-solid border-[#F1F1F1] rounded-[10px] p-4"
                />
              </section>

              {/* charts  */}
              <section className="flex gap-[60px]">
                {/* chart  */}
                {/* <div>
                  <ResponseCard
                    ClassName="flex flex-col gap-[22px] bg-white min-w-[552px] h-[232px] border-[0.5px] border-[#F1F1F1] border-solid rounded-[10px] p-3 ml-2"
                    ClassName0="text-[#0D233D] text-[16px] font-[500]"
                    ClassName1="flex gap-[300px]"
                    ClassName2="flex gap-[328px]"
                    ClassName3="flex gap-[296px]"
                    ClassName4="flex gap-[98px]"
                  />
                </div> */}

                {/* card  0.5px solid ;*/}
                {/* <section className="flex flex-col gap-4 mt-[-127px] ml-[-20px] justify-center items-center w-[400px] h-[360px] bg-white border-[#F1F1F1] border-[0.5px] border-solid rounded-[10px]">
                  <h1 className="text-[48px] font-[600] text-[#0D233D]">3.0</h1>
                  <div className="flex gap-1">
                    <AiFillStar color="red" size={25} />
                    <AiFillStar color="red" size={25} />
                    <AiFillStar color="red" size={25} />
                    <AiFillStar color="#F1F1F1" size={25} />
                    <AiFillStar color="#F1F1F1" size={25} />
                  </div>
                  <p className="text-[12px] font-[400] text-[#707070]">
                    Review from 20 customers
                  </p>
                  <div className="flex flex-col gap-2">
                    <img src={GreenReview} alt="" />
                    <img src={YellowReview} alt="" />
                    <img src={RedReview} alt="" />
                  </div>
                  <div className="flex gap-[98px]">
                    <span className="flex justify-center items-center gap-1 text-[#0D233D] text-[10px] font-[500] whitespace-nowrap">
                      <GoPrimitiveDot size={12} color="green" /> Good(7)
                    </span>
                    <span className="flex justify-center items-center gap-1 text-[#0D233D] text-[10px] font-[500] whitespace-nowrap">
                      <GoPrimitiveDot size={12} color="yellow" /> Okay(10)
                    </span>
                    <span className="flex justify-center items-center gap-1 text-[#0D233D] text-[10px] font-[500] whitespace-nowrap">
                      <GoPrimitiveDot size={12} color="red" />
                      Bad(3)
                    </span>
                  </div>
                </section> */}
                {/* <ResponseCard ClassName='w-[400px] h-[360px] bg-white border-[#F1F1F1] border-[0.5px] border-solid rounded-[10px]'
                           ClassName0='hidden'
                           ClassName1='hidden'
                           ClassName2='hidden'
                           ClassName3='hidden'
                           ClassName4='hidden' /> */}
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
