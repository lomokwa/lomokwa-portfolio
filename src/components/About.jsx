export default function About() {
  return(
    <section id="about" className="text-gray-600 body-font bg-gray-950 h-screen">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="../images/foto-busto.png" />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200 font-primary"><span className="text-violet-500">About me:</span> Lorenzo Mokwa</h1>
          <p className="overflow-y-scroll h-60 sm:h-full sm:overflow-auto mb-8 leading-relaxed font-primary text-gray-300 text-2xl">Born and raised in Brazil, I moved to the U.S. seven years ago. I've developed a passion for computers from a very young age, which made me find enjoyment in overcoming challenges and discovering the intricacies of computer hardware and software. I've always loved building and taking computers apart. After recently finding the same passion for computer software, and seeing the continuously growing field of software engineering, I decided to pursue it as a career.</p>
          
          <div className="space-x-5 space-y-2">
            <a href="https://github.com/lomokwa" rel="noreferrer" target="_blank" className="inline-flex text-white bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded-full text-lg">
              <svg class="h-6 w-6 text-gray-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
              </svg>
              <p className="text-gray-950 font-primary text-2xl ml-2">GitHub</p>
            </a>
            <a href="https://www.linkedin.com/in/lomokwa/" rel="noreferrer" target="_blank" className="inline-flex text-white bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded-full text-lg">
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
            <a href="https://open.spotify.com/user/t6y78ewcse3lp0qllyqus03wt?si=4ced43e76cfd4808" rel="noreferrer" target="_blank" className="inline-flex text-white bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded-full text-lg">    
              <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path fill-rule="nonzero" d="M12 2c5.55 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0 2c-4.395 0-8 3.605-8 8s3.605 8 8 8 8-3.605 8-8c0-4.414-3.573-8-8-8zm3.75 12.65c-2.35-1.45-5.3-1.75-8.8-.95-.35.1-.65-.15-.75-.45-.1-.35.15-.65.45-.75 3.8-.85 7.1-.5 9.7 1.1.35.15.4.55.25.85-.2.3-.55.4-.85.2zm1-2.7c-2.7-1.65-6.8-2.15-9.95-1.15-.4.1-.85-.1-.95-.5-.1-.4.1-.85.5-.95 3.65-1.1 8.15-.55 11.25 1.35.3.15.45.65.2 1s-.7.5-1.05.25zM6.3 9.75c-.5.15-1-.15-1.15-.6-.15-.5.15-1 .6-1.15 3.55-1.05 9.4-.85 13.1 1.35.45.25.6.85.35 1.3-.25.35-.85.5-1.3.25C14.7 9 9.35 8.8 6.3 9.75z"/> </g> 
              </svg>
              <p className="text-gray-950 font-primary text-2xl ml-2">Spotify</p>
            </a>  
          </div>
        </div>
      </div>
    </section>
  )
}