import { links } from "./data"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { menuBtnVariants, navVariants } from "./headerVariants";

interface HeaderProps {
    toggleMobileMenu ():void;
    showMobileMenu:boolean;
    closeMobileMenu ():void;
}

export const Header:React.FC<HeaderProps> = ({toggleMobileMenu, showMobileMenu, closeMobileMenu}) => {
    return (
        <header className="header">
            <motion.button className="menu-btn" data-testid="menu-btn" onClick={toggleMobileMenu}
                variants={menuBtnVariants}
                initial="initial"
                animate="withMotion">
                <span className={`menu-btn-burger ${showMobileMenu && "open"}`} data-testid="burger-span"></span>
            </motion.button>
            <nav className={`nav ${showMobileMenu && "open"}`} data-testid={"nav"}>
                <motion.ul className={`menu-nav ${showMobileMenu && "open"}`}
                    variants={navVariants}
                    initial="initial"
                    animate="withMotion">
                    {links.map(function(link){
                        const {id, url, text} = link
                        return (
                            <li key={id} className={`menu-nav-item ${showMobileMenu ? "active open" : "active"}`}>
                                <Link
                                    to={url}
                                    onClick={closeMobileMenu}>
                                    <span className="menu-nav-link">
                                        {text}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}
                </motion.ul>
            </nav>
        </header>
    )
}

export default Header;