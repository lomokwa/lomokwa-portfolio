export default function Hero() {
  return(
    <>
      <div className="invisible md:visible carousel w-full h-screen">
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
      <div className="absolute invisible md:visible opacity-80 inset-0 z-20 bg-black"></div>
      <div className="absolute inset-1 z-30 flex justify-start"> 
        <div className="hero min-h-screen">
          <div className="h-full w-full sm:hero-content sm:text-center sm:text-neutral-content sm:px-20 sm:py-10 sm:rounded-md md:h-fit md:w-fit">
            <div className="max-w-md">
              <h1 className="mb-5 text-gray-200 text-7xl font-bold"><span className="text-violet-500">Hey!</span> I'm Lorenzo</h1>
              <p className="mb-5 text-gray-200 text-3xl font-bold">I'm a full-stack software engineer who recently graduated from a bootcamp</p>
              <a href="#projects" className="btn btn-primary">Check out my work!</a>
            </div>
          </div>
        </div>             
      </div>   
      <div className="absolute invisible md:visible bottom-0 flex justify-center w-full py-2 gap-2 z-40">
        <a href="#item1" rel="noreferrer" className="btn btn-xs">1</a> 
        <a href="#item2" rel="noreferrer" className="btn btn-xs">2</a> 
        <a href="#item3" rel="noreferrer" className="btn btn-xs">3</a> 
      </div>
    </>
  )
}