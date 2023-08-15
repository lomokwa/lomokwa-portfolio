export default function Hero() {
  return(
    <>
      <div className="visible carousel w-full h-screen">
        <div id="item1" className="carousel-item w-full h-screen">
          <img src="../images/collectorscarhub.jpg" className="object-cover w-full" />
        </div> 
        <div id="item2" className="carousel-item  w-full h-screen">
          <img src="../images/moviedb.png" className="object-cover w-full" />
        </div> 
        <div id="item3" className="carousel-item  w-full h-screen">
          <img src="../images/checkov.png" className="object-cover w-full" />
        </div> 
        <div id="item4" className="carousel-item  w-full h-screen">
          <img src="../images/collectorscarhub.jpg" className="object-cover w-full" />
        </div>
      </div>
      <div className="absolute h-screen visible opacity-80 inset-0 z-20 bg-black"></div>
      <div className="absolute inset-1 z-30 flex justify-start"> 
        <div className="hero min-h-screen">
          <div className="h-full w-full hero-content text-center text-neutral-content px-20 py-10 rounded-md">
            <div className="max-w-md">
              <h1 className="mb-5 text-gray-200 text-7xl font-primary"><span className="text-violet-500">HEY,</span> I'M LORENZO</h1>
              <p className="mb-5 text-gray-200 text-4xl font-primary">I'm a full-stack software engineer.</p>
              <a href="#about" className="text-gray-200 inline-flex items-center bg-violet-700 border-0 py-1 px-3 focus:outline-none hover:bg-violet-800 rounded mt-4 md:mt-0 font-primary text-2xl">about me</a>
            </div>
          </div>
        </div>             
      </div>   
      <div className="absolute visible bottom-0 flex justify-center w-full py-2 gap-2 z-30">
        <a href="#item1" rel="noreferrer" className="btn btn-xs">1</a> 
        <a href="#item2" rel="noreferrer" className="btn btn-xs">2</a> 
        <a href="#item3" rel="noreferrer" className="btn btn-xs">3</a> 
      </div>
    </>
  )
}