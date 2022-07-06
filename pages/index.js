import Header from '@components/Header'
import MobileNav from '@components/MobileNav'
import Body from '@components/Body'
import Sidebar from '@components/Sidebar'

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <div style={{ height: '60px' }} className='d-none d-md-block'></div>
        <MobileNav />
        <div className='row pb-4 pt-4 pt-md-0 justify-content-center'>
          <Body />
          <Sidebar />
        </div>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossOrigin="anonymous"></script>
    </div>
  )
}
