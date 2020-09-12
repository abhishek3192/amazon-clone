import React from 'react';
import './checkoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({data}) {
    const [{basket}, dispatch] = useStateValue()
    let {
        image,
        title,
        rating,
        price,
        id
    } = data

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>

                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_, index) => {
                            return <span key={index} role='img' aria-label=''>&#11088;</span>
                        })
                    }
                </div>

                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
