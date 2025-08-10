import { useState, useEffect } from 'react';

import Seat from '../../assets/Bus_seat_Icon/seat-4.svg';
import Driver from '../../assets/Bus_seat_Icon/Driver.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const initialValue={
  name:'',
  phoneNo:'',
  cnic:'',
totalPrice:'',
        busNo:'',
        from:'',
        to:'',
        seatSelected:'',
}
const Home = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [confirmSeats,setConfirmSeats]= useState(initialValue);
  const [bookedSeats, setBookedSeats] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const price=0, busNo=0, from=0, to=0;
  const bookingData = [
    {
      from: "Faisalabad",
      to: "Sialkot",
      duration: "8 Hrs",
      features: "Internet Snacks TV Mobile Charging",
      price: 1600,
    },
    {
      from: "Lahore",
      to: "Multan",
      duration: "6 Hrs",
      features: "WiFi Snacks AC Charging Port",
      price: 1400,
    },
    {
      from: "Karachi",
      to: "Hyderabad",
      duration: "3 Hrs",
      features: "TV Water AC Mobile Charging",
      price: 1000,
    },
    {
      from: "Islamabad",
      to: "Peshawar",
      duration: "4 Hrs",
      features: "WiFi TV Tea Snacks",
      price: 1200,
    },
    {
      from: "Multan",
      to: "Larkana",
      duration: "9 Hrs",
      features: "Internet TV Blanket Charging Port",
      price: 1800,
    },
    {
      from: "Sialkot",
      to: "Bahawalpur",
      duration: "7 Hrs",
      features: "TV Snacks AC Mobile Charging",
      price: 1500,
    },
  ];

//  const bookedSeats = localStorage.getItem('selectedSeats',selectedSeats);
//  console.log("bookedSeats",bookedSeats)

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3005/api/seats/bookedSeates');
      setBookedSeats( await response.json());
    //   console.log(data)

      // Filter bookings based on current route
    //   const filteredSeats = data
    //     .filter((booking) => booking.from === from && booking.to === to)
    //     .flatMap((booking) => booking.seatSelected); // assuming seatSelected is an array

    //   setBookedSeats(filteredSeats);
    //   console.log('filteredSeats',filteredSeats)
    } catch (error) {
      console.error('Error fetching booked seats:', error);
    }
  };

  fetchData();
}, []);
setTimeout(()=>{ console.log('bookedSeats',bookedSeats)},2000)

 
 const ReserveSeat = (seatNo) => {
  setSelectedSeats((prev) => {
    let updatedSeats;

    if (prev.includes(seatNo)) {
      updatedSeats = prev.filter((seat) => seat !== seatNo);
    } else {
      if (prev.length >= 10) {
        alert('You can select a maximum of 10 seats.');
        return prev; // Don't update anything
      }
      updatedSeats = [...prev, seatNo];
    }

    // Update confirm seats using updatedSeats
    setConfirmSeats({
              seatSelected: updatedSeats,
    });

    return updatedSeats;
  });
};
  const currentPrice = selectedSeats?.length * price;




 

  return (
    <>

          <div className="flex flex-wrap gap-2 mx-auto mt-4 justify-center mb-2">
            {bookedSeats?.map((item, index) => {
              return (
                <>
                  <div
                    className="w-1/4 min-w-[310px] border rounded-lg p-2 bg-gray-100 text-gray-600"
                    key={index}
                    data-aos="zoom-in"
                  >
                    <div className="flex justify-between">
                      <p>{item?.from}</p>
                      {/* <p>--- {item?.duration} ---</p> */}
                      <p>{item?.to}</p>
                    </div>
                    <div>{item?.features}</div>
                    <div className="flex justify-between items-center mt-5">
                      <div className="font-bold">Rs. {item?.price}</div>
                      <div>
                        <button
                          className="bg-red-700 text-white p-2 rounded-lg cursor-pointer"
                        //   onClick={() => handleReserveClick(item)}
                        >
                          Reserve Seat
                        </button>
                      </div>{" "}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
    </>
  );
};

export default Home;


