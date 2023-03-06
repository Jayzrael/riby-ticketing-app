// import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { BsCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AgentForm from "../components/AgentForm";
// import Dots from "../assets/dots.png";
import AgentTable from "../components/AgentTable";
import AgentMod from "../components/AgentMod";
import axios, { BaseUrl } from "../Api/axios";
import EditMod from "../components/EditMod";

const Agents = () => {
  // const [open, setOpen] = useState(false);
  const [openMod, setOpenMod] = useState(false);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [agentData, setAgentData] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleModOpen = () => {
    setOpenMod(true);
  };

  const handleModClose = () => {
    setOpenMod(false);
  };

  useEffect(() => {
    getAgents();
  }, []);

  const getAgents = () => {
    setLoading(true);

    var config = {
      method: "get",
      url: `${BaseUrl}/agents`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setLoading(false);
        console.log(JSON.stringify(response.data.agents));
        setAgentData(response.data.agents);
        localStorage.setItem(
          "agentID",
          JSON.stringify(response.data.agents.id)
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteAgent = (id) => {
    var config = {
      method: "delete",
      url: `https://dev-apis.riby.ng/cus/api/v1/agents/${id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // var newAgents = agentData.filter((item) => item.id !== id);
        // setAgentData(newAgents);
        getAgents();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function openEditModal() {
    setEditModal(true);
  }
  function closeEditMod() {
    setEditModal(!editModal);
  }

  return (
    <div className="flex">
      {editModal && (
        <EditMod
          closeEditMod={closeEditMod}
          getAgents={getAgents}
          setOpenMod={setOpenMod}
        />
      )}
      {openMod && <AgentMod CloseMod={handleModClose} />}
      {open && (
        <AgentForm
          handleClose={handleClose}
          setOpen={setOpen}
          getAgents={getAgents}
        />
      )}
      <Sidebar />
      <div className="w-full h-full">
        <Navbar />
        <section className="bg-slate-100 w-full h-full p-8">
          {/* Agent header  */}
          <div className="flex justify-between items-center ml-11">
            <h1 className="text-[24px] font-[600]">Agents</h1>
            {/* input and button  */}
            <div className="flex gap-4 mr-10">
              <div className={open ? "hidden" : ""}>
                <BsCircle
                  color="#C9C9C9"
                  className="absolute z-10 top-[17.5%] right-[33%]"
                />{" "}
                <input
                  className="relative w-[272px] h-[40px] border-[1px] border-solid border-[#C9C9C9] rounded-[5px] pl-12 outline-none"
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  name=""
                  id=""
                  placeholder="Search for agents"
                />
              </div>
              <div>
                <Button
                  ButtonText="Create Agent"
                  ClassName="bg-[#EE095B] w-[120px] h-[40px] text-white rounded-[5px] text-[14px] font-[600]"
                  HandleOpen={handleOpen}
                />
              </div>
            </div>
          </div>

          {/* Agents 0.5px solid #D9D8DA*/}
          <div className="mt-16 border-[0.5px] border-solid border-[#D9D8DA] rounded-[10px] ml-10">
            {/* OnClick={TriggerDropdown}  */}
            <AgentTable
              getAgents={getAgents}
              // EditAgent={editAgent}
              HandleModOpen={handleModOpen}
              // Dots={Dots}
              Search={search}
              AgentData={agentData}
              openEditModal={openEditModal}
              selectedId={selectedId}
              DeleteAgent={deleteAgent}
              loading={loading}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Agents;
