/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react";
import { useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div>
      <div className="text-center space-y-4 ">
        <h3 className="text-[#FF3811] text-lg font-bold ">Service</h3>
        <h1 className="text-5xl font-bold text-[#151515] ">Our Service Area</h1>
        <p className="w-[550px] flex mx-auto text-[#737373]">
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 my-6">
        {services.map((service, idx) => (
          <Service key={idx} service={service}></Service>
        ))}
      </div>
    
          <button className="btn btn-outline btn-error my-4 flex mx-auto ">
            More Services
          </button>
        
    </div>
  );
};

export default Services;
