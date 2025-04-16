const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <a href="#" className="flex items-center space-x-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1673485530986-433320acdb8a?w=500&auto=format&fit=crop&q=60"
                className="h-8"
                alt="Logo"
              />
              <span className="text-2xl font-semibold">Tarun Rawat</span>
            </a>
            <span className="text-lg font-semibold text-center sm:text-left">Follow us on</span>
            <ul className="flex flex-wrap justify-center sm:justify-start items-center gap-4 text-sm text-gray-400">
              <li><a href="#" className="hover:underline hover:text-white">About</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Licensing</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Contact</a></li>
            </ul>
          </div>

          <hr className="my-6 border-gray-700" />

          {/* Quick Links and Social Icons Section */}
          <div className="flex flex-col md:flex-row justify-between gap-10 text-gray-400 mb-6">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline hover:text-white">Home</a></li>
                <li><a href="#" className="hover:underline hover:text-white">Services</a></li>
                <li><a href="#" className="hover:underline hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:underline hover:text-white">FAQ</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: 'Facebook', src: 'https://cdn-icons-png.flaticon.com/128/733/733547.png' },
                { name: 'Instagram', src: 'https://cdn-icons-png.flaticon.com/128/1384/1384063.png' },
                { name: 'Twitter', src: 'https://cdn-icons-png.flaticon.com/128/3256/3256013.png' },
                { name: 'LinkedIn', src: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png' },
                { name: 'YouTube', src: 'https://cdn-icons-png.flaticon.com/128/187/187210.png' },
              ].map((social, idx) => (
                <div key={idx} className="flex flex-col items-center w-20">
                  <a href="#" className="hover:text-white transition-transform transform hover:scale-110">
                    <img src={social.src} alt={social.name} className="w-8 h-8" />
                  </a>
                  <span className="text-white text-sm mt-2">{social.name}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
              <div className="flex items-center space-x-2 mb-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
                  alt="Email"
                  className="w-6 h-6"
                />
                <span>rawatt179@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/463/463387.png"
                  alt="Phone"
                  className="w-6 h-6"
                />
                <span>+1 (234) 567-8900</span>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <span className="block text-sm text-gray-400 text-center">
            Have your Fitness <strong>Train_with_us™</strong> © 2025 . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
