import React from "react";
import './App.css';
import Cart from "./Components/Cart/Cart";
import {Route, Routes} from "react-router-dom";
import ProductPage from "./Components/Product page/ProductPage";
import HeaderContainer from "./Components/Header/HeaderContainer";
import CategoryContainer from "./Components/Category/CategoryContainer";


function App() {
    return (
        <div>
            <HeaderContainer/>
            <Routes>
                <Route path="category/*"
                       element={<CategoryContainer/>}/>
                <Route path={'/product'}
                       element={<ProductPage/>}/>
                <Route path={'/cart'}
                       element={<Cart/>}/>
            </Routes>
        </div>
    );
}

export default App;
