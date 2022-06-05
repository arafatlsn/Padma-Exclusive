import { useState } from "react";


const useDestinations = () => {
  const [travelFrom, setTravelFrom] = useState('');
  const [travelTo, setTravelTo] = useState('');

  console.log(travelFrom, travelTo)
  return { setTravelFrom, setTravelTo }
};

export default useDestinations;