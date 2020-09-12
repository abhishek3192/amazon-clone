import React from 'react'
import "./Product.css"
import {useStateValue} from './StateProvider'

function Product({id, title, image, price, rating}) {
    const [{}, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_) => {
                            return <span role='img' aria-label=''>&#11088;</span>
                        })
                    }
                </div>
            </div>
            <img src={image} className="" alt="item_image"/>
            <button onClick={addToCart}>Add to basket</button>
        </div>
    )
}

export default Product
