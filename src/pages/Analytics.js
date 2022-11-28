import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import AgentCard from '../lists/AgentCard'
import { useState } from 'react'
import Chart from 'react-apexcharts'
import AnalyticsCard from '../components/AnalyticsCard'
import ResponseCard from '../components/ResponseCard'
import { AiFillStar } from 'react-icons/ai'
import GreenReview from '../assets/greenreview.png'
import YellowReview from '../assets/yellowreview.png'
import RedReview from '../assets/redreview.png'
import { GoPrimitiveDot } from 'react-icons/go'

const Analytics = () => {

   const [state, setState] = useState({
      options: {
         chart: {
            id: "basic-bar"
         },
         xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
         }
      },
      series: [
         {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
         },
         {
            name: "series-2",
            data: [25, 30, 40, 33, 27, 50, 60, 81]
         }
      ]
   }
   );

   const AgentCard2 = [
      {
         Title: 'Total Open Tickets',
         Count: '2',
         CountColor: 'text-[18px] font-[600] text-orange-400'
      },
      {
         Title: 'Total Closed Tickets',
         Count: '2',
         CountColor: 'text-[18px] font-[600] text-green-600'
      },
      {
         Title: 'Total Overdue Tickets',
         Count: '2',
         CountColor: 'text-[18px] font-[600] text-red-500'
      }
   ]

   const AgentCard3 = [
      {
         Title: 'Total Closed Tickets',
         Count: '2',
         CountColor: 'text-[18px] font-[600] text-green-600'
      },
      {
         Title: 'Total Overdue Tickets',
         Count: '2',
         CountColor: 'text-[18px] font-[600] text-red-500'
      }
   ]

   const agentRole = true;

   return (
      <div className='flex'>
         <Sidebar />
         <div className="w-full max-h-full">
            <Navbar />
            <div className='bg-slate-100 w-full h-full p-8'>

               {/* content  */}
               {agentRole == true ? (
                  <div>
                     <section>
                        <h1 className='text-[24px] font-[600] text-[#0D233D] mb-5'>Analytics</h1>
                     </section>

                     {/* cards  0.5px solid #F1F1F1*/}
                     <section className='flex gap-4 mb-5'>
                        {AgentCard.map((data, index) => (
                           <div key={index} className='w-[226px] h-[104px] bg-white border-[0.5px] border-solid border-[#F1F1F1] rounded-[10px] p-4'>
                              <p>{data.Title}</p>
                              <span className={data.CountColor}>{data.Count}</span>
                           </div>
                        ))}
                     </section>

                     {/* charts  */}
                     <section className='flex gap-[60px]'>

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
                           ClassName0='text-[#0D233D] text-[16px] font-[500]'
                           ClassName1='flex gap-[150px]'
                           ClassName2='flex gap-[179px]'
                           ClassName3='flex gap-[146px]'
                           ClassName4='flex gap-[40px]'
                        />
                     </section>
                  </div>
               ) : (
                  <div>
                     <h1 className='text-[24px] font-[600] text-[#0D233D] mb-5 ml-4'>Analytics</h1>

                     {/* cards  0.5px solid #F1F1F1*/}
                     <section className='flex gap-8 mb-5 ml-2'>
                        <AnalyticsCard
                           mapItems={AgentCard2}
                           ClassName='w-[310px] h-[104px] bg-white border-[0.5px] border-solid border-[#F1F1F1] rounded-[10px] p-4' />
                     </section>
                     <section className='flex gap-5 mb-5 ml-2'>
                        <AnalyticsCard
                           mapItems={AgentCard3}
                           ClassName='w-[264px] h-[104px] bg-white border-[0.5px] border-solid border-[#F1F1F1] rounded-[10px] p-4' />
                     </section>

                     {/* charts  */}
                     <section className='flex gap-[60px]'>

                        {/* chart  */}
                        <div>
                           <ResponseCard ClassName="flex flex-col gap-[22px] bg-white min-w-[552px] h-[232px] border-[0.5px] border-[#F1F1F1] border-solid rounded-[10px] p-3 ml-2"
                              ClassName0='text-[#0D233D] text-[16px] font-[500]'
                              ClassName1='flex gap-[300px]'
                              ClassName2='flex gap-[328px]'
                              ClassName3='flex gap-[296px]'
                              ClassName4='flex gap-[98px]' />
                        </div>

                        {/* card  0.5px solid ;*/}
                        <section className='flex flex-col gap-4 mt-[-127px] ml-[-20px] justify-center items-center w-[400px] h-[360px] bg-white border-[#F1F1F1] border-[0.5px] border-solid rounded-[10px]'>
                           <h1 className='text-[48px] font-[600] text-[#0D233D]'>3.0</h1>
                           <div className='flex gap-1'>
                              <AiFillStar color='red' size={25} />
                              <AiFillStar color='red' size={25} />
                              <AiFillStar color='red' size={25} />
                              <AiFillStar color='#F1F1F1' size={25} />
                              <AiFillStar color='#F1F1F1' size={25} />
                           </div>
                           <p className='text-[12px] font-[400] text-[#707070]'>Review from 20 customers</p>
                           <div className='flex flex-col gap-2'>
                              <img src={GreenReview} alt="" />
                              <img src={YellowReview} alt="" />
                              <img src={RedReview} alt="" />
                           </div>
                           <div className='flex gap-[98px]'>
                              <span className='flex justify-center items-center gap-1 text-[#0D233D] text-[10px] font-[500] whitespace-nowrap'>
                                 <GoPrimitiveDot size={12} color="green" /> Good(7)</span>
                              <span className='flex justify-center items-center gap-1 text-[#0D233D] text-[10px] font-[500] whitespace-nowrap'><GoPrimitiveDot size={12} color="yellow" /> Okay(10)</span>
                              <span className='flex justify-center items-center gap-1 text-[#0D233D] text-[10px] font-[500] whitespace-nowrap'><GoPrimitiveDot size={12} color="red" />Bad(3)</span>
                           </div>
                        </section>
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
   )
}

export default Analytics