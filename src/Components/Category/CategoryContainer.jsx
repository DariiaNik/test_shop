import React from "react";
import {connect} from "react-redux";
import Category from "./Category";
import {Route, Routes} from "react-router-dom";


class CategoryContainer extends React.Component {

    render() {
        return (
            <Routes>
                <Route path=":name"
                        element={<Category categories={this.props.categories} currency={this.props.currency}/>}
                />
            </Routes>
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer)