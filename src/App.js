import React from "react";
import './App.css';
import Cart from "./Components/Cart/Cart";
import {Route, Routes} from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import CategoryContainer from "./Components/Category/CategoryContainer";
import ProductPageContainer from "./Components/Product page/ProductPageContainer";


function App() {
    return (
        <div>
            <HeaderContainer/>
            <Routes>
                <Route path="category/*"
                       element={<CategoryContainer/>}/>
                <Route path="product/:id"
                       element={<ProductPageContainer/>}/>
                <Route path={'/cart'}
                       element={<Cart/>}/>
            </Routes>
        </div>
    );
}

export default App;
