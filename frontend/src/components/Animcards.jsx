import { toast } from "react-toastify";


const Animcards = () => {
  const handlePayment = (amount) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY, // Replace with your Razorpay API Key
      amount: amount * 100, // Razorpay accepts amount in paise (₹1 = 100 paise)
      currency: "INR",
      name: "Your Gym",
      description: "Subscription Payment",
      image: "https://your-logo-url.com", // Optional: Your company logo
      handler: function (response) {
        toast.success(`Payment successful! Payment ID: ${response.razorpay_payment_id}`)
      },
      prefill: {
        name: "Tarun Rawat", // Replace with dynamic user data
        email: "tarun@example.com",
        contact: "9000000000",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-3xl md:text-4xl mb-2 mt-10">
          Subscription Plans
        </h1>
        <div className="container w-full mx-auto px-4">
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 m-10">
            
            {/* Weekly Subscription */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:ring-4 hover:ring-gray-300 hover:-translate-y-2 p-6">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww"
                alt="Gym"
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="text-center mt-4">
                <h2 className="text-xl font-semibold">Weekly Subscription</h2>
                <p className="text-gray-500 text-sm mb-3">Perfect for short-term fitness goals.</p>
                <ul className="text-sm text-gray-600 mb-4 text-left">
                  <li>✔ Access to all gym facilities</li>
                  <li>✔ Personalized workout plan</li>
                  <li>✔ No long-term commitment</li>
                </ul>
                <button
                  onClick={() => handlePayment(499)}
                  className="bg-blue-600 text-white px-2 py-2 ml-2 text-sm rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 mt-2"
                >
                  Purchase - ₹499
                </button>
              </div>
            </div>

            {/* Monthly Subscription */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:ring-4 hover:ring-gray-300 hover:-translate-y-2 p-6">
              <img
                src="https://plus.unsplash.com/premium_photo-1731622041338-bbbd16719ff6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYWslMkNtb250aCUyMHllYXJ8ZW58MHx8MHx8fDA%3D"
                alt="Mind"
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="text-center mt-4">
                <h2 className="text-xl font-semibold">Monthly Subscription</h2>
                <p className="text-gray-500 text-sm mb-3">Stay consistent and achieve your fitness goals.</p>
                <ul className="text-sm text-gray-600 mb-4 text-left">
                  <li>✔ Unlimited gym access</li>
                  <li>✔ Personal trainer assistance</li>
                  <li>✔ Diet & workout consultation</li>
                </ul>
                <button
                  onClick={() => handlePayment(1499)}
                  className="bg-blue-600 text-white px-2 py-2 ml-2 text-sm rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 mt-2"
                >
                  Purchase - ₹1499
                </button>
              </div>
            </div>

            {/* Yearly Subscription */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:ring-4 hover:ring-gray-300 hover:-translate-y-2 p-6">
              <img
                src="https://media.istockphoto.com/id/2188005504/photo/silhouette-of-a-girl-jumping-joyfully-at-sunset-while-celebrating-the-arrival-of-2025.webp?a=1&b=1&s=612x612&w=0&k=20&c=K_h7Abxezt5X5Mld9O4JJo9zbojrFba-6ANmK6sHDeI="
                alt="Diet"
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="text-center mt-4">
                <h2 className="text-xl font-semibold">Yearly Subscription</h2>
                <p className="text-gray-500 text-sm mb-3">Commit to a healthier lifestyle long-term.</p>
                <ul className="text-sm text-gray-600 mb-4 text-left">
                  <li>✔ 24/7 gym access</li>
                  <li>✔ Advanced workout programs</li>
                  <li>✔ Exclusive nutrition & wellness plans</li>
                </ul>
                <button
                  onClick={() => handlePayment(14999)}
                  className="bg-blue-600 text-white px-2 py-2 ml-2 text-sm rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 mt-2"
                >
                  Purchase - ₹14,999
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Animcards;
