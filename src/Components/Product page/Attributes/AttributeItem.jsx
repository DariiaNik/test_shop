import React from "react";
import './AttributeItem.css'


const AttributeItem = (props) => {

    if (props.type === "swatch") {
        return (
            <div className="attributes_items">
                <div className={"attributes_item" + (props.selected ? "selected" : "")} style={{background: props.item.value,}}/>
            </div>
        )
    } else
        return (
            <div className="attributes_items">
                <div className={"attributes_item" + (props.selected ? " selected" : "")} onClick={() => props.setAttribute(props.item.id)}>{props.item.value}</div>
            </div>

        )
}

export default AttributeItem;

