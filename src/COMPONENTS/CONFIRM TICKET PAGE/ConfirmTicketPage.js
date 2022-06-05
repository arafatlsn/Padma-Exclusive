import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import ConfirmPageBanner from './ConfirmPageBanner';

const ConfirmTicketPage = () => {
  const { id } = useParams();
  const [travelFrom, setTravelFrom] = useState('');
  const [travelTo, setTravelTo] = useState('');

  const { data: destination, isLoading } = useQuery('singleDestination', async() => {
    const { data } = await axios.get(`http://localhost:5000/destinationid?destinationId=${id}`);
    setTravelFrom(data?.from);
    setTravelTo(data?.to);
  })

  if(isLoading){
    return;
  }

  console.log(travelFrom, travelTo)

  return (
    <div>
      <ConfirmPageBanner from={travelFrom} to={travelTo}></ConfirmPageBanner>
    </div>
  );
};

export default ConfirmTicketPage;