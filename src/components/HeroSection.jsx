import hero from '../styles/hero.module.css'
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <>
        <div className={hero.hero}>
            <div className={hero.vaderHero}></div>
            <div className={hero.info}>
                <h1>Get the Best Deals!</h1>
                <p>Welcome to ShopVader, where finding the best deals is our priority. Whether you&apos;re shopping for the latest gadgets, stylish apparel, or everyday essentials, our curated selection ensures you get the highest quality at the lowest prices.</p>
                <button><Link className={hero.link} to={'/'}>Shop Now</Link></button>
            </div>
        </div>
        </>
    )
}

export default HeroSection;