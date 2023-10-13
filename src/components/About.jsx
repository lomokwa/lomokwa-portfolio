export default function About() {
  return(
    <section id="about" className="tw-text-gray-600 tw-body-font tw-bg-gray-950 tw-h-fit">
      <div className="tw-container tw-mx-auto tw-flex tw-px-5 tw-py-24 tw-items-center tw-justify-center tw-flex-col">
        <img className="tw-w-3/2 md:tw-w-1/2 tw-mb-10 tw-object-cover tw-object-center tw-rounded" alt="hero" src="../images/foto-busto.png" />
        <div className="tw-text-center tw-lg:w-2/3 tw-w-full">
          <h2 className="tw-title-font tw-sm:text-4xl tw-text-3xl tw-mb-4 tw-font-medium tw-text-gray-200 tw-font-primary"><span className="tw-text-violet-500">About me:</span> Lorenzo Mokwa</h2>
          <p className="tw-overflow-y-scroll tw-h-60 tw-sm:h-full sm:tw-overflow-auto tw-mb-8 tw-leading-relaxed tw-font-primary tw-text-gray-300 tw-text-2xl">Born and raised in Brazil, I moved to the U.S. seven years ago. I've developed a passion for computers from a very young age, which made me find enjoyment in overcoming challenges and discovering the intricacies of computer hardware and software. I've always loved building and taking computers apart. After recently finding the same passion for computer software, and seeing the continuously growing field of software engineering, I decided to pursue it as a career.</p>
          
          <div className="tw-flex tw-flex-wrap tw-justify-evenly">
            <a href="https://github.com/lomokwa" rel="noopener noreferrer" target="_blank">
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="tw-w-[100px] tw-mb-2 tw-inline-block tw-rounded tw-px-6 tw-py-2.5 tw-text-xs tw-font-medium tw-uppercase tw-leading-normal tw-text-white tw-shadow-md tw-transition tw-duration-150 tw-ease-in-out tw-hover:shadow-lg tw-focus:shadow-lg tw-focus:outline-none tw-focus:ring-0 tw-active:shadow-lg"
                style={{backgroundColor: "#333"}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="tw-h-4 tw-w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </button>
            </a>
            <a href="https://www.linkedin.com/in/lomokwa/" rel="noopener noreferrer" target="_blank">
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="tw-w-[100px] tw-mb-2 tw-inline-block tw-rounded tw-px-6 tw-py-2.5 tw-text-xs tw-font-medium tw-uppercase tw-leading-normal tw-text-white tw-shadow-md tw-transition tw-duration-150 tw-ease-in-out tw-hover:shadow-lg tw-focus:shadow-lg tw-focus:outline-none tw-focus:ring-0 tw-active:shadow-lg"
                style={{backgroundColor: "#0077b5"}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="tw-h-4 tw-w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
                LinkedIn
              </button>
            </a>

            <a href="/resume.pdf" rel="noopener noreferrer" target="_blank" className="tw-text-gray-900">
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="tw-w-[100px] tw-mb-2 tw-inline-block tw-rounded tw-px-6 tw-py-2.5 tw-text-xs tw-font-medium tw-uppercase tw-leading-normal tw-text-white tw-shadow-md tw-transition tw-duration-150 tw-ease-in-out tw-hover:shadow-lg tw-focus:shadow-lg tw-focus:outline-none tw-focus:ring-0 tw-active:shadow-lg"
                style={{backgroundColor: "#ffff"}}>
                <svg className="tw-h-4 tw-w-4" fill="none" viewBox="0 0 24 24" stroke="#000000">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
              </svg>
                <span className="tw-text-gray-950">Resume</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}