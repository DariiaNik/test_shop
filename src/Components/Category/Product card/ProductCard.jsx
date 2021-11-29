import React from "react";
import './ProductCard.css'
import cartIcon from "../images/Circle Icon.png";
import {NavLink} from "react-router-dom";


const ProductCard = (props) => {
    let currency = props.product.prices.find(c => c.currency === props.currency)
    return (
        <div className="product_cards">
            <div className={"product_card card" + (props.product.inStock ? "" : " out_of_stock")}>
                <NavLink to={"/product/" + props.product.id}>
                    <div className="card_wrapper">
                        <div className="card_picture">
                            <img alt="product_image" src={props.product.gallery[0]}/>
                        </div>
                        <a href={'#'}><img className="card_cartIcon" alt="cart" src={cartIcon}/></a>
                        <div className="card_title">
                            <div className="card_name">{props.product.name}</div>
                            <div className="card_price">{currency.amount} {currency.currency}</div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}


export default ProductCard