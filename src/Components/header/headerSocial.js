import React from 'react';
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"

const headerSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/harsh-patel-1024ab200/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/HarshPatel31" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/harshpatel200624/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default headerSocial