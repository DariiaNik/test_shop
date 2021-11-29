import React from "react";
import './Currency.css'


const Currency = (props) =>{

    let currencyElement = props.prices.map(cur => (
        <option key={cur.currency} value={cur.currency}>{cur.currency}</option> ));


    return(
        <div className="actions_currency currency ">
            <select  onChange={props.setCurrency} defaultValue='USD' className="currency_select">
                {currencyElement}
            </select>
        </div>
    )
}


export default Currency;