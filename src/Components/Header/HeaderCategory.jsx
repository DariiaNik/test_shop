import React from "react";
import './HeaderCategory.jsx.css'
import {NavLink} from "react-router-dom";


const HeaderCategory = (props) => {
    return(
        <div>
            <li className="menu_item ">
                <NavLink to={'category/'+ props.name}
                         className={({ isActive }) => "menu_link" + (isActive ? " header_active" : "")}
                >{props.name}</NavLink>
            </li>
        </div>
    )
}

// header_active

export default HeaderCategory;