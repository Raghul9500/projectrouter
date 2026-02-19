export default function Home() {
  return (
    <div className="w-full">
      {/* Service Process Heading */}
      <div className="bg-gray-100 py-16 text-center">
        <h1 className="text-3xl md:text-6xl font-bold text-black">
          <span className="text-yellow-400">Service </span>Process
        </h1>
        <p className="text-xl md:text-2xl text-black py-6">
          Easy and effective way to get your device repair
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center ...">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-yellow-400 text-white text-2xl">
              ⚡
            </div>
            <h2 className="text-2xl font-semibold mb-4">Fast service</h2>
            <p className="text-gray-600">Exerci tation...</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-yellow-400 text-white text-2xl">
              🔒
            </div>
            <h2 className="text-2xl font-semibold mb-4">Secure payments</h2>
            <p className="text-gray-600">
              Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-yellow-400 text-white text-2xl">
              👨‍🔧
            </div>
            <h2 className="text-2xl font-semibold mb-4">Expert team</h2>
            <p className="text-gray-600">
              Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-yellow-400 text-white text-2xl">
              💰
            </div>
            <h2 className="text-2xl font-semibold mb-4">Affordable services</h2>
            <p className="text-gray-600">
              Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-yellow-400 text-white text-2xl">
              🛡️
            </div>
            <h2 className="text-2xl font-semibold mb-4">90 Days warranty</h2>
            <p className="text-gray-600">
              Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-yellow-400 text-white text-2xl">
              🏆
            </div>
            <h2 className="text-2xl font-semibold mb-4">Award winning</h2>
            <p className="text-gray-600">
              Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            </p>
          </div>
        </div>
      </div>

      {/* Our Products Section */}
      <div className="bg-white py-20 text-center justify-between">
        <h1 className="text-3xl md:text-5xl font-bold text-black">
          <span className="text-yellow-400">Our</span> Products
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-6 max-w-2xl mx-auto">
          We package the products with best services to make you a happy
          customer.
        </p>
      </div>
    </div>
  );
}
