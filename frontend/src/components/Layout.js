import  React from 'react';
import Backer from '../components/Backer';
//import Footer from '../components/Footer'
import Navb from '../components/Nav/Navb'


const Layout = ({children}) => {
    return(
    <>
      <Navb/>
      {children}
      <Backer/>
     </>
  )
}
export default Layout;