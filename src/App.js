import React, { useEffect, useState } from 'react'
import CardContainer from './component/CardContainer'
import Navbar from './component/Navbar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import VideoPlayer from './VideoPlayer ';

function App() {

  const [data, setData] = useState([])
  console.log("to check Commit")
  useEffect(() => {
   
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=&key=AIzaSyCEM5KfGfPeEvIt_evektffdrNDFKTMlms")
  
    .then((response)=>{
      console.log(response)
      return response.json()
    })
    .then((data)=>{
          console.log(data)
          console.log(data.items)
          setData(data.items)
    })
  }, [])
  
  return (
    <Router>
      <Navbar data={data} setData={setData} />

      <Switch>
          <Route exact  path="/">
      <CardContainer data={data}  />
            
          </Route>
          <Route path="/VideoPlayer">
            <VideoPlayer />
          </Route>
         
        </Switch>
    <div>
    </div>
    </Router>
  )
}

export default App