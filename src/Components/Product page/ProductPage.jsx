import React from "react";
import './ProductPage.css'
import {useParams} from "react-router-dom";
import Attributes from "./Attributes/Attributes";
import Pictures from "./Gallery/Pictures";

const ProductPage = (props) => {
    let id = useParams().id;

    function filter() {
        return props.categories.flatMap(el => el.products)
            .find(product => product.id === id)
    }

    let product = filter();
    let currency = product.prices.find(c => c.currency === props.currency)

    let attributeElement = product.attributes.map(attr => (
        <Attributes key={attr.id} attribute={attr} type={attr.type}/>
    ))

    return (
        <section className="product_page">
            <div className="product_page_container _container">
                <div className="product_page_picture picture">
                    <Pictures images={product.gallery}/>
                </div>
                <div className="product_page_description description">
                    <div className="description_title title">
                        <h2 className="title_main">{product.brand}</h2>
                        <h3 className="title_subtitle">{product.name}</h3>
                    </div>
                    {attributeElement}
                    <div className="description_price price">
                        <div className="price_tag">PRICE:</div>
                        <div className="price_number">{currency.amount} {currency.currency}</div>
                    </div>
                    <div className="description_button">
                        <button className="button_cart">ADD TO CART</button>
                    </div>
                    <div className="description_text" dangerouslySetInnerHTML={{__html: product.description}}/>
                </div>
            </div>
        </section>
    )
}

export default ProductPage