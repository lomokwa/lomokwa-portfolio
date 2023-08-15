export default function Navbar() {
  return(
    <header class="invisible sm:visible text-gray-200 body-font absolute flex inset-0 z-40 bg-gray-900 h-fit">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a href="#about" class="mr-5 hover:text-violet-500 hover:cursor-pointer font-primary text-2xl">About Me</a>
          <a class="mr-5 hover:text-violet-500 hover:cursor-pointer font-primary text-2xl">Second Link</a>
          <a class="mr-5 hover:text-violet-500 hover:cursor-pointer font-primary text-2xl">Third Link</a>
          <a class="hover:text-violet-500 hover:cursor-pointer font-primary text-2xl">Fourth Link</a>
        </nav>
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-200 lg:items-center lg:justify-center mb-4 md:mb-0">          
          <span class="ml-3 text-4xl font-primary">LOMOKWA</span>
        </a>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex items-center bg-violet-700 border-0 py-1 px-3 focus:outline-none hover:bg-violet-800 rounded mt-4 md:mt-0 font-primary text-2xl">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}