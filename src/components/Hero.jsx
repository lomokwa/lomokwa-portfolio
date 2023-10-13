import { Carousel } from "react-bootstrap"

export default function Hero() {
  return(
    <section className="tw-w-full">
      <Carousel interval={3000} controls={false} className="tw-w-full tw-h-screen tw-sticky tw-z-0">
        <Carousel.Item className="tw-w-full tw-h-screen">
          <img src="../project-thumbnails/collectorscarhub.jpg" alt="Slide 1" className="tw-object-cover tw-w-full tw-brightness-50 tw-h-full" />
        </Carousel.Item>
        <Carousel.Item className="tw-w-full tw-h-screen">
          <img src="../project-thumbnails/checkov.png" alt="Slide 2" className="tw-object-cover tw-w-full tw-brightness-50 tw-h-full" />
        </Carousel.Item >
        <Carousel.Item className="tw-w-full tw-h-screen">
          <img src="../project-thumbnails/moviedb.png" alt="Slide 3" className="tw-object-cover tw-w-full tw-brightness-50 tw-h-full" />
        </Carousel.Item>
      </Carousel>

      <div className="tw-absolute tw-inset-0 tw-z-10 tw-flex tw-justify-center"> 
        <div className="tw-hero">
          <div className="tw-hero-content tw-text-center tw-text-neutral-content">
            <div className="tw-max-w-md">
              <h1 className="tw-mb-5 tw-text-gray-200 tw-text-7xl tw-font-primary"><span className="tw-text-violet-500">HEY,</span> I'M LORENZO</h1>
              <p className="tw-mb-5 tw-text-gray-200 tw-text-4xl tw-font-primary">I'm a full-stack software engineer.</p>
                <div className="tw-space-x-5">
                  <a href="#about" className="tw-no-underline tw-text-gray-200 tw-inline-flex tw-items-center tw-bg-violet-700 tw-border-0 tw-py-1 tw-px-3 tw-focus:outline-none tw-hover:bg-violet-800 tw-rounded tw-mt-4 tw-md:mt-0 tw-font-primary tw-text-2xl">about me</a>
                  <a href="#projects" className="tw-no-underline tw-text-gray-200 tw-inline-flex tw-items-center tw-bg-violet-700 tw-border-0 tw-py-1 tw-px-3 tw-focus:outline-none tw-hover:bg-violet-800 tw-rounded tw-mt-4 tw-md:mt-0 tw-font-primary tw-text-2xl">projects</a>
                </div>
            </div>
          </div>
        </div>             
      </div>   
    </section>
  )
}