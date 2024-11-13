import './navbar.css';
import {useState} from 'react';
import menuIcon from '../../assets/nav/menuIcon.png';
import closeIcon from '../../assets/nav/closeIcon.png';
import menuData from '../../data/menu.json';
import details from '../../data/details.json';
const Navbar =()=>{
    const [menuOpen,setMenuOpen] = useState(false);
    const {name} = details[0];
    return <nav className='navbar'>
        <p className='title'>{name}</p>
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