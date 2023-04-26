import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import MyNavbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Createpost from "./components/Createpost";
import SingleFeed from "./components/SingleFeed";

function App() {
  axios.defaults.withCredentials = true;

  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
       
          <Route path="/login" element={<Login />} />
       
          <Route path="/createpost" element={<Createpost />} />
        
          <Route path="/register" element={<Register />} />
      
        <Route path="/feed/:id" element={<SingleFeed/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
