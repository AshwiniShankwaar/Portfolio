import './navbar.css';
import {useState} from 'react';
import menuIcon from '../../assets/nav/menuIcon.png';
import closeIcon from '../../assets/nav/closeIcon.png';
import menuData from '../../data/menu.json';
const Navbar =()=>{
    const [menuOpen,setMenuOpen] = useState(false);
    return <nav className='navbar'>
        <a href='/' className='title'>Ashwini Kumar</a>
        <div className='menu'>
            <img alt='menuBtn' className="menuBtn" src={menuOpen?closeIcon:menuIcon} onClick={()=>setMenuOpen(!menuOpen)}/>
            <ul className={`menuItem ${menuOpen ? "menuOpen" : ""}`} onClick={()=>setMenuOpen(!menuOpen)}>
                {
                    menuData.map((item, index)=>(
                        <li key={index} >
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
}

export default Navbar;