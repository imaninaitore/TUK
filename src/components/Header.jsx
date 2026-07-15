import React from 'react'
import backgroundImage from "@/assets/bridgeview.jpg"

function Header() {
  return (
    <header  style={{
        backgroundImage:`url(${backgroundImage})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        height: "500px",
        }}>


    </header>
  )
}

export default Header