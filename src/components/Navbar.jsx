export default function Navbar() {
  return(
    <header className="tw-text-gray-200 tw-body-font tw-sticky tw-flex tw-inset-0 tw-z-20 tw-bg-gray-900 tw-h-fit">
      <div className="tw-container tw-mx-auto tw-flex tw-flex-wrap tw-p-5 tw-flex-col md:tw-flex-row tw-items-center">
        <nav className="tw-flex lg:tw-w-2/5 tw-items-center tw-text-base md:tw-ml-auto">
          <a href="#about" className="tw-no-underline tw-mr-5 visited:tw-text-gray-200 hover:tw-text-violet-500 hover:tw-cursor-pointer tw-font-primary tw-text-2xl">About Me</a>
          <a href="#projects" className="tw-no-underline tw-mr-5 visited:tw-text-gray-200 hover:tw-text-violet-500 hover:tw-cursor-pointer tw-font-primary tw-text-2xl">Projects</a>
        </nav>
        <a href="/" className="tw-no-underline tw-flex tw-order-first lg:tw-order-none lg:tw-w-1/5 tw-title-font tw-font-medium tw-items-center tw-text-gray-200 lg:tw-items-center lg:tw-justify-center tw-mb-4 md:tw-mb-0">          
          <span className="tw-ml-3 tw-text-4xl tw-font-primary">LOMOKWA</span>
        </a>
        <div className="lg:tw-w-2/5 tw-inline-flex lg:tw-justify-end tw-ml-5 lg:tw-ml-0">
          <a href="#about" className="tw-no-underline tw-inline-flex tw-items-center visited:tw-text-gray-200 tw-bg-violet-700 tw-border-0 tw-py-1 tw-px-3 focus:tw-outline-none hover:tw-bg-violet-800 tw-rounded tw-mt-4 md:tw-mt-0 tw-font-primary tw-text-2xl">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="tw-w-4 tw=h-4 tw-ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}