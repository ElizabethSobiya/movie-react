import React, {useEffect, useState}from 'react'
import axios from 'axios' 
import HomePage from './HomePage'


function Navbar() {

//     const [APIData, setAPIData] = useState([])

//     const [searchInput , setSearchInput] = useState ('')
     
//     const searchItems = (searchValue) => {
//           setSearchInput(searchValue)
//     }
//   console.log(searchValue);
//     // onChange = {( e) => searchItems(e.target.value)}

//     useEffect = ( () => {
//         axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`)
//         .then((response) => {
//             setAPIData(response.data)
//             // console.log(response);
//         })
//     })
  return (
    <div>
      <h1>Ticket Avail</h1>
        <input className='input' type="search" placeholder="Search..."  />
       
    </div>
  )
}

export default Navbar