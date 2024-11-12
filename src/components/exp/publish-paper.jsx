import React from "react";
import Nav from "../NavbarLogin"
const paper = ()=>{
    return(
        <div className="min-h-screen w-full bg-white  flex flex-col">
            <Nav login={true}/> 
            <div className="bg-green-50 min-h-screen w-full flex scroll-auto flex-row gap-12 p-3">
            <div className=" items-center min-h-full w-1/3   flex flex-col  scroll-auto  p-2 rounded">
                <div className="border border-gray-400 m-2 h-24 w-full  bg-white/45  shadow-2xl shadow-white flex flex-col  scroll-auto  p-2 rounded"></div>
                <a className="font-mono "> published papers</a>
                <div className="border border-gray-400 m-2 h-20 w-full  bg-white/45  shadow-2xl shadow-white flex flex-col  scroll-auto  p-2 rounded"></div>
                <div className="border border-gray-400 m-2 h-20 w-full  bg-white/45  shadow-2xl shadow-white flex flex-col  scroll-auto  p-2 rounded"></div>
                
                
            </div>

            <div className="border border-gray-400  min-h-full w-2/3 opacity-45 bg-white shadow-2xl shadow-white flex flex-col  scroll-auto  p-2 rounded ">
                    
            </div>

                
                

                
            </div>

        </div>
    );
}

export default paper;