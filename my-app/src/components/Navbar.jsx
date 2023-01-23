import React from 'react'
import {Link } from "react-router-dom"

import { BsCartCheck } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import styles from "./navbar.module.css"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,

} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
          <div className={styles.navbar2}>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/product">Product</Link>
            </div>
            <div>
              <Link to="/addproduct">AddProduct</Link>
            </div>
          </div>
          <div style={{display:"flex",gap:"35px"}}>
              <div>
                <Link to="/login">Login</Link>
                    {/*  Logout Button*/}
              </div>
              <div>
                {/* <span>Name</span> */}
              </div>
              <div style={{marginTop:"5px"}}>
                        <Menu>
                            <MenuButton 
                              aria-label='Options'
                              variant='outline'
                              textAlign="center"
                            ><span><CgProfile /></span></MenuButton>
                            <MenuList textAlign="center">
                              <MenuItem  >
                                New Tab
                              </MenuItem>
                              <MenuItem  >
                                New Window
                              </MenuItem>
                              <MenuItem  >
                                Open Closed Tab
                              </MenuItem>
                              <MenuItem  >
                                Open File...
                              </MenuItem>
                            </MenuList>
                        </Menu>
                  </div>
              <div style={{display:"flex" ,alignItems:"center" ,gap:"5px"}}>
                <Link to="/cart">Cart</Link>
                <i><BsCartCheck /></i>
              </div>
                  
              </div>
      </div>
    

    </>
  )
}

export default Navbar
