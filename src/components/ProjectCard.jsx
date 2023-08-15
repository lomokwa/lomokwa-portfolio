export default function ProjectCard() {
  return(
    <div id="projects" className="snap-y h-screen border border-red-500">
      <div className="snap-normal snap-center flex justify-around">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="../images/collectorscarhub.jpg" alt="Collector's Car Hub thumbnail" /></figure>
          <div className="card-body">
            <h2 className="card-title">Collector's Car Hub</h2>
            <p>A user-curated, car marketplace aggregator.</p>
            <div className="card-actions justify-end">
              <a href="https://collectorscarhub.com" rel="noreferrer" target="blank" className="btn btn-primary">LIVE</a>
              <a href="https://collectorscarhub.com" rel="noreferrer" target="blank" className="btn btn-primary">REPO</a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="../images/checkov.png" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Checkov To-do</h2>
            <p>A simple to-do application.</p>
            <div className="card-actions justify-end">
              <a href="https://collectorscarhub.com" rel="noreferrer" target="blank" className="btn btn-primary">LIVE</a>
              <a href="https://collectorscarhub.com" rel="noreferrer" target="blank" className="btn btn-primary">REPO</a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="../images/collectorscarhub.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Collector's Car Hub</h2>
            <p>A user-curated, car marketplace aggregator.</p>
            <div className="card-actions justify-end">
              <a href="https://collectorscarhub.com" rel="noreferrer" target="blank" className="btn btn-primary">LIVE</a>
              <a href="https://collectorscarhub.com" rel="noreferrer" target="blank" className="btn btn-primary">REPO</a>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}