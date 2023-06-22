import { Box } from '@chakra-ui/react'
import React from 'react'
import "../styles/Navbar.css"
import { NavLink } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import {BsCart2} from "react-icons/bs"
const Navbar = () => {
  return (
    <nav>
        <Box>
            <NavLink to="/login" element={<Login/>} >
            log in
            </NavLink>
            </Box>
        <Box><NavLink to="/login/register" element={<Register/>}>
            Register
            </NavLink>
            </Box>
              <BsCart2 size={"25px"}/>
    </nav>
  )
}

export default Navbar