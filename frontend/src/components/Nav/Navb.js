import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'
import { Link } from 'react-router-dom'


const Nav = styled.nav`
width:100%;
margin: 0;
padding: 0;
z-index: 999;
height:55px;
border-botton:2px solid #f1f1f1;
padding:0 10px;
display:flex;
justify-content : space-between;
//background-color: #f8f9fa;
background-color: cadetblue;
.logo{
    padding:15px 0;
}
`

export default function Navb() {
    return (
        <Nav>
            <div className='logo'>
              <Link to="/"> FOOTBALL RANGER </Link>
            </div>
            <Burger/>
        </Nav>
    )
}
