import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";
import {Route, Routes} from "react-router-dom";
import ProductPage from "./Components/Product page/ProductPage";
import Category from "./Components/Category/Category";


function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'}
                       render={() => <Category/>}/>
                <Route path={'/product'}
                       render={() => <ProductPage/>}/>
                <Route path={'/cart'}
                       render={() => <Cart/>}/>
            </Routes>
        </div>
    );
}

export default App;
