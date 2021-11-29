import React from "react";
import {connect} from "react-redux";
import ProductPage from "./ProductPage";


class ProductPageContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <ProductPage categories={this.props.categories} currency={this.props.currency}/>
        )
    }
}


let mapStateToProps = (state) => ({
    categories: state.categories,
    currency:state.currency

})

let mapDispatchToProps = (dispatch) => {
    return {}
}

// CategoryContainer.propTypes = {
//     profile: PropTypes.object,
//     searchMoviesTC: PropTypes.func,
//     handleLoginGoogleTC: PropTypes.func,
//     authMeTC: PropTypes.func,
//     isAuth: PropTypes.bool
//
// }

export default connect(mapStateToProps, mapDispatchToProps)(ProductPageContainer)