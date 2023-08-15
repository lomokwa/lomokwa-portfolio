export default function About() {
  return(
    <section id="about" className="text-gray-600 body-font bg-gray-950 h-screen">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="../images/foto-busto.png" />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200 font-primary"><span className="text-violet-500">About me:</span> Lorenzo Mokwa</h1>
          <p className="mb-8 leading-relaxed font-primary text-gray-300 text-2xl">Born and raised in Brazil, I moved to the U.S. seven years ago. I've developed a passion for computers from a very young age, which made me find enjoyment in overcoming challenges and discovering the intricacies of computer hardware and software. I've always loved building and taking computers apart. After recently finding the same passion for computer software, and seeing the continuously growing field of software engineering, I decided to pursue it as a career.</p>
          <div className="flex justify-center space-x-5">
            <a href="https://github.com/lomokwa" rel="noreferrer" target="_blank" className="inline-flex text-white bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded-full text-lg">
              <svg className="h-6 w-6 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <p className="text-gray-950 font-primary text-2xl ml-2">Github</p>
            </a>
            <a className="inline-flex text-white bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded-full text-lg">
              <svg className="h-6 w-6 text-blue-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" />
              </svg>
              <p className="text-gray-950 font-primary text-2xl ml-2">LinkedIn</p>
            </a>
            <a href="/resume.pdf" rel="noreferrer" target="_blank" className="inline-flex text-white bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded-full text-lg">
              <svg className="h-6 w-6 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
              </svg>
              <p className="text-gray-950 font-primary text-2xl ml-2">Resume</p>
            </a>
            <a href="https://www.youtube.com/@lomokwa" rel="noreferrer" target="_blank" className="inline-flex text-white bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded-full text-lg">
              <svg className="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
              <p className="text-gray-950 font-primary text-2xl ml-2">YouTube</p>
            </a>            
          </div>
        </div>
      </div>
    </section>
  )
}