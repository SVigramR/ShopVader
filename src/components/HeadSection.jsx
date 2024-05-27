import head from '../styles/head.module.css'
import { Link } from "react-router-dom";
import { faBorderStyle, faCartShopping } from "@fortawesome/free-solid-svg-icons";
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
                <div className={`${head.menu} ${active ? head.active : ''}`} onClick={toggleActive}>
                    <span className={head.bar}></span>
                    <span className={head.bar}></span>
                    <span className={head.bar}></span>
                </div>
                <div className={`${head.nav} ${active ? head.active : ''}`}>
                    <ul>
                        <li onClick={removeActive}>
                            <Link className={head.links} to="/">Home</Link>
                        </li>
                        <li onClick={removeActive}>
                            <Link className={head.links} to="/">Shop</Link>
                        </li>
                    </ul>
                </div>
                <div className={head.logo}>
                    <h1>ShopVader</h1>
                </div>
                <div className={head.cartNav} onClick={removeActive}>
                    <button>
                        <FontAwesomeIcon className={head.cartIcon} icon={faCartShopping} />
                        <span className={head.cardCounter}>0</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default HeadSection;