import React from 'react'

const AnalyticsCard = ({ mapItems, ClassName }) => {
   return (
      <>
         {mapItems.map((data, index) => (
            <div key={index} className={ClassName}>
               <p>{data.Title}</p>
               <span className={data.CountColor}>{data.Count}</span>
            </div>
         ))}
      </>
   )
}

export default AnalyticsCard