import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import { BsCircle } from 'react-icons/bs'
import AgentForm from '../components/AgentForm'
import { useEffect } from 'react'
import AgentsList from '../lists/AgentsList'
import ReactPaginate from 'react-paginate'
import CrmComp from '../components/CrmComp'
import CustomerList from '../lists/CustomerList'

const Crm = () => {

   const [open, setOpen] = useState(false)
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const [currentItems, setCurrentItems] = useState(null);
   const [pageCount, setPageCount] = useState(0);
   // Here we use item offsets; we could also use page offsets
   // following the API or data you're working with.
   const [itemOffset, setItemOffset] = useState(0);
   const [itemsPerPage, setItemsPerPage] = useState(8);

   useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(CustomerList.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(CustomerList.length / itemsPerPage));
   }, [itemOffset, itemsPerPage]);

   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % CustomerList.length;
      console.log(
         `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
   };

   return (
      <div className='flex'>
         {open && (<AgentForm Close={handleClose} />)}
         <Sidebar />
         <div className="w-full h-full">
            <Navbar />
            <section className='bg-slate-100 w-full h-full p-8'>

               {/* Agent header  */}
               <div className='flex justify-between items-center ml-11'>
                  <h1 className='text-[24px] font-[600]'>CRM</h1>
                  {/* input and button  */}
                  <div className='flex gap-4 mr-10'>
                     <div className={open ? "hidden" : ""}>
                        <BsCircle color='#C9C9C9' className='absolute z-10 top-[17.5%] right-[33%]' />  <input className='relative w-[272px] h-[40px] border-[1px] border-solid border-[#C9C9C9] rounded-[5px] pl-12 outline-none' type="search" name="" id="" placeholder='Search for agents' />
                     </div>
                     <div>
                        <Button
                           ButtonText="Add Customer"
                           ClassName="bg-[#EE095B] w-[120px] h-[40px] text-white rounded-[5px] text-[14px] font-[600]"
                           HandleOpen={handleOpen} />
                     </div>
                  </div>
               </div>

               {/* Agents 0.5px solid #D9D8DA*/}
               <div className='mt-16 w-[976px] h-[488px] border-[0.5px] border-solid border-[#D9D8DA] rounded-[10px] ml-10'>

                  {/* header of table for agents  */}
                  <div className='bg-[#EAEAF0] w-full h-[40px] flex items-center  rounded-r-[10px] rounded-l-[10px] pl-8'>
                     <h2 className='pl-4'>Agent Name</h2>
                     <h2 className='pl-[90px]'>Email Address</h2>
                     <h2 className='pl-[87px]'>Phone Number</h2>
                     <h2 className='pl-[50px]'>Call Type</h2>
                     <h2 className='pl-[60px]'>Product Category</h2>
                  </div>

                  <CrmComp currentItem={currentItems} />
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
            </section>

         </div>
      </div>
   )
}

export default Crm