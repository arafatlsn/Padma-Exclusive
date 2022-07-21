import { useState } from "react";


const useDestinations = () => {
  const [travelFrom, setTravelFrom] = useState('');
  const [travelTo, setTravelTo] = useState('');

  return { setTravelFrom, setTravelTo }
};

export default useDestinations;