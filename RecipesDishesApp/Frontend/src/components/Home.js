import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table';

function Home() {
    const [homelist, setHomelist] = useState([]);
    if (!homelist.length) {
        axios.get("http://127.0.0.1:8000/api/categories/").then(res => {
            // console.log(res.data);
            setHomelist(res.data);
        })
    }
    return (
        <>
            <h2>Стартовая страница</h2>
            <h3>Контент на главной странице</h3>
            <hr></hr>
            <h2>Категории блюд</h2>
            <Table striped bordered hover className="tablelist">
                <tbody>
                    {homelist.map(category => <tr key={category.category}>
                        <td><Link to={`/category/${category.category}`}>{category.category}</Link></td>
                    </tr>)}
                </tbody>
            </Table>
        </>
    );
}

export default Home;