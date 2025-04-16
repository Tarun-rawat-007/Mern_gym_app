import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from 'react-toastify';
const Login = ({ setUserEmail}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedToken = localStorage.getItem("token");
    if (storedEmail && storedToken) {
      setIsAuthenticated(true);
      setEmail(storedEmail);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
    ? `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`
    : `${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`;
  

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(isLogin ? { email, password } : { name, email, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const data = await response.json();
      toast.success(data.message); // 🔥 Trigger toast
  

      if (isLogin) {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
        setUserEmail(email);

        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.warn("Something went wrong. Please try again."); // 🔥 Trigger toast
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setEmail("");
    setPassword("");
    toast.error("Log out successfully!"); // 🔥 Trigger toast
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-gray-900 via-gray-700 to-gray-900 mt-3 backdrop-blur-lg bg-opacity-30 shadow-lg border border-gray-200 rounded-lg p-8">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {isAuthenticated ? (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
              Welcome, {email}
            </h2>
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
              {isLogin ? "Login" : "Sign Up"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-gray-600 text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              )}
              <div>
                <label className="block text-gray-600 text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="username"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">
              {isLogin ? "Don't have an account?" : "Already have an account?"} {" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-500 hover:underline p-2"
              >
                {isLogin ? "Sign Up !!" : "Login !!"}
              </button>
            </p>
          </>
        )}
      </div>

    </div>
  );
};

// Add PropTypes validation Sending prop to Dasboard
Login.propTypes = {
  setUserEmail: PropTypes.func.isRequired,
};

export default Login;
