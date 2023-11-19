export default function Navbar() {
  return(
    <header className="tw-max-w-screen tw-h-20">
      <div className="tw-flex tw-justify-around tw-bg-gray-950 tw-font-primary tw-text-3xl">
        <div className="tw-flex tw-justify-around tw-mt-6">
          <a href="#about" className="tw-no-underline tw-mr-10 tw-text-violet-500">About Me</a>
          <a href="#projects" className="tw-no-underline tw-text-violet-500">Projects</a>
        </div>
        <a href="/" className="tw-no-underline tw-mt-5">          
          <span className="tw-text-5xl tw-text-gray-200">LOMOKWA</span>
        </a>
        <div className="tw-flex">
          <a href="#about" className="tw-no-underline tw-text-violet-500 tw-mt-6">
            Learn More
          </a>
        </div>
      </div>
    </header>
  )
}