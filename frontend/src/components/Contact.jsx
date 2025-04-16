import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORM_ACCESS_KEY); // replace with your actual key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
	  toast.success("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.error("Error", data);
	  toast.error("Something went wrong ❌");
    }
  };

  return (
    <div className="bg-gray-200 px-4 py-10 sm:px-6 md:px-10 lg:px-20 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Fill the form to contact us directly. Your message is valuable, and your feedback helps us improve.
          </p>

          <form className="space-y-5" onSubmit={onSubmit}>
            <div>
              <p className="text-base font-medium text-gray-700">Name:</p>
              <input
                type="text"
                name="name"
                required
                placeholder="Please enter name..."
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <p className="text-base font-medium text-gray-700">Email:</p>
              <input
                type="email"
                name="email"
                required
                placeholder="Please enter email..."
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <p className="text-base font-medium text-gray-700">Message:</p>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Please enter query..."
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full border-2 border-black text-black px-6 py-2 text-lg font-semibold rounded-md hover:bg-black hover:text-white transition"
            >
              Submit
            </button>

            <p className="text-green-600 font-medium mt-2">{result}</p>
          </form>
        </div>

        {/* Image / Info Section */}
        <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">It is easy to get in touch with us.</h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            May this form help you a lot in reaching out to us easily.
          </p>
          <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/1660570200/photo/hand-of-call-center-touching-on-screen-contact-us-email-address-operator-customer-suppor.webp?a=1&b=1&s=612x612&w=0&k=20&c=NhV81vE6U-_OT6pBqRjUOEof8QzskCgk7z2nxnEEhSE="
              alt="Contact Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
