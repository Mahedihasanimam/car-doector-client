import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";



const Service = () => {
    const [service,setService]=useState([])
    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>{
            setService(data)
        })
    },[])
    return (
        <div>
            <div className="md:w-1/2 text-center mx-auto my-4 px-4">
                <strong className="text-[#FF3811] font-bold">Service</strong>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-12 px-4">
            {
                service.map(item=><ServiceCard key={item._id} item={item}></ServiceCard>)
            }
            </div>
            <button className="btn rounded-sm block mx-auto  border-2 border-solid border-[#FF3811 my-8 bg-transparent text-[#FF3811] font-bold lg:lg:text-lg">More service</button>
        </div>
    );
};

export default Service;