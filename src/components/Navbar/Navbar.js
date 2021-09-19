import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from '../Button';
import './Navbar.css'
function Navabar() {
    const [click,setClick]= useState(false);
    const [button,setButton] =useState(true);

    const handleClick = ()=> setClick(!click);
    const closeMobileMenu= () => setClick(false);
    const showButton =()=>{
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, [] );
    window.addEventListener('resize',showButton);
    return (
        <>
            <nav className ="navbar">
            <div className ="navbar-container">
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    Ecommerce<i className='fab fa-typo3'/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times':'fas fa-bars'}/> 
                </div>
                <ul className={click ? 'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                    <Link to ='/dashboard' className ='nav-links' onClick={closeMobileMenu} >
                        DashBoard
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/addproduct' className ='nav-links' onClick={closeMobileMenu} >
                        Add product
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/allproducts' className ='nav-links' onClick={closeMobileMenu}>
                        All Products
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/about' className ='nav-links'  onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/login' className ='nav-links-mobile' onClick={closeMobileMenu}>
                        Login
                    </Link>
                </li>
                
                </ul>
                {button&&<Button buttonStyle='btn--outline'>Log-in</Button>}
            </div>
            </nav>
         </>
    )
}

export default Navabar


