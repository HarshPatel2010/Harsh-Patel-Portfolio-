import React from 'react'
import CV from "../../assets/harshUpdatedCV.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>DOWNLOAD CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA