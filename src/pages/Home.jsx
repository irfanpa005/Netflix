import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar/Navbar'
import RowPosters from '../components/RowPosters/RowPosters';
import BannerSection from '../components/BannerSection/BannerSection';
import {originals,actions,drama,family,comedy} from '../urls'

function Home() {
  return (
    <div className='main-body'>
      <Navbar/>
      <BannerSection />
      <RowPosters title="Netflix Originals" url={originals} />
      <RowPosters title="Action Movies" url={actions} isSmall />
      <RowPosters title="Comedy" url={comedy} isSmall />
      <RowPosters title="Drama" url={drama} isSmall />
      <RowPosters title="Family" url={family} isSmall />
    </div>
  )
}

export default Home
