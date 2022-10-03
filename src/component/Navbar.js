import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Navbar(props) {

    const [text, setText] = useState("")

    const submitHandler = (event) => {
       event.preventDefault()
    }

    const onChangehandler = (event) =>{
             
             setText(event.target.value)
    }

    const onSearchHandler = () => {
        console.log(text)
        setText('')

        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q="+text+"&key=AIzaSyCEM5KfGfPeEvIt_evektffdrNDFKTMlms")
  
    .then((response)=>{
      console.log(response)
      return response.json()
    })
    .then((data)=>{
          console.log(data)
          console.log(data.items)
          props.setData(data.items)
    })
    }

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold" to="/"><span className='text-danger fs-4'>Anime-</span><small>Tube</small></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Link</Link>
        </li>
       
       
      </ul>
      <form className="d-flex" role="search" onSubmit={submitHandler}>
        <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" value={text} onChange={onChangehandler} />
        <button className="btn btn-outline-danger rounded-pill" type="submit" onClick={onSearchHandler}>Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar