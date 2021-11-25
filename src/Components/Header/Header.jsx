import React from "react";
import './Header.css'
import logo from './images/header_logo.svg'
import cart from './images/cart.svg'
import {NavLink} from "react-router-dom";
import HeaderCategory from "./HeaderCategory";


const Header = (props) => {
    let navElement = props.categories.map(el => (
        <HeaderCategory key={el.name} name={el.name}/> ));
    return (
        <header className="header">
            <div className="header_container _container">
                <nav className="header_menu menu">
                    <ul className="menu_list">
                        {navElement}
                    </ul>
                </nav>
                <div className="header_logo ">
                    <NavLink to={'/category'}>
                        <img alt="logo" src={logo}/>
                    </NavLink>

                </div>
                <div className="header_actions actions">
                    <div className="actions_currency currency ">
                        {/*<select defaultValue='$' className="currency_select">*/}
                        {/*    <option value="USD" selected="selected">$ USD</option>*/}
                        {/*    <option value="EUR">€ EUR</option>*/}
                        {/*    <option value="JPY">¥ JPY</option>*/}
                        {/*</select>*/}
                    </div>
                    <div className="actions_cart ">
                        <img alt="logo" src={cart}/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header