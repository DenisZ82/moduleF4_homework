import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../stylse/Header.css";

function Header() {

    return (
        <header className="grid-header">Header
            <Link to="/">Home</Link>
            <Link to="/categories">Категории</Link>
        </header>
    );
}

export default Header;