import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

function Read() {
    const [apiData, setApiData] = useState([]);
    const [search, setSearch] = useState("");



    useEffect(() => {
        axios.get("http://acelens.me:8888/api/books", {
            headers: {
                Authorization: "Bearer BOOKS_API_TOKEN_KEY",
            }
        })
            .then((res) => {
                setApiData(res.data.data);
            })
    }, [])



    const searchHandler = (search) => {
        setSearch(search);
        if (search !== "") {
            const newBook = apiData.filter((apiData) => {
                return Object.values(apiData)
                    .join(" ")
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase());
            });
            setSearch(newBook);
        }
        else {
            setSearch(apiData);
        }

    }

    const onDelete = (id) => {
        axios.delete("http://acelens.me:8888/api/books/" + id, {
            headers: {
                Authorization: "Bearer BOOKS_API_TOKEN_KEY",
            },
        });
    }


    return (

        <div>
            <div className="ui search">
                <div className="ui icon input">

                    <input
                        style={{ width: "30%", height: "25px" }}
                        type="text"
                        placeholder="Search..."
                        searchKeyword={searchHandler}

                    />

                    <select>
                        <option value="name">name</option>
                        <option value="author">author</option>
                        <option value="quantity">quantity</option>
                        <option value="price">price</option>
                        <option value="release_date">release_date</option>
                    </select>
                </div>
            </div>
            {apiData.map(data => {
                return (
                    <div key={data.id} style={{ border: "1px solid" }}>
                        <h2>ID :{data.id}</h2>
                        <h2>Name :{data.name}</h2>
                        <h2>Author: {data.author}</h2>
                        <h2>Quantity:{data.quantity}</h2>
                        <h2>Price :{data.price}</h2>
                        <h2>Release_date :{data.release_date}</h2>

                        <h2>
                            <button onClick={() => onDelete(data.id)}>Delete</button>
                        </h2>
                    </div>
                )
            })}


        </div>
    );

}


export default Read
