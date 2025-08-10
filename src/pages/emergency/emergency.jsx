<<<<<<< HEAD
import { useEffect, useState } from "react";

const Emergency = () => {
  const [EmergencyMsg, setEmergencyMsg] = useState([]);

  const fetchmessage = async () => {
    try {
      const responce = await fetch("http://localhost:3005/api/alerts/alert-message");
      const data = await responce.json();
      setEmergencyMsg(data);
      console.log("Fetched data:", data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchmessage();
  }, []);

  const message= "request for dismiss message"

  const Dismiss= async (id)=>{
    alert('alert')
const res = await fetch('http://localhost:3005/api/alerts/dismiss-alert-message', {
  method: 'POST',
   headers : {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({id})

})

console.log(res);
  }

  return ( <>
    <div class="max-w-sm w-full lg:max-w-full lg:flex mt-2 mb-2">
  {/* <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
  </div> */}
  <div className=" flex flex-wrap gap-2 justify-center">
     {EmergencyMsg?.map((msg, index) => {
         return(
  <div class=" border border-gray-400  lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded p-4 flex flex-col justify-between leading-normal lg:w-[500px]">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div class="text-gray-700 text-base mb-2"> <span className="font-bold"> Name:</span> {msg.name}</div>
      {/* <div class="text-gray-700 text-base mb-2"> <span className="font-bold"> Email:</span> {msg.email}</div> */}
      <div class="text-gray-700 text-base mb-2"> <span className="font-bold"> BusNo:</span> {msg.busNo}</div>
      <div class="text-gray-700 text-base mb-2"> <span className="font-bold"> Date:</span> {msg.date}</div>
      <p class="text-gray-700 text-base"> <span className="font-bold"> Message:</span> {msg.message}</p>
      <p class="text-gray-700 text-base"> <span className="font-bold"> ID:</span> {msg._id}</p>
    </div>
    <div class="flex items-center gap-2">
      {/* <div>
        <button className="bg-red-700 text-white rounded-md px-3 py-2 font-medium hover:bg-[#FFFFFF] hover:text-red-700 border border-red-700 hover:border">Action</button>
      </div> */}
      <div>
        <button className="bg-red-700 text-white rounded-md px-3 py-2 font-medium hover:bg-[#FFFFFF] hover:text-red-700 border border-red-700 hover:border" onClick={()=>Dismiss(msg._id)}>Dismiss</button>
      </div>
    </div>
  </div>)
})}
</div>
</div>
</>);
};

export default Emergency;

=======

const Emergency=()=>{

    return <>
    <h1>Emergency alert</h1>
    </>
}

export default Emergency
>>>>>>> 390111209b297fb97d3326495f84d843b5b17e19
