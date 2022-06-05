import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./COMPONENTS/HOME PAGE/HomePage";
import NavBar from "./COMPONENTS/NAVBAR/NavBar";
import ConfirmTicketPage from './COMPONENTS/CONFIRM TICKET PAGE/ConfirmTicketPage'

function App() {
  return (
    <div style={{fontFamily: 'Josefin Sans'}}>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path='/destinations/:id' element={<ConfirmTicketPage></ConfirmTicketPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
