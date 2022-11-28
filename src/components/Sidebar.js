import React from 'react'
import RibyLogo from '../assets/RibyLogo2.png'
import { Link, NavLink } from 'react-router-dom'
// import NavbarList from '../lists/NavbarList'
import '../App.css'
// import { MdOutlineAnalytics } from 'react-icons/md'
// import navbarList from '../lists/NavbarList'
import { useState } from 'react'
import { useEffect } from 'react'


const Sidebar = () => {

   const [navbarList, setNavBarList] = useState([
      {
         id: 1,
         item: 'Tickets',
         img: '/tickets.png',
         className: 'flex gap-4 p-4 cursor-pointer hover:text-red-500',
         linkTo: '/home',
      },
      {
         id: 2,
         item: 'Agents',
         img: '/agents.png',
         className: 'flex gap-4 p-4 cursor-pointer hover:text-red-500',
         linkTo: '/agents',
      },
      {
         id: 3,
         item: 'Analytics',
         img: '/analytics.png',
         className: 'flex gap-4 p-4 cursor-pointer hover:text-red-500',
         linkTo: '/analytics',
      },
      {
         id: 4,
         item: 'Chats',
         img: '/chats.png',
         className: 'flex gap-4 p-4 cursor-pointer hover:text-red-500',
         linkTo: '/chats',
      },
   ])

   const [agentRole, setAgentRole] = useState(true)

   const agentNav = [
      {
         id: 1,
         item: 'Tickets',
         img: '/tickets.png',
         className: 'flex gap-4 p-4 cursor-pointer hover:text-red-500',
         linkTo: '/home',
      },
      {
         id: 2,
         item: 'CRM',
         img: '/agents.png',
         className: 'flex gap-4 p-4 cursor-pointer hover:text-red-500',
         linkTo: "/crm",
      },
      {
         id: 3,
         item: 'Analytics',
         img: '/analytics.png',
         className: 'flex gap-4 p-4 cursor-pointer hover:text-red-500',
         linkTo: '/analytics',
      },
      {
         id: 4,
         item: 'Chats',
         img: '/chats.png',
         className: 'flex gap-4 p-4 cursor-pointer hover:text-red-500',
         linkTo: '/chats',
      }
   ]

   useEffect(() => {

      if (agentRole == false) {
         setNavBarList(agentNav)
      }
   }, [])

   return (
      <div className='flex-none w-[240px] bg-white'>

         {/* Riby Logo */}
         <div className='flex justify-center items-center p-8 mb-4'>
            <Link to="/"><img src={RibyLogo} alt="" /></Link>
         </div>
         {/* Dashboard pages */}
         <div className='flex flex-col '>
            {navbarList.map((item) => (
               <ul key={item.id} className='ml-3 mr-3'>
                  <li>
                     <NavLink activeClassName='active' to={item.linkTo} className={item.className}>
                        <div className='flex justify-center items-center gap-3'>
                           <img src={item.img} alt="" /> <span>{item.item}</span>
                        </div>
                     </NavLink>
                  </li>
               </ul>
            ))}
         </div>

      </div>
   )
}

export default Sidebar