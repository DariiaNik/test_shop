import React from "react";
import cart from "../images/cart.svg";
import CartOverlay from "../../Cart overlay/CartOverlay";


class HeaderCart extends React.Component {
    state = {
        show: false
    }

    render() {
        return (
            <div className="actions_cart ">
                <img alt="logo" src={cart}/>
                <CartOverlay show={this.state.show}/>
            </div>
        )
    }
}


export default HeaderCart;