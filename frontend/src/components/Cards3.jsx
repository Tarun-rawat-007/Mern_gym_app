import { Link } from 'react-router-dom';

const Cards3 = () => {
  return (
    <>
      <h1 className="text-center font-bold mb-3 p-5 text-4xl sm:text-5xl md:text-6xl">Features</h1>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {/* Card 1 */}
        <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg">
          <img
            src="https://media.istockphoto.com/id/618209684/photo/strong-muscular-men.webp?a=1&b=1&s=612x612&w=0&k=20&c=YsFGouecCAPTP0DcjSiN63lH6Gl8G4df4caEAGP0GuM="
            alt="Physical Health"
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Physical Health</h2>
            <p className="text-gray-700 mb-4">Take care of your body. It’s the only place you have to live. – Jim Rohn</p>
            <Link
              to="/physical"
              className="text-blue-500 font-semibold transition duration-300 ease-in-out hover:text-blue-700 hover:underline hover:scale-105 inline-block"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg">
          <img
            src="https://plus.unsplash.com/premium_photo-1682795706664-248cbb76f1c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TUlORCUyMENBUlRUT058ZW58MHx8MHx8fDA%3D"
            alt="Mental Health"
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Mental Health</h2>
            <p className="text-gray-700 mb-4">A calm mind brings inner strength and self-confidence. – Dalai Lama</p>
            <Link
              to="/mind"
              className="text-blue-500 font-semibold transition duration-300 ease-in-out hover:text-blue-700 hover:underline hover:scale-105 inline-block"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Diet Planning"
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Diet Planning</h2>
            <p className="text-gray-700 mb-4">A good diet is about making healthy choices that nourish your body and mind.</p>
            <Link
              to="/diet"
              className="text-blue-500 font-semibold transition duration-300 ease-in-out hover:text-blue-700 hover:underline hover:scale-105 inline-block"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards3;
