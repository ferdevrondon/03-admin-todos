
import Image from 'next/image';
import { CiLogout, } from 'react-icons/ci';
import { Logo, SidebarItem } from './index';
import { IoCalendarOutline, IoCheckboxOutline, IoListOutline } from 'react-icons/io5';

const menuItem = [
    {
        icon:<IoCalendarOutline/>,
        title:'Dashboard',
        path:'/dashboard'
    },
     {
        icon:<IoCheckboxOutline/>,
        title:'Rest Todos',
        path:'/dashboard/rest-todos'
    },
     {
        icon:<IoListOutline/>,
        title:'Server Actions',
        path:'/dashboard/server-todos'
    }
]
export const Sidebar = () => {
  return (
       <aside className="fixed inset-y-0 left-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition-all duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
   
                   <div>
                       {/* Logo */}
                      <Logo/>
   
                       {/* User */}
                       <div className="mt-8 text-center">
                           <Image
                               className="rounded-full w-30 h-30 m-auto"
                               src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                               alt="User avatar"
                               width={200}
                               height={200}
                           />
   
                           <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block">
                               Cynthia J. Watts
                           </h5>
   
                           <span className="hidden text-gray-400 lg:block">Admin</span>
                       </div>
   
                       {/* Navigation */}
                       <ul className="mt-8 space-y-2 tracking-wide">
                        {menuItem.map(item => (
                            <SidebarItem  key={item.path} {...item} />
                        ))}
                       </ul>
                   </div>
   
                   {/* Logout */}
                   <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4">
                       <button className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                           <CiLogout />
                           <span className="group-hover:text-gray-800">Logout</span>
                       </button>
                   </div>
   
               </aside>
  )
}
