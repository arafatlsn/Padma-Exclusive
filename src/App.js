import { Route, Routes } from "react-router-dom";
import "./App.css";
import { createContext } from "react";
import { Toaster } from "react-hot-toast";
import "animate.css";
import BookingPage from "./COMPONENTS/BookingPage/BookingPage";
import Home from "./Pages/Home";
import "react-day-picker/dist/style.css";
import SuccessPage from "./COMPONENTS/Success_Page/SuccessPage";
import FailedPage from "./COMPONENTS/Failed_Page/FailedPage";
import NotFoundComp from "./COMPONENTS/Not_Found/NotFoundComp";
import CanceledPage from "./COMPONENTS/Canceled_Page/CanceledPage";

export const TicketInfo = createContext();
function App() {
  return (
    <div style={{ fontFamily: "Josefin Sans" }}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/success/:tId" element={<SuccessPage />} />
        <Route path="/failed" element={<FailedPage />} />
        <Route path="/canceled" element={<CanceledPage />} />
        <Route path="*" element={<NotFoundComp />} />
      </Routes>
      {/* <FooterComp></FooterComp> */}
      <Toaster />
    </div>
  );
}

export default App;
