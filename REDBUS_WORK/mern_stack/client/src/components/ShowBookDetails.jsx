import axios from "axios";
import React, { useEffect } from "react";
import {useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ShowBookDetails(props){
    const [book,setBook]=useState([]);
    const {id}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:5000/${id}`)
        .then((res)=>{
            setBook(res.data);
        })
        .catch((err)=>{
            console.log("Cannot show the details of the book");
        })
    },[id]);

    const onDeleteClick=(id)=>{
        axios.delete(`http://localhost:5000/${id}`)
        .then((res)=>{
            navigate('/');
        })
        .catch((err)=>{
            console.log("cannot delete the book");
        })
    }

    const BookItem=(
        <div>
            <table className="table table-hover table-dark">
                <tbody>
                    <tr>
                        <th scope="row">
                            <td>Title</td>
                            <td>{book.title}</td>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <td>Author</td>
                            <td>{book.author}</td>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <td>isbn</td>
                            <td>{book.isbn}</td>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <td>publisher</td>
                            <td>{book.publisher}</td>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <td>publish date</td>
                            <td>{book.published_date}</td>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <td>Title</td>
                            <td>{book.title}</td>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <td>description</td>
                            <td>{book.description}</td>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
    return(
        <div className="ShowBookDetails">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <br /><br />
                        <Link to="/" className="btn btn-outline-warning float-left">
                            Show Book Details
                        </Link>
                    </div>
                    <br />
                    <div className="col-md8 m-auto">
                        <h1 className="display-4 text-center">Book's Records</h1>
                        <p className="lead text-center">View Books Info</p>
                        <hr /><br />
                    </div>
                    <div className="col-md-10 m-auto">{BookItem}</div>
                    <div className="col-md-6 m-auto">
                        <button className="btn btn-outline-danger btn-lg btn-block"
                        onClick={()=>{
                            onDeleteClick(book._id)
                        }}
                        >
                            Delete Book
                        </button>
                        <div className="col-md-6 m-auto">
                            <Link to={`/edit-book/${book._id}`}
                            className="btn btn-outline-info btn-lg btn-block">
                                Edit Book
                            </Link>
                            
                        </div>
                    </div>               
                </div>
            </div>
        </div>
    )
}

export default ShowBookDetails;