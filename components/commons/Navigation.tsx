import React from 'react'
import { ModeToggle } from '../ui/Modetoggle'
import { LuGithub } from "react-icons/lu";
import Link from "next/link"
const Navigation = () => {
  return (
    <>
    <div className='w-full border-b shadow-sm z-50 backdrop-blur fixed dark:bg-[#020817]/60 bg-[#fff]/60 '>
        <div className='flex items-center justify-between lg:max-w-2xl px-5 mx-auto py-5 '>
            <div>
                <h1 className='text-lg font-bold'>Copas Abangkuu 🔥</h1>
            </div>
            <div className='flex items-center gap-5 '>
                <Link href="https://github.com/ervinarviandi" className='p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg' >
                <LuGithub size={20} className='text-gray-700 dark:hover:text-gray-300 hover:text-black dark:text-white '/>
                </Link>
                <ModeToggle/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navigation