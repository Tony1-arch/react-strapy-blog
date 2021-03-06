import React from 'react'
import styled from 'styled-components'
const LinkK = styled.ul`
    padding: 10px;
    list-style:none;
    display:flex;
    flex-flow: row nowrap;
    align-items:center;
    li{
        padding: 18px 10px;
        text-align: center;

    }
   @media (max-width: 768px) {
       
        flex-flow: column nowrap;
        background: #0D2538;
        position:fixed;
        transform : ${({open}) => open ? 'translateX(0)':'translateX(100%)'};
        top:0;
        right:0;
        height: 100vh;
        width:300px;
        padding-top:3.5rem;
        transition :transform 0.3s ease-in-out;

        li {
            color:#ffff;
        }

   }

`
export default function RightNavb({open}) {
    return (
        <LinkK open={open}>
             
                <li><a href='/'>Home</a></li>
                <li><a href='/About'>About</a></li>
                <li><a href='/Contact'>Contact</a></li>
                <li><a href='/Category'>Category</a></li>
                <li><a href='/Reviews'>Reviews</a></li>
               
        </LinkK>
    )
}
