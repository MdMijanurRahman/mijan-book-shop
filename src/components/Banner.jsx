// src/components/Banner.jsx
const Banner = () => {
    return (
      <div className="flex items-center justify-between bg-gray-100 p-6">
        <div className="text-left">
          <h1 className="text-4xl font-bold text-orange-600">Unlock a World of Stories</h1>
          <p className="mt-2 text-lime-400 font-bold">Find Your Next Favorite Book at Mijan Book Shop</p>
          {/* <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Buy Book</button> */}
        </div>
        <img
          src=".\src\assets\sample_banner.jpg"
          alt="Banner"
          className="w-1/2 h-72"
        />
      </div>
    );
  };
  
  export default Banner;
  