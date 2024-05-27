import footer from '../styles/footer.module.css'

function FooterSection() {
    return (
        <>
            <footer className={footer.foo}>
                <div className={footer.info}>
                        <ul>
                            <li>About Us</li>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Blog</li>
                        </ul>
                        <ul className={footer.secChild}>
                            <li>Products</li>
                            <li>Electronics</li>
                            <li>Clothes</li>
                            <li>Shoes</li>
                            <li>Furniture</li>
                        </ul>
                        <ul>
                            <li>Support</li>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>Exchange</li>
                            <li>Shipping Info</li>
                        </ul>
                        <ul>
                            <li>Legal</li>
                            <li>Newsletter</li>
                            <li>Affiliate Program</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                </div>
                <div className={footer.reserved}>
                    <p>©2024 ShopVader. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default FooterSection;