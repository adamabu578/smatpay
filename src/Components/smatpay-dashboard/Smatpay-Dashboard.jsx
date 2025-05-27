"use client"

// external-dashboard-redirect.jsx - Component to handle redirection to external dashboard

import { useEffect } from "react"

export default function ExternalDashboardRedirect() {
  useEffect(() => {
    const redirectToDashboard = async () => {
      try {
        // Option 1: Simple redirect to external dashboard
        window.location.href = "https://smatpay-dashboard.vercel.app/"

        // Option 2: Pass token via URL (less secure)
        // const token = localStorage.getItem("authToken");
        // window.location.href = `https://dashboard.smatpay.com?token=${token}`;

        // Option 3: Make an API call to validate session before redirect
        // const response = await fetch("https://api.smatpay.live/validate-session", {
        //   headers: getAuthHeaders()
        // });
        // if (response.ok) {
        //   window.location.href = "https://dashboard.smatpay.com";
        // }
      } catch (error) {
        console.error("Error redirecting to dashboard:", error)
      }
    }

    redirectToDashboard()
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Redirecting to Dashboard</h2>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-900 mx-auto"></div>
      </div>
    </div>
  )
}
