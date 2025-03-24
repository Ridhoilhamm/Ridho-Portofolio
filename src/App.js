import React from "react";
import Header from "./components/header";
import Navigasi from "./components/navigasi";
import Banner from "./components/banner";
import Profile from "./components/profile";
import Portofolio from "./components/portofolio";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./components/footer";
import Skill from "./components/skill";
import Sertifikat from "./components/sertifikat";
import Detail from "./components/detail";


function App() {

    useEffect(()=>{
        AOS.init()
    },[])
    return <div>
       <Header/>
       <Navigasi/>
       <Banner/>
       <Profile/>
       <Portofolio/>
       {/* <Detail/> */}
       <Skill/>
       <Sertifikat/>
       <Footer/>
       

    </div>
}
export default App; 

