import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./COMPONENTS/HOME PAGE/HomePage";
import NavBar from "./COMPONENTS/NAVBAR/NavBar";
import ConfirmTicketPage from "./COMPONENTS/CONFIRM TICKET PAGE/ConfirmTicketPage";
import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import SingIn from "./COMPONENTS/Authentication Page/SingIn";
import AuthPage from "./COMPONENTS/Authentication Page/AuthPage";
import SignUp from "./COMPONENTS/Authentication Page/SignUp";

export const TicketInfo = createContext();
function App() {
  const today = new Date().toString();
  const dateArr = today.split(" ").slice(0, 4);
  const todayString = `${dateArr[0]} ${dateArr[1]} ${dateArr[2]} ${dateArr[3]}`;
  const [Ticket, setTicket] = useState({});
  const [travelFrom, setTravelFrom] = useState("Chandpur");
  const [travellingTo, setTravellingTo] = useState("Dhaka");
  const [departDate, setDepartDate] = useState(todayString);
  const [selectTicketType, setSelectTicketType] = useState("One Way");
  const [selectPassengers, setSelectPassengers] = useState(1);

  const [authentication, setAuthentication] = useState('')
  const [location, setLocation] = useState('');

  console.log(location)

  return (
    <TicketInfo.Provider
      value={{
        Ticket,
        setTicket,
        travelFrom,
        setTravelFrom,
        travellingTo,
        setTravellingTo,
        departDate,
        setDepartDate,
        selectTicketType,
        setSelectTicketType,
        selectPassengers,
        setSelectPassengers,
        location,
        setLocation,
        authentication,
        setAuthentication
      }}
    >
      <div style={{ fontFamily: "Josefin Sans" }}>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/destinations"
            element={<ConfirmTicketPage></ConfirmTicketPage>}
          ></Route>
          <Route path="/authentication" element={<AuthPage></AuthPage>}>
            <Route index element={<SingIn></SingIn>}></Route>
            <Route path="signup" element={<SignUp></SignUp>}></Route>
          </Route>
        </Routes>
        <Toaster/>
      </div>
    </TicketInfo.Provider>
  );
}

export default App;
