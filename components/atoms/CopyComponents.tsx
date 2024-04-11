"use client"
import React, { useState, useEffect } from 'react';
import { LuClipboardCopy } from 'react-icons/lu';
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "sonner"
import ItemsComponents from "@/app/Data"
import { TiTick } from "react-icons/ti";
import { ToastAction } from '@radix-ui/react-toast';


const CopyComponents = () => {
  
const [copySuccess, setCopySuccess] = useState('');

  const copyToClipBoard = async (copyMe: string) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, 

    });
  }, []);


  // const { toast } = useToast()

return (
 <div>
    <div className="flex flex-col mt-7 ">
              {
                ItemsComponents .map((card, index) =>  (
                  <div key={index}  className="relative  overflow-hidden  rounded-lg shadow-md hover:scale-105 transition duration-700 ease-in-out group border-indigo-400 my-2 border-2 backdrop-blur dark:bg-[#0a101e]/70 bg-gray-100/60" data-aos="zoom-in-down" data-aos-delay="300" >
                   
                    <div className="p-4 flex justify-between items-center overflow-hidden"> 
                    <span className=" "><span className="bg-gradient-to-r from-tailwind to-purple-400 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">{card.title}</span> </span>
                   
                    <button className=' flex justify-between items-center' onClick={() => {
                      copyToClipBoard(card.description),
                      toast(card.description)

                     
                      // toast({
                        
                      //   description: (card.description),
                      //   action: <ToastAction className='p-2 bg-green-400 rounded-full' altText="Try again"><TiTick size={15} className='text-[#fff] ' /></ToastAction>,
                        
                      // })
                      }} >
                       <div className='p-1.5 rounded-lg border'>
                    <LuClipboardCopy/>
                       </div>
                    </button>
                    {/* after copying see the message here */}
                  
                    </div>
                    {copySuccess}
                  </div>
                ))
              }
            </div>
 </div>
)
}
export default CopyComponents