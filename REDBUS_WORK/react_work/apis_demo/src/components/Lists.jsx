import React from "react";
const List=(props)=>{
    const {repos}=props;
    if(!repos||repos.length===0)
        {return <p>No repos found</p>}
    return (
        <ul>
            <h2 className="list-head">Available public repositories</h2>
            {repos.articles.map((repo)=>{
                return(
                    <li key={repo.source.id} className='list'>
                        <span className="repo-title">{repo.title}</span>
                        <span className="repo=description">{repo.description}</span>
                    </li>
                );
                })}
        </ul>
    )
}

export default List;