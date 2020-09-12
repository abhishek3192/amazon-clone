import React from 'react'
import {useStateValue} from './StateProvider'
import './checkout.css'
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'

function Checkout() {
    const [{basket}] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                src="https://image.shutterstock.com/image-photo/space-scene-planets-stars-galaxies-600w-1154079046.jpg"
                alt="" 
                className="checkout__ad"/>
                {
                    basket && basket.length === 0 ? 
                    <div>Your basket is empty</div> : 
                    <div className="checkout__title">
                        <h2>Your Shopping Basket</h2>
                        {
                            basket.map((data, index) => {
                                return (
                                <CheckoutProduct 
                                data={data}
                                key={index}
                                />)
                            })
                        }
                    </div>    
                }
            </div>
            {
                basket.length > 0 && (
                    <div className="checkout__right">
                        <h1>subtotal component</h1>
                        <SubTotal />
                    </div>
                ) 
            }
        </div>
    )
}

export default Checkout;
