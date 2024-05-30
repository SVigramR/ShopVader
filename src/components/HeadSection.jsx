import head from '../styles/head.module.css'
import { Link, useNavigate } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

function HeadSection({ cart }) {
    const [active, setActive] = useState(false)
    const navigate = useNavigate()

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
                    <div className={head.ul}>
                        <div className={head.headLi} onClick={removeActive}>
                            <Link className={head.links} to="/">Home</Link>
                        </div>
                        <div className={head.headLi} onClick={removeActive}>
                            <Link className={head.links} to="/shop">Shop</Link>
                        </div>
                    </div>
                </div>
                <div className={head.logo}>
                    <h1>ShopVader</h1>
                </div>
                <div className={head.cartNav} onClick={removeActive}>
                    <button onClick={() => navigate('cart')} >
                        <FontAwesomeIcon className={head.cartIcon} icon={faCartShopping} />
                        <span className={head.cardCounter}>{cart.length}</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default HeadSection;