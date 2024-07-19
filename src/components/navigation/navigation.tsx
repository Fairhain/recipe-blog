import {useState} from 'react'
import './navigation.scss';

const navLinks = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Login',
      path: '/login'
    },
    {
      title: 'Blog',
      path: '/blog'
    }
  ]

export default function Navigation () {
    const [menuActive, setMenuActive] = useState(false)

    return (
    <nav className={`site-navigation ${menuActive && 'active'}`} role="navigation">
        <span className="menu-title">Recipe Blog</span>
        <div
            className="menu-content-container"
        >
            <ul>
            { navLinks.map((link, index) => (
                <li key={index}>
                    <a href={link.path}>{link.title}</a>
                </li>
                ))
            }
            </ul>
            <div className="menu-avatar-container">
               
                <span className="menu-avatar-name"></span>
            </div>
        </div>
        <i 
            className="icon ionicons ion-ios-menu"
            onClick={(ev) => setMenuActive(!menuActive)}
        />
    </nav>
  )
}