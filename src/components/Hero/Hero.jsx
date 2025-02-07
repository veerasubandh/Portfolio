import 'react'
import './Hero.css'
import vs from '../../assets/VS.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={vs} alt="" />
      <h1><span>I&apos;m Veera Subandh</span><br/> MERN Stack Developer</h1>
      <p> Software Developer | MERN Stack Enthusiast | Problem Solver <br/>
      I build dynamic, user-focused web applications that enhance experiences. Skilled in React.js, Node.js, MongoDB, and Tailwind CSS, I love solving challenges through clean, efficient code.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect</AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
