import React from 'react'
import MapwithMarkers from './MapwithMarkers'
import Footer from './Footer'
import Header from './Header'
import SearchBar from './SearchBar'

function Main() {
  return (
    <div  style={{margin:"20px"}}>
      <Header />
      <div >
        <SearchBar />
      </div>
      <div style={{margin:"20px", padding:"10px", border:"1px solid #D3D3D3", borderRadius:"10px"}}>
        <MapwithMarkers />
      </div>
      <Footer />
    </div>
  )
}

export default Main
