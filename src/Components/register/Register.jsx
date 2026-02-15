import { useState } from "react";
import google from "../../assets/googlebtn.svg";
import logoimg from "../../assets/logo.png";
import backgroundimg from "../../assets/loginimg2.png";


export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async () => {
    try {
      const response = await fetch("https://yourapi.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "firstName": "Abu",
          "lastName": "Adamu",
          "email": "abukamsulum01@gmail.com",
          "phone": "08146704074",
          "password": "Adamskams4670",
        }),
      });

      const json = await response.json();

      if (response.ok) {
        console.log("Signup successful:", json);
        // You can redirect user or show success message here
      } else {
        console.error("Signup failed:", json.message || json);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };




  return (
    <div className=" flex items-center justify-center  w-[790px] absolute -inset-9 mx-auto">
      {/* Card Container */}
      <div className="flex w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-colors duration-300">
        {/* Left Section - Login */}
        <div className="flex flex-col w-1/2 p-8">
          <div className="flex flex-col items-center mb-6">
            {/* Logo */}
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <img src={logoimg} alt="Logo" width={64} height={64} />
            </div>
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Sign up</h1>
            <p className="text-gray-600 dark:text-gray-400">Welcome back! Please sign Up to continue.</p>
          </div>

          {/* Sign In with Google */}
          <button className="w-full bg-green-950 text-white py-2 rounded-full font-medium mt-4 flex items-center justify-center space-x-2 hover:bg-green-400">
            <img src={google} alt="Google" className="w-5" />
            <span></span>Sign up with Google
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <div className="px-2 text-gray-500 text-sm">or sign up in with email</div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Email Input */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-[40px] p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div className="relative mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[40px] p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full h-[40px] p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="button"
              className="absolute top-3 right-3 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {/* Add an eye icon here */}
              {/* <Eye />   */}
            </button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <input type="checkbox" className="mr-2" />
              I agree to the Terms & condition
            </label>
          </div>

          {/* Login Button */}
          <button className="w-full px-4 py-2 text-white bg-green-950 rounded-full hover:bg-green-400"

            onClick={handleSignup}>
            Sign up
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
            Already have an account?
            <a href="/login" className="text-purple-950 dark:text-primary-light hover:underline ml-1">
              signin
            </a>
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="w-1/2 hidden lg:block bg-purple-500">
          <img
            src={backgroundimg}
            alt="Background"
            layout="responsive"
            width={500}
            height={500}
            className="object-cover  mt-20"
          />
        </div>
      </div>
    </div>
  );
}