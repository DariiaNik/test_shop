import React from "react";
import './Category.css'
import card from './images/Image.png'
import cartIcon from './images/Circle Icon.png'


const Category = (props) => {
    console.log(props)
    return (
        <section className="category">
            <div className="category_container _container">
                <div className="category_title">
                    <h2>Category name</h2>
                </div>
                <div className="product_cards">
                    <div className="product_card card">
                        <div className="card_wrapper">
                            <div className="card_picture">
                                <img alt="product_image" src={card}/>
                            </div>
                            <a href={'#'}><img className="card_cartIcon" alt="cart" src={cartIcon}/></a>
                            <div className="card_title">
                                <a href={'#'} className="card_name">Apollo Running Short</a>
                                <div className="card_price">$50.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="product_card card">
                        <div className="card_wrapper">
                            <div className="card_picture">
                                <img alt="product_image" src={card}/>
                            </div>
                            <a href={'#'}><img className="card_cartIcon" alt="cart" src={cartIcon}/></a>
                            <div className="card_title">
                                <a href={'#'} className="card_name">Apollo Running Short</a>
                                <div className="card_price">$50.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="product_card card out_of_stock">
                        <div className="card_wrapper">
                            <div className="card_picture">
                                <img alt="product_image" src={card}/>
                            </div>
                            <a href={'#'}><img className="card_cartIcon" alt="cart" src={cartIcon}/></a>
                            <div className="card_title">
                                <a href={'#'} className="card_name">Apollo Running Short</a>
                                <div className="card_price">$50.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="product_card card ">
                        <div className="card_wrapper">
                            <div className="card_picture">
                                <img alt="product_image" src={card}/>
                            </div>
                            <a href={'#'}><img className="card_cartIcon" alt="cart" src={cartIcon}/></a>
                            <div className="card_title">
                                <a href={'#'} className="card_name">Apollo Running Short</a>
                                <div className="card_price">$50.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="product_card card">
                        <div className="card_wrapper">
                            <div className="card_picture">
                                <img alt="product_image" src={card}/>
                            </div>
                            <a href={'#'}><img className="card_cartIcon" alt="cart" src={cartIcon}/></a>
                            <div className="card_title">
                                <a href={'#'} className="card_name">Apollo Running Short</a>
                                <div className="card_price">$50.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="product_card card">
                        <div className="card_wrapper">
                            <div className="card_picture">
                                <img alt="product_image" src={card}/>
                            </div>
                            <a href={'#'}><img className="card_cartIcon" alt="cart" src={cartIcon}/></a>
                            <div className="card_title">
                                <a href={'#'} className="card_name">Apollo Running Short</a>
                                <div className="card_price">$50.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category