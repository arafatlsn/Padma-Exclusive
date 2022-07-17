import React from "react";
import hino from "../../Assets/hino-logo.png";
import hyundai from '../../Assets/Hyundai-logo.png'
import scania from '../../Assets/scania-logo.png'
import daewoo from '../../Assets/daewoo-logo.png'
import man from '../../Assets/MAN-logo.png'
import volvo from '../../Assets/volvo-logo.webp'

const BusesLogo = () => {
  return (
    <div className="h-[20vh] flex justify-center items-center">
      <div className="w-[100%] flex justify-around items-center">
        <div>
          <img
            className="w-[120px] object-contain"
            src={hino}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[170px] object-contain"
            src={hyundai}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[120px] object-contain"
            src={scania}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[120px] object-contain"
            src={man}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[150px] object-contain"
            src={volvo}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[150px] object-contain"
            src={daewoo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BusesLogo;
