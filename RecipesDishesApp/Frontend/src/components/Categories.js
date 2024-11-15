import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table';

function Categories() {
    const [categories, setCategories] = useState([]);
    if (!categories.length) {
        axios.get("http://127.0.0.1:8000/api/categories/").then(res => {
            // console.log(res.data);
            setCategories(res.data);
        })
    }

    return (
        <>
        <h2>Категории</h2>
        <Table striped bordered hover className="tablelist">
            <tbody>
                {categories.map(category => <tr key={category.category}>
                    <td><Link to={`/category/${category.category}`}>{category.category}</Link></td>
                </tr>)}
            </tbody>
        </Table>
        </>
    );
}

export default Categories;