import React from "react";
import { Routes, Route } from "react-router-dom";

import "../stylse/App.css";
import Header from "./Header";
import Home from "./Home";
import Categories from "./Categories";
import Category from "./Category";
import Recipe from "./Recipe";

function App() {
    return(
        <>
            <Header />
            <h1>Добро пожаловать! Кушайте, не обляпайтесь!</h1>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/category/:category" element={<Category />} />
                    <Route path="/recipe/:id" element={<Recipe />} />
                </Routes>
            </div>
        </>

    );
}

export default App;