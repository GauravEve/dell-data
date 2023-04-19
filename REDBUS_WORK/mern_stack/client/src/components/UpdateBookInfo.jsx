import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
const UpdateBookInfo=(props)=>{
    const[book,setBook]=useState({
        title:"",
        isbn:"",
        author:"",
        description:"",
        publish_date:"",
        publisher:""
    })
    const {id} =useParams();
    const navigate=useNavigate();

   

    useEffect(()=>{
        axios.get("http://127.0.0.1:5000",book)
        .then((res)=>{
            setBook({
        title:res.data.title,
        isbn:res.data.isbn,
        author:res.data.author,
        description:res.data.description,
        publish_date:res.data.published_date,
        publisher:res.data.publisher
            });
            navigate('/');
    })
    .catch((err)=>{
        console.log("Error in updating book");
    })
},[id]);
const onChange=(e)=>{
    setBook({...book,[e.target.name]:e.target.value})
    
};
    const onSubmit=(e)=>{
        e.preventDefault();
        const data={
            title:book.tile,
            isbn:book.isbn,
            author:book.author,
            description:book.description,
            publish_date:book.published_date,
            publisher:book.publisher
        }

        axios.put(`http://localhost:5000/${id}`,data)
        .then((res)=>{
            navigate(`/show-book/${id}`);
        })
        .catch((err)=>{
            console.log("error in finding the book")
        })
        

    }


    return(
        <div>
            <div className="UpdateBookInfo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br/>
                            <Link to="/" className="btn btn-outline-warning float-left">Show Booklist</Link>
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">
                                Edit Book
                            </h1>
                            <p className="lead text-center">Update Books Info</p>
                            <hr />
                            <form noValidate onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="title" >Title</label>
                                    <input type="text" placeholder='Title of the book'
                                    name='title'
                                    className="form-control" value={book.title}
                                    onChange={onChange} />
                                </div>
                                <br />
                                <div className="form-group">
                                <label htmlFor="isbn" >ISBN</label>

                                    <input type="text" placeholder='isbn of the book'
                                    name='isbn'
                                    className="form-control" value={book.isbn}
                                    onChange={onChange} />
                                </div>
                                <br />
                                <div className="form-group">
                                <label htmlFor="author" >Author</label>

                                    <input type="text" placeholder='author of the book'
                                    name='author'
                                    className="form-control" value={book.author}
                                    onChange={onChange} />
                                </div>
                                <br />
                                <div className="form-group">
                                <label htmlFor="description" >Description</label>

                                    <input type="text" placeholder='description of the book'
                                    name='description'
                                    className="form-control" value={book.description}
                                    onChange={onChange} />
                                </div>
                                <br />
                                <div className="form-group">
                                <label htmlFor="publish_date" >Published_date</label>

                                    <input type="date" placeholder='Published date of the book'
                                    name='publish_date'
                                    className="form-control" value={book.publish_date}
                                    onChange={onChange} />
                                </div>
                                <br />
                                <div className="form-group">
                                <label htmlFor="publisher" >Publisher</label>

                                    <input type="text" placeholder='publisher of the book'
                                    name='publisher'
                                    className="form-control" value={book.publisher}
                                    onChange={onChange} />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-outline-info btn-lg btn-block">
                                    Update Book
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateBookInfo;