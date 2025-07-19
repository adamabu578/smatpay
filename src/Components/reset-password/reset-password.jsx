import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Eye, EyeOff, Check, AlertCircle } from 'lucide-react';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetStatus, setResetStatus] = useState(null); // null, 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const [searchParams] = useSearchParams();
  const [token, setToken] = useState('');

  useEffect(() => {
    const urlToken = searchParams.get('token');
    if (urlToken) {
      setToken(urlToken);
    }
  }, [searchParams]);

  console.log('Token from URL:', token); 




  //reset password Logic
  const ResetPassword = async () => {
    if (!token) {
      console.error("Token is required for password reset.");
      return;
    }

    if (password.length < 8 || password !== confirmPassword) {
      console.error("Password does not meet requirements or does not match.");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("https://smatpay.live/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         "token": token,
        "password": "password",
        }),
      });
  
      const json = await response.json();
  
      if (response.ok) {
        console.log("reset-password successful:", json.msg);
        setResetStatus('success');
        // window.location.href = '/login'; // Redirect to login page after successful reset
        // You can redirect user or show success message here
      } else {
        console.error("reset-password failed:", json.message || json);
        setResetStatus('error');
      }
    } catch (error) {
      console.error("Error during reset-password:", error);
    }finally {
      setIsSubmitting(false);
    }
  };
  


  // Password validation states
  const [validations, setValidations] = useState({
    hasMinLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
    passwordsMatch: false,
  });

  // Validate password on change
  useEffect(() => {
    setValidations({
      hasMinLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
      passwordsMatch: password === confirmPassword && password !== '',
    });
  }, [password, confirmPassword]);

  const isFormValid = Object.values(validations).every(Boolean);

  const handleTryAgain = () => {
    setResetStatus(null);
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset your password</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Create a strong password to secure your account
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-purple-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {resetStatus === 'success' ? (
            <div className="rounded-md bg-green-50 p-4 mb-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">Password reset successful</h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>Your password has been reset successfully. You can now log in with your new password on the mobile app.</p>
                  </div>
                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Return to login
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {resetStatus === 'error' && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">Error</h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>{errorMessage}</p>
                      </div>
                      <div className="mt-4">
                        <button
                          type="button"
                          onClick={handleTryAgain}
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          Try again
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white">
                  New Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter your new password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                  Confirm Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Confirm your new password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="rounded-md bg-gray-50 p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Password requirements:</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center">
                    <span className={`mr-2 ${validations.hasMinLength ? 'text-green-500' : 'text-gray-400'}`}>
                      {validations.hasMinLength ? <Check className="h-4 w-4" /> : '○'}
                    </span>
                    <span className={validations.hasMinLength ? 'text-gray-900' : 'text-gray-500'}>
                      At least 8 characters
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className={`mr-2 ${validations.hasUppercase ? 'text-green-500' : 'text-gray-400'}`}>
                      {validations.hasUppercase ? <Check className="h-4 w-4" /> : '○'}
                    </span>
                    <span className={validations.hasUppercase ? 'text-gray-900' : 'text-gray-500'}>
                      At least 1 uppercase letter
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className={`mr-2 ${validations.hasLowercase ? 'text-green-500' : 'text-gray-400'}`}>
                      {validations.hasLowercase ? <Check className="h-4 w-4" /> : '○'}
                    </span>
                    <span className={validations.hasLowercase ? 'text-gray-900' : 'text-gray-500'}>
                      At least 1 lowercase letter
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className={`mr-2 ${validations.hasNumber ? 'text-green-500' : 'text-gray-400'}`}>
                      {validations.hasNumber ? <Check className="h-4 w-4" /> : '○'}
                    </span>
                    <span className={validations.hasNumber ? 'text-gray-900' : 'text-gray-500'}>
                      At least 1 number
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className={`mr-2 ${validations.hasSpecialChar ? 'text-green-500' : 'text-gray-400'}`}>
                      {validations.hasSpecialChar ? <Check className="h-4 w-4" /> : '○'}
                    </span>
                    <span className={validations.hasSpecialChar ? 'text-gray-900' : 'text-gray-500'}>
                      At least 1 special character
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className={`mr-2 ${validations.passwordsMatch ? 'text-green-500' : 'text-gray-400'}`}>
                      {validations.passwordsMatch ? <Check className="h-4 w-4" /> : '○'}
                    </span>
                    <span className={validations.passwordsMatch ? 'text-gray-900' : 'text-gray-500'}>
                      Passwords match
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <button
                  type="button"
                  onClick={ResetPassword}
                  disabled={isSubmitting || !isFormValid}
                  className={`w-full flex justify-center py-2 px-4 hover:bg-purple-700  border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                  ${isFormValid 
                    ? 'bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500' 
                    : 'bg-blue-300 cursor-pointer'}`}
                >
                  {isSubmitting ? 'Resetting...' : 'Reset Password'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


