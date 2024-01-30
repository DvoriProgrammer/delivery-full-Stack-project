import React from 'react';
import PrimarySearchAppBar from './newMenu';
import FooterComponent from './footer';
import Menu from './menu';
const Layout =({children}) =>{
    return(
        <>
        
            {/* <PrimarySearchAppBar/> */}
            <Menu />
        <main style={{position: 'relative',left:0}}>{children}</main> 
         <FooterComponent/>
        </>
    )
}

export default Layout;