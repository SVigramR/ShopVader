import head from '../styles/head.module.css'
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

function HeadSection() {
    const [active, setActive] = useState(false)

    const toggleActive = () => {
        setActive(!active)
    }

    const removeActive = () => {
        setActive(false)
    }

    return (
        <>
            <div className={head.headSection}>
                <div className={head.logo}>
                    <img src="/static/images/ShopVader(2).png" alt="ShopVader" />
                </div>
                <div>
                    <ul className={head.nav}>
                        <li onClick={removeActive}>
                            <Link className={head.links} to="/">Home</Link>
                        </li>
                        <li onClick={removeActive}>
                            <Link className={head.links} to="/">Products</Link>
                        </li>
                        <li onClick={removeActive}>
                            <Link className={head.links} to="/">About</Link>
                        </li>
                    </ul>
                </div>
                <div className={head.cartNav}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div className={`${head.menu} ${active ? head.active : ''}`} onClick={toggleActive}>
                    <span className={head.bar}></span>
                    <span className={head.bar}></span>
                    <span className={head.bar}></span>
                </div>
            </div>
        </>
    )
}

export default HeadSection;