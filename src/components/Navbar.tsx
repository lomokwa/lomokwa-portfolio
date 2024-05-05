export default function Navbar() {

  return (
  <>
    <div className="flex justify-center bg-[#0e1522] fixed w-full z-50">
      <div className="navbar xl:max-w-[1024px]">
        <div className="flex-none">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </div>
            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
              <li><a href="#tech">Tech</a></li> 
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href='/docs/mokwa-lorenzo-resume.pdf' rel='noopener noreferrer' target='_blank'>Resumé</a></li>
              <li><a href="https://www.linkedin.com/in/lomokwa/" rel='noopener noreferrer' target='_blank'>LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">lomokwa</a>
        </div>
      </div>
    </div>
  </>
  );
}