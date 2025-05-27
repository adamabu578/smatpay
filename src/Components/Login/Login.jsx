"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logoimg from "../../assets/logo.png"
import google from "../../assets/googlebtn.svg"
import backgroundimg from "../../assets/loginimg2.png"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("http://localhost:3004/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          credential: "include",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Login failed")
      }

      localStorage.setItem("authToken", data.token)
      localStorage.setItem("userData", JSON.stringify(data.user || {}))

      console.log("Login successful:", data)

      // Redirect with token to external dashboard
      window.location.href = `https://smatpay-dashboard.vercel.app?token=${data.token}`
    } catch (error) {
      console.error("Error during login:", error)
      setError(error.message || "Failed to login. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    console.log("Google login clicked")
    // Future implementation
  }

  return (
    <div className="flex items-center justify-center w-[790px] absolute -inset-9 mx-auto">
      <div className="flex w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex flex-col w-1/2 p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <img src={logoimg || "/placeholder.svg"} alt="Logo" width={64} height={64} />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Sign In</h1>
            <p className="text-gray-600">Welcome back! Please sign in to continue.</p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mb-4">
              {error}
            </div>
          )}

          <button
            className="w-full bg-green-950 text-white py-2 rounded-full font-medium mt-4 flex items-center justify-center space-x-2 hover:bg-green-400"
            onClick={handleGoogleLogin}
          >
            <img src={google || "/placeholder.svg"} alt="Google" className="w-5" />
            <span>Sign in with Google</span>
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <div className="px-2 text-gray-500 text-sm">or sign in with email</div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <form onSubmit={handleLogin}>
            <div className="relative mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full h-[40px] p-3 border border-gray-300 rounded-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full h-[40px] p-3 border border-gray-300 rounded-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute top-3 right-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {/* Icon placeholder */}
              </button>
            </div>

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-sm text-purple-950 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-green-950 rounded-full hover:bg-green-400 flex justify-center"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Not registered yet?{" "}
            <a href="/Sign-Up" className="text-purple-950 hover:underline">
              Create an account
            </a>
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="w-1/2 hidden lg:block bg-purple-500">
          <img
            src={backgroundimg || "/placeholder.svg"}
            alt="Background"
            width={500}
            height={500}
            className="object-cover mt-20"
          />
        </div>
      </div>
    </div>
  )
}



