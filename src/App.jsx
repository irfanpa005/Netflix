import './App.css'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import RowPosters from './components/RowPosters/RowPosters';
import BannerSection from './components/BannerSection/BannerSection';
import {originals,actions} from './urls'

function App() {

  return (
    <div className='main-body'>
      <Navbar/>
      <BannerSection />
      <RowPosters title="Netflix Originals" url={originals} />
      <RowPosters title="Action Movies" url={actions} isSmall />
    </div>
      
  )
}

export default App
