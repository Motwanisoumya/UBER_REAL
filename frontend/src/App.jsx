import React from "react";  
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Login from "./Pages/UserLogin";  




const app = () => {
  return (
  <div>
    
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>

  </div>
   
  );
}
export default app;
