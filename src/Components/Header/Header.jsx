import React from "react";
import './Header.css'
import logo from './images/header_logo.svg'
import HeaderCategory from "./HeaderCategory";
import Currency from "./Currency/Currency";
import HeaderCart from "./HeaderCart/HeaderCart";


const Header = (props) => {

    let navElement = props.categories.map(el => (
        <HeaderCategory key={el.name} name={el.name}/>));

    let setCurrency = (e) => {
        props.setCurrency(e.target.value)
    }

    return (
        <header className="header">
            <div className="header_container _container">
                <nav className="header_menu menu">
                    <ul className="menu_list">
                        {navElement}
                    </ul>
                </nav>
                <div className="header_logo ">
                    <img alt="logo" src={logo}/>
                </div>
                <div className="header_actions actions">
                    <Currency prices={props.categories[0].products[0].prices} setCurrency={setCurrency}/>
                    <HeaderCart/>
                </div>
            </div>
        </header>
    )
}

export default Header