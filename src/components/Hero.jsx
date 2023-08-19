
function Hero() {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[560px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-1 00 max-h-[560px] bg-black/40 flex flex-col justify-center"> 

          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">The <span className="text-orange-500">Best</span></h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"><span className="text-orange-500">Foods</span> Delivered</h1>
        </div>
        <img className="object-cover max-h-[560px] w-full" src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Food" />
      </div>
    </div>
  )
}

export default Hero