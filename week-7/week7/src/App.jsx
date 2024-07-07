import Profile from "./Components/Profile"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import BackgroundChanger from "./Components/BackgroundChanger";
import Paragraph from "./Components/Paragraph";
import Githubcard from "./Components/Githubcard";
import LoginViaOTP from "./Components/LoginViaOTP";
import BirthdayWisher from "./Components/BirthdayWisher";

function App() {

  return (
    <>
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/background-changer" element={<BackgroundChanger/>}/>
        <Route path="/paragraph" element={<Paragraph/>}/>
        <Route path="/github-card" element={<Githubcard/>}/>
        <Route path="/loginviaotp" element={<LoginViaOTP/>} />
        <Route path="/birthdaywisher" element={<BirthdayWisher />} />
      </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
