import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import TicketHeader from '../components/Tickets/TicketHeader'
import TicketList from '../lists/TicketList'
import Ticket from '../components/Tickets/Ticket'
import { useEffect } from 'react'
import ReactPaginate from 'react-paginate'

const Home = () => {

   const [currentItems, setCurrentItems] = useState(null);
   const [pageCount, setPageCount] = useState(0);
   const [itemOffset, setItemOffset] = useState(0);
   const [itemsPerPage, setItemsPerPage] = useState(8);
   // const Agent = true;

   useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(TicketList.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(TicketList.length / itemsPerPage));
   }, [itemOffset, itemsPerPage]);

   const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % TicketList.length;
      console.log(
         `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
   };

   return (
      <div className='flex'>
         <Sidebar />
         <div className="w-full h-full">
            <Navbar />
            <div className='bg-slate-100 w-full h-full p-8'>
               <TicketHeader />
               <Ticket currentItems={currentItems} />
               <ReactPaginate
                  className='flex justify-end gap-5 text-blue-800'
                  activeClassName='text-blue-800 pt-1 pb-1 pl-2 pr-2 border-[2px] border-blue-800'
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
               />
            </div>

         </div>
      </div>
   )
}

export default Home