import './navbar.css';
import {useState} from 'react';
import menuIcon from '../../assets/nav/menuIcon.png';
import closeIcon from '../../assets/nav/closeIcon.png';
const Navbar =()=>{
    const menu = ["AboutMe", "Skills","Projects","Blogs","Resume"];
    const [menuOpen,setMenuOpen] = useState(false);
    return <nav className='navbar'>
        <a href='/' className='title'>Ashwini Kumar</a>
        <div className='menu'>
            <img alt='menuBtn' className="menuBtn" src={menuOpen?closeIcon:menuIcon} onClick={()=>setMenuOpen(!menuOpen)}/>
            <ul className={`menuItem ${menuOpen ? "menuOpen" : ""}`} onClick={()=>setMenuOpen(!menuOpen)}>
                {
                    menu.map((item, index)=>(
                        <li key={index} >
                            <a href={`#${item.toLowerCase()}`}>{item}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
}

export default Navbar;