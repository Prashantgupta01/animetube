import React from 'react'
import './card.css'
import { Link } from "react-router-dom";

export default function CardContainer(props) {
  return (
    <div className="container mt-5">
      <div className="row">
        {props.data.map((value)=>{
          let name = value.snippet.title;
             let name_xx = name.split(" ")
             let name_xxx = name_xx.slice(0, 2)
             let name_result =  name_xxx.join(" ")
            return (
                <Link to={`/VideoPlayer/?videoId=${value.id.videoId}&name=${name_result}`} className='card p-0 m-2 text-decoration-none'>
                <div key={value.id.videoId}>
          <img src={value.snippet.thumbnails.medium.url} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text text-dark">
             {value.snippet.title}
            </p>
            <small className='text-danger'>{value.snippet.channelTitle}</small>
          </div>
        </div>
        </Link>
            )
        })}
      </div>
    </div>
  );
}
