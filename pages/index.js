import React, {useState} from 'react'
import axios from 'axios'
import Item from '../components/Item' 





export default function Home() {
const [list, setList ] = useState([])
const [title, setTitle] = useState('')

 async function getListByTitle(title) {
   const data = await axios.get(`http://www.omdbapi.com?apiKey=7c339c8e${title? '&t='+title : ''}`)
    .then(data => data.data)
    .catch(error => {
      return error.message
    })

    setList([...list, data])
}


  return (
   <div>
     {console.log(list)}
     <h2>Please Enter Title Name</h2>
     <input onChange={(event) => setTitle(event.target.value)}></input>
     <button onClick={()=> getListByTitle(title)}>Submit</button>
     {list.map(item => <Item title={item.Title} year={item.Year} rating={item.imdbRating} runtime={item.Runtime} released={item.Released}/>)}
   </div>
  )
}
