export default function Home() {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative w-full h-[500px]">
        <img
          src="/image/image.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />

        <div
          className="absolute inset-0 flex items-start 
                  pl-6 pt-16 
                  md:pl-[250px] md:pt-[100px]"
        >
          <h1 className="text-3xl md:text-7xl font-bold text-black">
            OUR
            <br />
            LATEST
            <br />
            <span className="text-yellow-400">PRODUCT</span>
          </h1>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-100 py-16 text-center">
        <h1 className="text-3xl md:text-6xl font-bold text-black">
          <span className="text-yellow-400">Why</span> Choose Us
        </h1>
        <p className="text-2xl text-black py-6">
          Fastest repair service with best price!
        </p>
      </div>

      {/* Yellow Background Section */}
      <div className="bg-yellow-400 ">
        <div className="max-w-6xl mx-auto bg-white  rounded-l  py-20 px-10 -mt-16 mb-16 sh">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {/* Item 1 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-400 text-white text-3xl shadow-md">
                ⚡
              </div>
              <h2 className="text-2xl font-sm mt-6">Data recovery</h2>
              <p className="mt-3 font-sm text-l">
                Perspiciatis eos quos totam
                <br />
                cum minima autPerspiciatis
                <br />
                eos quos
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-400 text-white text-3xl shadow-md">
                💰
              </div>
              <h2 className="text-2xl font-sm mt-6">Computer repair</h2>
              <p className="mt-3 font-sm text-l">
                Perspiciatis eos quos totam
                <br />
                cum minima autPerspiciatis
                <br />
                eos quos
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-400 text-white text-3xl shadow-md">
                🛠️
              </div>
              <h2 className="text-2xl font-sm mt-6">Mobile service</h2>
              <p className="mt-3 font-sm text-l">
                Perspiciatis eos quos totam
                <br />
                cum minima autPerspiciatis
                <br />
                eos quos
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-400 text-white text-3xl shadow-md">
                ⭐
              </div>
              <h2 className="text-2xl font-sm mt-6">Network solutions</h2>
              <p className="mt-3 font-sm text-l">
                Perspiciatis eos quos totam
                <br />
                cum minima autPerspiciatis
                <br />
                eos quos
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              className="text-black border border-black px-6 py-2 
                     transition-all duration-300 
                     hover:bg-black hover:text-white"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
