// import { useState } from 'react'
import './App.css'
import {connect} from 'react-redux'
import * as contactAction from './actions/contactAction'
import {Component} from 'react'
class App extends Component{

  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state={
      name:''
    }
  }

  handleChange(e){
    this.setState({name:e.target.value});
  }


handleSubmit(e){
  e.preventDefault();
  // console.log(this.state.name);
  let contact={
    name:this.state.name
  }
  this.setState({
    name:""
  })
  this.props.createContact(contact);
  console.log(contact);
}

  listView(data,index){
    return(
      <div className='row'>
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.name}
          </li>
        </div>
        <div className="col-md-2">
          <button onClick={(e)=>this.deleteContact(e,index)} 
          className="btn btn-danger"
          >Remove</button>
        </div>
      </div>
    )
  }

  deleteContact(e,index){
    e.preventDefault()
    this.props.deleteContact(index)
  }
  render(){
  return(
    <div className='container'>
      <h1>Clientside Contacts Application</h1>
      <hr/>
      <div>
      <h3>Add Contact Form</h3>
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name}/>
        <input type="submit" className='btn btn-success' value="ADD"/>
        <br />
      </form>
      <hr/>
        {<ul className='list-group'>
          {this.props.contacts.map((contact,i)=>this.listView(contact,i))}</ul>}
        </div>    
      <hr/>
    </div>
  )
}
}
const mapStateToProps=(state,ownProps)=>{
  return {
    contacts:state.contacts
  }
  
}
const mapDispatchToProps=(dispatch)=>{
  return{
    createContact:contact=>dispatch(contactAction.createContact(contact)),
    deleteContact:index=>dispatch(contactAction.deleteConatact(index))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
