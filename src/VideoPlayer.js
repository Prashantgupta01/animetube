import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function VideoPlayer(props) {

 const [revData, setRevData] = useState([])

  const { search } = useLocation();
  console.log(search)
  const params = new URLSearchParams(search)
  console.log(params.get("videoId"))
  console.log(params.get("name")) 
  let relative_name = params.get("name")
  let videoId = params.get("videoId")




  useEffect(() => {
   
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${relative_name}&key=AIzaSyCEM5KfGfPeEvIt_evektffdrNDFKTMlms`)
  
    .then((response)=>{
      console.log(response)
      return response.json()
    })
    .then((data)=>{
          console.log(data)
          console.log(data.items)
          setRevData(data.items)
    })
  }, [relative_name])

 

  return (
    <div className="container mt-5">
      <div className="row  d-flex justify-content-between">
        <h1 className="text-center">Videos Comming soon....</h1>
        <h1 className="text-center">{videoId}</h1>
        <div className="col-md-7  p-0 ">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            height={540}
            width={660}
          />
        </div>
        <div
          className="col-md-4  overflow-auto"
          style={{ height: "660px" }}
        >
          {revData.map((value) => {
             let name = value.snippet.title;
             let name_xx = name.split(" ")
             let name_xxx = name_xx.slice(0, 2)
             let name_result =  name_xxx.join(" ")
            return (
              <Link to={`/VideoPlayer/?videoId=${value.id.videoId}&name=${name_result}`}>
              <div class="card mb-3 mt-2 w-100">
                <div class="row ">
                  <div class="col-md-4 ">
                    <img
                      src={value.snippet.thumbnails.medium.url}
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <small class="card-title">{value.snippet.title}</small>
                      <p class="card-text">xyx</p>
                      <p class="card-text">
                        <small class="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
