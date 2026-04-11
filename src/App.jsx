import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/register/Register.jsx";
import Pages from "./pages.jsx";
import ProtectedRoutes from "./Components/utils/ProtectedRoutes.jsx";
import ExternalDashboardRedirect from "./Components/smatpay-dashboard/Smatpay-Dashboard.jsx";
import ResetPasswordPage from "./Components/reset-password/reset-password.jsx";
import EmailVerificationPage from "./Components/verify-email/verify-email.jsx";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';


const App = () => {
  const tawkMessengerRef = useRef();
 

  return (
  

<BrowserRouter>
<TawkMessengerReact
    propertyId="69da4aeda99cc61c37e248ee"
    widgetId="1jlub9chd"
    useRef={tawkMessengerRef}
/>
<Routes>
  <Route element={<Pages/>} path="/" />

   <Route element={<ProtectedRoutes />}> 

      <Route element={<Login />} path="/login"  />
      <Route element={<Register />} path="/Sign-Up" />
      <Route element={<ResetPasswordPage />} path="/reset-password" />
       <Route element={<EmailVerificationPage />} path="/verify-email" />
      <Route element={<ExternalDashboardRedirect />} path="/dashboard" />

   </Route>
  
</Routes>
</BrowserRouter>




  );
};
export default App;
