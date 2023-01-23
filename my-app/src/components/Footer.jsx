import React from 'react'
import { SiLinkedin } from 'react-icons/si'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { BsGithub } from 'react-icons/bs'
const Footer = () => {
  return (
    <>
      <div style={{width:"100%",height:"120px",backgroundColor:"lightgrey",fontSize:"25px",textAlign:"center",margin:"auto"}}>
          <div>
             <span>Made by Hari Singh Bisht </span>
          </div>
            <div>
                <span>Social Links</span>
            </div>
          <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <div>
                <button><SiLinkedin /></button>
            </div>
            <div>
                <button><GiEarthAfricaEurope /></button>
            </div>
            <div>
                <button><BsGithub /></button>
            </div>
          </div>
      </div>
    </>
  )
}

export default Footer
