import React from "react";
import AgentCard from "../lists/AgentCard";

const CountCards = ({ Count, Title, CountColor }) => {
  return (
    <section className="flex gap-4 mb-5">
      <div className="w-[226px] h-[104px] bg-white border-[0.5px] border-solid border-[#F1F1F1] rounded-[10px] p-4">
        <p>{Title}</p>

        <span className={CountColor}> {Count}</span>
      </div>
    </section>
  );
};

export default CountCards;
