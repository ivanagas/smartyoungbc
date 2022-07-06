export default function MobileNav() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white d-md-none">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#smartyoungbc">Smart Young BC</a>
      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav mr-auto mt-2">
          <li className="nav-item"><a className="nav-link" href="/#smart">Smart</a></li>
          <li className="nav-item"><a className="nav-link" href="/#young">Young</a></li>
          <li className="nav-item"><a className="nav-link" href="/#cant-win">Where BC Can't Win</a></li>
          <li className="nav-item"><a className="nav-link" href="/#choose-bc">How To Get Smart Young People To Choose BC</a></li>
          <ul>
            <li className="nav-item"><a className="nav-link" href="/#positive-future">BC Can Give Smart Young People the Positive Future They Seek</a></li>
            <li className="nav-item"><a className="nav-link" href="/#important-people">Have Important People Say We Want Smart Young People</a></li>
            <li className="nav-item"><a className="nav-link" href="/#future-industries">Focus On The Industries of The Future</a></li>
            <li className="nav-item"><a className="nav-link" href="/#unblock">Unblock and Unlock Younger Talent</a></li>
            <li className="nav-item"><a className="nav-link" href="/#connect">Connect People More Aggressively</a></li>
            <li className="nav-item"><a className="nav-link" href="/#bring-people">Bring People Here By Any Means Necessary</a></li>
          </ul>
          <li className="nav-item"><a className="nav-link" href="/#you-do">What You Can Do</a></li>
          <li className="nav-item"><a className="nav-link" href="/#end">End</a></li>
        </ul>
      </div>
    </nav>
  )
}

