export default function Sidebar() {
  return (
    <div className='col-4 col-md-4 col-lg-3 me-sm-0 d-none d-md-block'>
      <div className='sticky-top'>
        <div style={{ height: '110px' }} className='d-none d-md-block'></div>
        <ul>
          <li><a href="#smart">Smart</a></li>
          <li><a href="#young">Young</a></li>
          <li><a href="#cant-win">Where BC Can't Win</a></li>
          <li><a href="#choose-bc">How To Get Smart Young People To Choose BC</a></li>
          <ul>
            <li><a href="#positive-future">BC Can Give Smart Young People the Positive Future They Seek</a></li>
            <li><a href="#important-people">Have Important People Say We Want Smart Young People</a></li>
            <li><a href="#future-industries">Focus On The Industries of The Future</a></li>
            <li><a href="#unblock">Unblock and Unlock Younger Talent</a></li>
            <li><a href="#connect">Connect People More Aggressively</a></li>
            <li><a href="#bring-people">Bring People Here By Any Means Necessary</a></li>
          </ul>
          <li><a href="#you-do">What You Can Do</a></li>
          <li><a href="#end">End</a></li>
        </ul>
        <p className='ps-3'><a href="#smartyoungbc">Back to Top</a></p>
        <p className='ps-3'>Share: <a href='https://twitter.com/intent/tweet?text=https%3A//www.smartyoungbc.com/' target='_blank'>Twitter</a>, <a href='https://www.facebook.com/sharer/sharer.php?u=https%3A//www.smartyoungbc.com/' target='_blank'>Facebook</a>, <a href='mailto:?subject=Smart%20Young%20BC&body=https%3A%2F%2Fwww.smartyoungbc.com%2F' target='_blank'>Email</a></p>
      </div>
    </div>
  )
}
