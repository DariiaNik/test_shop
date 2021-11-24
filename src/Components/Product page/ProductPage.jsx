import React from "react";
import './ProductPage.css'
import img from './images/Image.png'

const ProductPage = () => {
    return (
        <section className="product_page">
            <div className="product_page_container _container">
                <div className="product_page_picture picture">
                    <div className="picture_small ">
                        <div className="small_image">
                            <img src={img} alt='clothes image'/>
                        </div>
                        <div className="small_image">
                            <img src={img} alt='clothes image'/>
                        </div>
                        <div className="small_image">
                            <img src={img} alt='clothes image'/>
                        </div>
                    </div>
                    <div className="picture_big _ibg">
                        <img src={img} alt='clothes image'/>
                    </div>
                </div>
                <div className="product_page_description description">
                    <div className="description_title title">
                        <h2 className="title_main">Apollo</h2>
                        <h3 className="title_subtitle">Running Short</h3>
                    </div>
                    <div className="description_size size">
                        <div className="size_title">SIZE:</div>
                        <div className="size_items">
                            <div className="size_item size_out_of_stock">XS</div>
                            <div className="size_item">S</div>
                            <div className="size_item">M</div>
                            <div className="size_item">L</div>
                        </div>
                    </div>
                    <div className="description_price price">
                        <div className="price_tag">PRICE:</div>
                        <div className="price_number">$50.00</div>
                    </div>
                    <div className="description_button">
                        <button className="button_cart">ADD TO CART</button>
                    </div>
                    <div className="description_text">
                        <p>
                            Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic
                            cocktail dresses and party dresses from all your favorite brands.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPage