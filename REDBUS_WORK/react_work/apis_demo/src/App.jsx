
import './App.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import WithListLoading from './components/WithListLoading';
import List from './components/Lists';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const ListLoading=WithListLoading(List);
  const [appState,setAppState]=useState({
    loading:false,
    repos:null
  });

  useEffect(()=>{
    setAppState({loading:true});
    const apiUrl='https://newsapi.org/v2/everything?q=tesla&from=2023-02-28&sortBy=publishedAt&language=en&apiKey=86b330ad192f4f589ac14264dcd76657'
    // fetch(apiUrl)
    // .then((response)=>response.json())
    // .then((repos)=>{
    //   setAppState({loading:false,repos: repos});
    // });
    axios.get(apiUrl).then((repos)=>{
      const allRepos=repos.data
      setAppState({loading:false,repos:allRepos})
    })
  },[setAppState]);

  return (
    <div className="App">
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className="repo-container">
        <ListLoading isLoading={appState.loading} repos={appState.repos}></ListLoading>
      </div>
    </div>
  )
}

export default App
