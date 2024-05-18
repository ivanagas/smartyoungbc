export default function MobileNav() {
  const handleNavItemClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarToggler');

    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white d-md-none">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#smartyoungbc">Smart Young BC</a>
      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav mr-auto mt-2">
          <li className="nav-item"><a className="nav-link" href="/#smart" onClick={handleNavItemClick}>Smart</a></li>
          <li className="nav-item"><a className="nav-link" href="/#young" onClick={handleNavItemClick}>Young</a></li>
          <li className="nav-item"><a className="nav-link" href="/#cant-win" onClick={handleNavItemClick}>Where BC Can't Win</a></li>
          <li className="nav-item"><a className="nav-link" href="/#choose-bc" onClick={handleNavItemClick}>How To Get Smart Young People To Choose BC</a></li>
          <ul>
            <li className="nav-item"><a className="nav-link" href="/#positive-future" onClick={handleNavItemClick}>BC Can Give Smart Young People the Positive Future They Seek</a></li>
            <li className="nav-item"><a className="nav-link" href="/#important-people" onClick={handleNavItemClick}>Have Important People Say We Want Smart Young People</a></li>
            <li className="nav-item"><a className="nav-link" href="/#future-industries" onClick={handleNavItemClick}>Focus On The Industries of The Future</a></li>
            <li className="nav-item"><a className="nav-link" href="/#unblock" onClick={handleNavItemClick}>Unblock and Unlock Younger Talent</a></li>
            <li className="nav-item"><a className="nav-link" href="/#connect" onClick={handleNavItemClick}>Connect People More Aggressively</a></li>
            <li className="nav-item"><a className="nav-link" href="/#bring-people" onClick={handleNavItemClick}>Bring People Here By Any Means Necessary</a></li>
          </ul>
          <li className="nav-item"><a className="nav-link" href="/#you-do" onClick={handleNavItemClick}>What You Can Do</a></li>
          <li className="nav-item"><a className="nav-link" href="/#end" onClick={handleNavItemClick}>End</a></li>
        </ul>
      </div>
    </nav>
  )
}

