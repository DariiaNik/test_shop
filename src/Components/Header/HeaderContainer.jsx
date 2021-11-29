import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setCurrencyAC} from "../../Redux/productReducer";



class HeaderContainer extends React.Component {

    render() {
        return (
            <Header categories={this.props.categories} setCurrency={this.props.setCurrencyAC}/>
        )
    }
}


let mapStateToProps = (state) => ({
    categories:state.categories

})

let mapDispatchToProps = (dispatch) => {
    return {
        setCurrencyAC: (currency) => {
            dispatch(setCurrencyAC(currency));
        },
    }
}

// CategoryContainer.propTypes = {
//     profile: PropTypes.object,
//     searchMoviesTC: PropTypes.func,
//     handleLoginGoogleTC: PropTypes.func,
//     authMeTC: PropTypes.func,
//     isAuth: PropTypes.bool
//
// }

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)