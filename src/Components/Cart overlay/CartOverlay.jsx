import React from "react";
import './CartOverlay.css'
import img from "../Cart/images/Image.png";
import plus from "./images/plus-square.png";
import minus from "./images/minus-square.png";
import {NavLink} from "react-router-dom";


const CartOverlay = (props) => {
    return (
        <div className="modal_container">
            <div className={"modal_background"} onClick={props.hide}/>
            <div className={"modal_content"}>
                <div className={"modal_body"}>
                    <div className={"modal_title title"}>
                        <div className={'title_name'}>My bag,</div>
                        <div className={'title_items'}>2 items</div>
                    </div>
                    <div className={"modal_items"}>
                        <div className="modal_item item">
                            <div className="item_information">
                                <h2 className="item_information_title">Apollo</h2>
                                <h3 className="item_information_subtitle">Running Short</h3>
                                <div className="item_information_price">$50.00</div>
                                <div className="item_information_attribute">M</div>
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
                                    <img src={img} alt="product" align="product picture"/>
                                </div>
                            </div>
                        </div>
                        <div className="modal_item item">
                            <div className="item_information">
                                <h2 className="item_information_title">Apollo</h2>
                                <h3 className="item_information_subtitle">Running Short</h3>
                                <div className="item_information_price">$50.00</div>
                                <div className="item_information_attribute">M</div>
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
                                    <img src={img} alt='product' align="product picture"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"modal_total total"}>
                        <div className={'total_title'}>Total</div>
                        <div className={'total_price'}>100</div>
                    </div>
                    <div className={"modal_buttons buttons"}>
                        <NavLink className={'buttons_viewBag'} onClick={props.hide} to={'/cart'}>
                            <div> View bag </div>
                        </NavLink>
                        <div className={'buttons_checkOut'}>Check out</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CartOverlay;