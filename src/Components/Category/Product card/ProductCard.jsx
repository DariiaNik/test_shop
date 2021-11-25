import React from "react";
import './ProductCard.css'
import cartIcon from "../images/Circle Icon.png";


const ProductCard = (props) => {
    let currency = props.product.prices.find(c => c.currency === props.currency)
    return(
        <div className="product_cards">
            <div className={"product_card card" + (props.product.inStock ? "" : " out_of_stock")}>
                <div className="card_wrapper">
                    <div className="card_picture">
                        <img alt="product_image" src={props.product.gallery[0]}/>
                    </div>
                    <a href={'#'}><img className="card_cartIcon" alt="cart" src={cartIcon}/></a>
                    <div className="card_title">
                        <a href={'#'} className="card_name">{props.product.name}</a>
                        <div className="card_price">{currency.amount} {currency.currency}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductCard