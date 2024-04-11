
import React from 'react'
import {motion} from "framer-motion"
import CopyComponents from "@/components/atoms/CopyComponents"

const Hero = () => {
    
    
  return (
    <>
    <div className='w-full py-10'>
        <motion.section className='lg:max-w-xl mx-auto px-5 relative 'initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 3.5, type: "spring" }}>
            <h1 className='text-xl text-center pt-28 font-semibold'>Pilih  Template Kata🔮🙌🏼🙇‍♂️ </h1>
            <p className='text-md text-center dark:text-gray-400 text-gray-700 mt-5'> pilih template kata yang ingin kamu gunakan di bawah ini !</p>
            {/* <div className='flex items-center justify-center gap-2'>
            <input  type="text" className='p-3 rounded-md   ' />
            <button className='p-3 rounded-md bg-blue-500'>Coba Paste Gays</button>
            </div> */}
            
            <CopyComponents/>
        </motion.section>
    </div>
    </>
  )
}

export default Hero