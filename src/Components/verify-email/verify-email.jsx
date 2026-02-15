"use client"
import smatpaylogo from "../../assets/logo1.png";
import { Mail, Twitter, Facebook, Instagram } from "lucide-react"

export default function EmailVerificationPage() {
  const handleVerifyEmail = () => {
    // Handle email verification logic here
    console.log("Verifying email...")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-sm rounded-lg border">
        <div className="p-8 text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 font-bold text-xl" style={{ color: "#1A123B" }}>
              {/* <Mail className="w-6 h-6" /> */}
              <img src={smatpaylogo} alt="" className="w-20 rounded-lg" />
              {/* SmatPay */}
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-gray-900">Verify your email address</h1>

            <p className="text-gray-600 text-sm leading-relaxed">Kindly click the link to verify your email</p>

            <button
              onClick={handleVerifyEmail}
              className="w-full text-white font-medium py-3 px-4 rounded-md transition-colors"
              style={{ backgroundColor: "#7C7AFF" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6B68E6")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7C7AFF")}
            >
              Verify email
            </button>

            <p className="text-xs text-gray-500">Can't see the email? Check your spam folder!</p>
          </div>

          {/* Social Icons */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex justify-center gap-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            {/* Simplified footer text to just show year and brand name */}
            <p className="text-xs text-gray-500">2024 smatpay</p>
          </div>
        </div>
      </div>
    </div>
  )
}
