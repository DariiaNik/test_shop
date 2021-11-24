import React from "react";
import './Cart.css'
import img from './images/Image.png'
import plus from './images/plus-square.svg'
import minus from './images/minus-square.svg'



const Cart = () => {
    return(
        <section className="cart_page">
            <div className="cart_page_container _container">
                <h1 className="cart_page_title ">Cart</h1>
                <div className="cart_page_items">
                    <div className="cart_page_item item">
                        <div className="item_information">
                            <h2 className="item_information_title">Apollo</h2>
                            <h3 className="item_information_subtitle">Running Short</h3>
                            <div className="item_information_price">$50.00</div>
                            <div className="item_information_size">M</div>
                        </div>
                        <div className="item_details">
                            <div className="item_details_count count">
                                <div className="count_increment">
                                    <img src={plus} alt='plus'/>
                                </div>
                                <div className="count_number">1</div>
                                <div className="count_decrement">
                                    <img src={minus} alt='plus'/>
                                </div>
                            </div>
                            <div className="item_details_picture">
                                <img src={img} align="product picture"/>
                            </div>
                        </div>
                    </div>
                    <div className="cart_page_item item">
                        <div className="item_information">
                            <h2 className="item_information_title">Apollo</h2>
                            <h3 className="item_information_subtitle">Running Short</h3>
                            <div className="item_information_price">$50.00</div>
                            <div className="item_information_size">M</div>
                        </div>
                        <div className="item_details">
                            <div className="item_details_count count">
                                <div className="count_increment">
                                    <img src={plus} alt='plus'/>
                                </div>
                                <div className="count_number">1</div>
                                <div className="count_decrement">
                                    <img src={minus} alt='plus'/>
                                </div>
                            </div>
                            <div className="item_details_picture">
                                <img src={img} align="product picture"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart