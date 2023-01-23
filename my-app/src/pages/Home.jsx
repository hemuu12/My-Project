import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Allroutes from '../Routes/allroutes'
import styles from "./Home.module.css"
import Productpage from './Productpage'

const Home = () => {
  return (
    <>

      <div className={styles.box}>
        <Navbar />
        <Productpage/>  
       
        
        <Footer />
      </div>
      

    </>
  )
}

export default Home
