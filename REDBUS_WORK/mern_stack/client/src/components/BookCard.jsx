import React from "react";
import { Link } from "react-router-dom";

const BookCard=(props)=>{
    const book=props.book;
    return(
        <div className="card-container">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97779708-4dc8-486c-95c5-7ee10e528ea3/dehgps9-625cbe83-4b15-4c1a-921d-d767a40a8131.png/v1/fill/w_1280,h_1792,q_80,strp/chainsaw_man_cover_art_by_unusualpie_dehgps9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTc5MiIsInBhdGgiOiJcL2ZcLzk3Nzc5NzA4LTRkYzgtNDg2Yy05NWM1LTdlZTEwZTUyOGVhM1wvZGVoZ3BzOS02MjVjYmU4My00YjE1LTRjMWEtOTIxZC1kNzY3YTQwYTgxMzEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Pzp_JzAAxZYYbmf27u5sbmCfayhFpwrm-b7F4_WQc_4" alt="Book" height={200} />
        <div className="desc">
        <h2>
            <Link to={`/show-book/${book._id}`}>{book.title}</Link>
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
        </div>
        </div>
    )
}

export default BookCard;