import React from "react";
import './Category.css'
import ProductCard from "./Product card/ProductCard";
import {useParams} from "react-router-dom";



const Category = (props) => {
    let params = useParams()
    let category = props.categories.find(c => c.name === params.name);
    let productElement = category.products.map(product => (
       <ProductCard key={product.id} product={product} currency={props.currency}/>));
    return (
        <section className="category">
            <div className="category_container _container">
                <div className="category_title">
                    <h2>{category.name}</h2>
                </div>
                <div className="product_cards">
                    {productElement}
                </div>
            </div>
        </section>
    )
}

export default Category