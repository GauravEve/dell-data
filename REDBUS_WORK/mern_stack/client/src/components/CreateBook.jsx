import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const CreateBook=(props)=>{
    const[book,setBook]=useState({
        title:"",
        isbn:"",
        author:"",
        description:"",
        publish_date:"",
        publisher:""
    })

    const navigate=useNavigate();

    const onChange=(e)=>{
            setBook({...book,[e.target.name]:e.target.value})
            
    };
    const onSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://127.0.0.1:5000/",book)
        .then((res)=>{
            setBook({
        title:"",
        isbn:"",
        author:"",
        description:"",
        publish_date:"",
        publisher:""
            });
            navigate('/');
    })
    .catch((err)=>{
        console.log("Error in adding book");
    })
    }
    return(
        <div>
            <div className="CreateBook">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br/>
                            <Link to="/" className="btn btn-outline-warning float-left">Show Booklist</Link>
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">
                                Add Book
                            </h1>
                            <p className="lead text-center">Create New Book</p>
                            <hr />
                            <form noValidate onSubmit={onSubmit}>
                                <div className="form-group">
                                    <input type="text" placeholder='Title of the book'
                                    name='title'
                                    className="form-control" value={book.title}
                                    onChange={onChange} />
                                </div>
                                <br />
                                <div className="form-group">
                                    <input type="text" placeholder='isbn of the book'
                                    name='isbn'
                                    className="form-control" value={book.isbn}
                                    onChange={onChange} />
                                </div>
                                <br />
                                <div className="form-group">
                                    <input type="text" placeholder='author of the book'
                                    name='author'
                                    className="form-control" value={book.author}
                                    onChange={onChange} />
                                </div>
                                <br />
                                <div className="form-group">
                                    <input type="text" placeholder='description of the book'
                                    name='description'
                                    className="form-control" value={book.description}
                                    onChange={onChange} />
                                </div>
                                <br />
                                <div className="form-group">
                                    <input type="date" placeholder='Published date of the book'
                                    name='publish_date'
                                    className="form-control" value={book.publish_date}
                                    onChange={onChange} />
                                </div>
                                <br />
                                <div className="form-group">
                                    <input type="text" placeholder='publisher of the book'
                                    name='publisher'
                                    className="form-control" value={book.publisher}
                                    onChange={onChange} />
                                </div>
                                <br />
                                <input type="submit" className="btn btn-outline-warning btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBook;