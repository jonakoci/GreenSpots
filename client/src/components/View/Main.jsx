import React from 'react'
import MapwithMarkers from './MapwithMarkers'
import Footer from './Footer'
import Header from './Header'
import SearchBar from './SearchBar'

function Main() {
  return (
    <div>
      <Header />
      <SearchBar />
      <MapwithMarkers />
      <Footer />
    </div>
  )
}

export default Main
