import React from "react";
import cart from "../images/cart.svg";
import Modal from "../../Cart overlay/Modal";
import CartOverlay from "../../Cart overlay/CartOverlay";


class HeaderCart extends React.Component {
    state = {showModal: false};


    render() {

        let handleShow = () => {
            this.setState({showModal: true});

        }

        let handleHide = () => {
            this.setState({showModal: false});
        }

        const modal = this.state.showModal ? (
            <Modal>
                <CartOverlay hide={handleHide}/>
            </Modal>
        ) : null;

        return (
            <div className="actions_cart " >
                <div>
                    <img alt="logo" src={cart} onClick={handleShow} />
                    {modal}
                </div>
            </div>
        )
    }
}


export default HeaderCart;