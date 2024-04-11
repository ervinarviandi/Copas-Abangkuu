"use client"

import Navigation from "@/components/commons/Navigation";
import Hero from "@/components/commons/Hero";
import Footer from "@/components/commons/Footer";
import LoaderScreen from "@/components/atoms/LoaderScreen";






export default async function Home() {

  return (
    <>
    <div>
      <LoaderScreen/>
      <Navigation/>
      <Hero/>
      <Footer/>
    </div>
    </>

  );

}
