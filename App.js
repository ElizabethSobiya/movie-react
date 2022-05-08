// import React from 'react'
// import Main from './Birthday-reminder/Main';

// function App() {
//   return (
//       <>
//       <Main/>
//       </>
    
//   )
// }







import React from 'react'
import HomePage from './MoviesWebsite/HomePage';
import Navbar from './MoviesWebsite/Navbar';
import Footer from './MoviesWebsite/Footer';


function App() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Footer/>
    </>
  )
}




// import React, {Fragment, useState, useEffect } from "react";
// import Home from "./Router/Home";
// import { BrowserRouter, Navigate, Route , Routes,} from "react-router-dom";
// import About from "./Router/About";
// import Details from "./Router/Details";
// import Navbar from "./Router/Navbar";

// function App() {

//   useEffect(() => {
//     if (JSON.parse(localStorage.getItem("isLoggedIn")) == null){
//       localStorage.setItem("isLoggedIn", false)
//     }
//   })
 
   
//   const [isLoggedIn,setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")))
//   return (
   
    

//     <div className="components">
//       {/* <h1>APP COMPONENT</h1> */}
//       <BrowserRouter>
//       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn ={setIsLoggedIn}/>
//        <Routes>
//        <Route path = "/" element ={ <Home/> } />
//        <Route path= "/about" element = { isLoggedIn == true ? <About/> : <Navigate to= '/'/>} />
//        <Route path= "/details" element = {isLoggedIn == true ? <Details/> : <Navigate to= '/'/>} />
//        <Route path="*" element ={ <h1>404 page not found</h1>}/>
//        </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }


// import React, { Component } from 'react'
// import Counter from "./Counter";

//  class App extends Component {
  

    
//     render() {
//     return (
//       <div>
//         <Counter/>
//       </div>
//     )
//   }
// }






// // import React, { Component } from "react";
// // import AdminPanel from './AdminPanel/AdminPanel'
// import axios from 'axios';
// import GridDesign from './GridDesign/GridDesign.js';
// // import './GridDesign.css'
// import { Component } from 'react';



// export class App extends Component{
//   render(){
//     return(
//       <div>
//         <GridDesign/>
//       </div>
//     )
//   }
// }

// function App(){
//   return(
//     <div>
//        <GridDesign/>
//     </div>
//   )
// }


// export class App extends Component{

  
//   render (){
//   return (
//     <div>
//     
//       {/* <AdminPanel/> */}
//     </div>
//   )
// }
// }




export default App;
