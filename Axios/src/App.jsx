import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [alldata ,setalldata] = useState([])
  async function hello(){
   const a = await axios.get('https://picsum.photos/v2/list')
   console.log(a.data)
   setalldata(a.data)
  }
  return (
    <div>
      <button onClick={hello}>Press me</button>
    {alldata.map(function(elem,idx){
      return <h1 key = {idx}>{elem.author}</h1>
    })}
    </div>
  )
}
export default App
