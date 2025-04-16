const Header = () => {
  return (
    <>
      <header className="relative w-full h-screen mt-4  bg-white flex flex-col lg:flex-row items-center justify-between px-5 lg:px-12 py-10 ">
      {/* Left Side - Text Content */}
      <div className="flex flex-col items-start justify-center text-left text-black w-full lg:w-1/2 translate-y-3 ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
          Get Better, <span className="text-black">Stronger & </span>Healthier
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl">
          Achieve your fitness goals with the best trainers and world-class gym equipment.
        </p>
        <button className="mt-6 border-2 border-black text-black px-6 py-3 text-lg font-semibold rounded-md hover:bg-black hover:text-white transition">
          All Information
        </button>
      </div>

     {/* Right Side - Responsive Image */}
{/* Right Side - Responsive Image */}
<div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 relative h-full max-h-[90vh] sm:max-h-[70vh] md:max-h-[75vh] lg:max-h-[85vh] overflow-hidden">
  <img
    src="https://media.istockphoto.com/id/827784066/photo/muay-thai-kickboxing-kickboxer-boxing-man-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=ye3dox5oLJl5GTXmUs8LeUi5BNoql9Vv7LCyzU_z53g="
    alt="Fitness Training"
    className="w-full h-full max-w-none max-h-none object-contain rounded-lg"
  />
</div>


    </header>
    </>
  );
};

export default Header;
