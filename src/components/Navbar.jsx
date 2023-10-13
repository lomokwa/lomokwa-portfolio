export default function Navbar() {
  return(
    <header className="tw-max-w-screen">
      <div className="tw-flex tw-justify-between">
        <nav className="tw-flex tw-justify-between">
          <a href="#about" className="tw-no-underline">About Me</a>
          <a href="#projects" className="tw-no-underline">Projects</a>
        </nav>
        <a href="/">          
          <span className="tw-no-underline">LOMOKWA</span>
        </a>
        <div>
          <a href="#about" className="tw-no-underline">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="tw-w-4 tw=h-4 tw-ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}