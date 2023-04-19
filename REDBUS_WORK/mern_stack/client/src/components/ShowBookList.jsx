import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

function ShowBookList(){
    const [books,setBooks]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/")
        .then((res)=>{
            setBooks(res.data);
        })
        .catch((err)=>{
            console.log("Could not load the book list");
        })
    },[])
   
    const bookList=books.length===0?"this list is empty":books.map((book,k)=><BookCard book={book} key={k}/>)
    return(
        <div className="ShowBookList">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <br />
                        <h2 className="display-4 text-center">
                            Book List
                        </h2>
                    </div>
                    <div className="col-md-11">
                        <Link to='/create-book' className='btn btn-outline-warning float-right'>Add New Book</Link>
                        <br />
                        <hr />
                    </div>
                </div>
                <div className="list">{bookList}</div>
            </div>
            
        </div>
    )
}

export default ShowBookList;