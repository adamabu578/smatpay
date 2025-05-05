import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/register/Register.jsx";
import Pages from "./pages.jsx";
import ProtectedRoutes from "./Components/utils/ProtectedRoutes.jsx";
import ExternalDashboardRedirect from "./Components/smatpay-dashboard/Smatpay-Dashboard.jsx";
import ResetPasswordPage from "./Components/reset-password/reset-password.jsx";



const App = () => {
 
 

  return (
  

<BrowserRouter>
<Routes>
  <Route element={<Pages/>} path="/" />

   <Route element={<ProtectedRoutes />}> 

      <Route element={<Login />} path="/login"  />
      <Route element={<Register />} path="/Sign-Up" />
      <Route element={<ResetPasswordPage />} path="/reset-password" />
      <Route element={<ExternalDashboardRedirect />} path="/dashboard" />

   </Route>
  
</Routes>
</BrowserRouter>




  );
};
export default App;
