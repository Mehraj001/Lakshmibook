import './App.css';

import { BrowserRouter, Routes,Route} from "react-router-dom";
// import SignUp from './Pages/SignUp';
// import Login1 from './Pages/Login1';
import Navbar1 from './componets/Navbar1';
// import AndarBaharGame from './andhar_bhar/andharBhar';
function App() {
  return (
    <BrowserRouter>
    <Navbar1/>
    <Routes>
      {/* <Route path="/login" element={<Login1 />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>  */}
     {/* <Route path="/abc" element={<AndarBaharGame />}></Route> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;



