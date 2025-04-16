import { useState, useEffect } from "react"; // Import useState and useEffect
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirect

const Navbar = () => {
  // State to store the user email
  const [userEmail, setUserEmail] = useState(null);

  // Initialize useNavigate hook to redirect after logout or login
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the email from localStorage on component mount
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setUserEmail(storedEmail); // Set userEmail state from localStorage if available
    
    }
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("email"); // Remove email from localStorage
    setUserEmail(null); // Reset the userEmail state
    navigate("/login"); // Redirect to login page after logout
  };

  // Function to handle login navigation
  const handleLogin = () => {
    navigate("/login"); // Navigate to login page
  };

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full bg-black h-auto sm:h-12 md:h-20 lg:h-24 sm:px-2 sm:py-1 md:px-6 md:py-4 px-4 py-4 flex flex-wrap justify-between items-center z-10">
        {/* Logo */}
        <h1 className="text-base sm:text-2xl md:text-1xl font-bold text-white flex items-center ">
          <span className="hidden sm:flex w-24 items-center">Train_With_Us</span>
        </h1>

        {/* Menu and Button Container */}
        <div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-8 md:gap-x-18 min-w-[100px] ">
          <ul className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-4 md:space-x-6 text-white text-sm sm:text-lg md:text-xl ">
            <li>
              <Link to="/" className="font-bold px-2 py-1 rounded-md hover:bg-gray-700 text-white no-underline hover:no-underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/physical" className="font-bold px-2 py-1 rounded-md hover:bg-gray-700 text-white no-underline hover:no-underline">
                Physical
              </Link>
            </li>
            <li>
              <Link to="/diet" className="font-bold px-2 py-1 rounded-md hover:bg-gray-700 text-white no-underline hover:no-underline">
                Diet
              </Link>
            </li>
            <li>
              <Link to="/mind" className="font-bold px-2 py-1 rounded-md hover:bg-gray-700 text-white no-underline hover:no-underline">
                Mind Care
              </Link>
            </li>
            <li>
              <Link to="/trackpro" className="font-bold px-2 py-1 rounded-md hover:bg-gray-700 text-white no-underline hover:no-underline">
                TrackPro
              </Link>
            </li>
            <li>
              <Link to="/fitquest" className="font-bold px-2 py-1 rounded-md hover:bg-gray-700 text-white no-underline hover:no-underline">
                FitQuest
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="font-bold px-2 py-1 rounded-md hover:bg-gray-700 text-white no-underline hover:no-underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="font-bold px-2 py-1 rounded-md hover:bg-gray-700 text-white no-underline hover:no-underline">
                Dashboard
              </Link>
            </li>

            {/* Conditional render for login/logout button */}
            <li>
              <button
                onClick={userEmail ? handleLogout : handleLogin} // Redirect to login page if no email, else log out
                className="font-bold px-2 sm:px-2 md:px-5 py-1 sm:py-2 md:py-2.5 rounded-md bg-black border border-white hover:bg-white hover:text-black cursor-pointer flex flex-col items-center transform"
              >
                <span className="transition duration-100">
                  Login
                </span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
