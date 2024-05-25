import Profile from "./Components/Profile"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';

function App() {

  return (
    <>
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
