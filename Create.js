import React, { useState } from 'react';
import axios from 'axios';
function Create() {


    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [releaseDate, setReleaseDate] = useState('');



  
    function handleSubmit (e){
        e.preventDefault();
        axios.post(
            "http://acelens.me:8888/api/books?name=" +
              name +
              "&author=" +
              author +
              "&quantity=" +
              quantity +
              "&price=" +
              price +
              "&release_date=" +
              releaseDate,
            {},
            {
              headers: {
                Authorization: "Bearer BOOKS_API_TOKEN_KEY",
              },
            }
          );
    }

  

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Name :</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <label> Author :</label>
                    <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />

                </div>

                <div>
                    <label> Quantity :</label>
                    <input type="number" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <div>
                    <label> Price :</label>
                    <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>

                <div>
                    <label> Release_date :</label>
                    <input type="date" name="release_date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
                </div>

                <button type='submit' className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Create
