import React from 'react'
import Product from './Product'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_p._CB407694171_.jpg"
            alt="home__banner"
            />

            <div className="home__row">
                <Product 
                id={1}
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Men's Smartwatch with Speak..."
                price={615}
                rating={5}
                image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
                />

                <Product 
                id={1}
                title="Fossil Gen 5 Carlyle Touchscreen Men's Smartwatch with Speaker, Heart Rate, GPS and Smartphone Notifications- FTW4025"
                price={22995}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/I/318LcIR9MGL._AC_SY200_.jpg"
                />
            </div>

            <div className="home__row">
                    <Product 
                    id={1}
                    title="Apple iPhone 11 Pro Max (64GB) - Silver"
                    price={117100.00}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41Q1rZiv-SL._AC_SY200_.jpg"
                    />

                    <Product 
                    id={2}
                    title="NIVEA Men Shower Gel, Active Clean Body Wash, Men, 250ml"
                    price={119}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41bkGtNWfeL._AC_SY200_.jpg"
                    />

                    <Product 
                    id={1}
                    title="Soulful Creations 3 Piece Combination Polyester Curtains for Window 5 Feet, (Green, Window - 5 FEET)"
                    price={615}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/51nRVjcm+rL._AC_SY200_.jpg"
                    />     
            </div>

            <div className="home__row">
                <Product 
                id={1}
                title="Samsung 163 cm (65 Inches) Q Series 4K Ultra HD QLED Smart TV QA65Q8CNAK (Black) (2018 model)"
                price={258999}
                rating={5}
                image="https://m.media-amazon.com/images/I/91i6SX47ClL._AC_UY218_.jpg"
                />

                <Product 
                id={1}
                title="ASUS TUF Gaming FX505DT 15.6' FHD 120Hz Laptop GTX 1650 4GB Graphics (Ryzen 5-3550H/8GB RAM/1TB HDD + 256GB PCIe SSD/Windows 10/Stealth Black/2.20 Kg), FX505DT-AL202T"
                price={60990}
                rating={5}
                image="https://m.media-amazon.com/images/I/815K4p82zlL._AC_UY218_.jpg"
                />
            </div> 
        </div>
        
    )
}

export default Home
