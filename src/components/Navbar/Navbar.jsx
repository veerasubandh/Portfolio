import  { useRef, useState } from 'react'
import './Navbar.css'
import logo1 from '../../assets/logo1.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import toggle_icon from '../../assets/menu_open.svg' 
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu,setMenu]=useState('home');
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right='0'
  }

  const closeMenu = ()=>{
    menuRef.current.style.right='-350px'
  }

  return (
    <div className='navbar'>
      <img className='logo' src={logo1} alt="" />
      <img className='toggle' onClick={openMenu} src={toggle_icon} alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <img className='nav-mob-close' onClick={closeMenu} src={menu_close} alt="" />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu==='home'?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About</p></AnchorLink>{menu==='about'?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>setMenu('skills')}>Skills</p></AnchorLink>{menu==='skills'?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu('services')}>Services</p></AnchorLink>{menu==='services'?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu('projects')}>Projects</p></AnchorLink>{menu==='projects'?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink>{menu==='contact'?<img src={underline} alt=''/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect</AnchorLink></div>
    </div>
  )
}

export default Navbar
