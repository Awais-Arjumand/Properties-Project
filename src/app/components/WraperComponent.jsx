import React from 'react'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

const WraperComponent = ({children}) => {
  return (
    <div>

        <NavBar />
      {children}
      <Footer/>
    </div>
  )
}

export default WraperComponent
