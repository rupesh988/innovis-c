import React from "react";
import Nav from "../NavbarLogin"
import Pro from "../images/profile.webp"
const paper = ()=>{
    return(
        <div className="min-h-screen w-full bg-white  flex flex-col">
            <Nav login={true}/> 
            <div className="bg-green-50 min-h-screen w-full flex  scroll-auto flex-row gap-12 p-3">
            <div className=" items-center min-h-full w-1/3 min-w-96  flex flex-col scroll-auto  p-2 rounded">
                <div className="border rounded-xl border-gray-400 m-2 h-24 w-full  bg-white/45  shadow-2xl shadow-white flex flex-row gap-4  scroll-auto  p-2">
                    <img src={Pro} alt="profile" className=" w-16 h-16 rounded-full shadow hover:shadow-green-700 shadow-green-400  m-1"></img>
                    <div className="m-2 font-mono">
                        <b>Rupesh</b><br></br>
                        <a>Researcher at Atlas technologies.</a> <br></br>

                    </div>
                </div>
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