import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Category from "./Category";



class CategoryContainer extends React.Component {

    render() {
        return (
            <Category category={this.props.category}/>
        )
    }
}


let mapStateToProps = (state) => ({
    category:state.categories.name

})

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

CategoryContainer.propTypes = {
    profile: PropTypes.object,
    searchMoviesTC: PropTypes.func,
    handleLoginGoogleTC: PropTypes.func,
    authMeTC: PropTypes.func,
    isAuth: PropTypes.bool

}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer)