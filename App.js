// import React,{Component} from 'react'
// import logo from './logo.svg';
// import './App.css';

// import { Component } from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// import React,{useState} from 'react';
// import './App.css'
// export default function yname(){
//     const[likebtn,setlike]=useState(0)
//     return(
//       <div>
//            <h1>{likebtn}</h1>
//         <button onClick={()=>{
//           setlike(likebtn+1)
//         }}>Like</button>
//       </div>
//     )

// }



// import React,{useState} from 'react';
// import  './App.css'
// export default function Myname(){
//   const [todo,settodo]=useState("")
//   const [alltodos,setalltodos]=useState([])

// return(
//   <div>
//     <input type='text' placeholder='enter the name' onChange={(e)=>{
//       settodo(e.target.values)
//     }}/>

//     <button onClick={()=>{
//       setalltodos([alltodos,todo])
//     }}>submit</button>
//     </div>
// )
// }




// table create

// import React from 'react';
// import './App.css'



// function App() {
//   return (
//     <div className="App">
//       <h1>Table</h1>
//       <table id='table'>
//         <th id='td1'>Name</th>
//         <th id='td1'>topic</th>
//         <tr>
//           <td id='td'>pinki</td>
//           <td id='td'>node</td>
//         </tr>
//         <tr>
//           <td id='td'>simran</td>
//           <td id='td'>Natwest</td>
//         </tr>
//         <tr>
//           <td id='td'>sarita</td>
//           <td id='td'>gd</td>
//         </tr>
//         <tr>
//           <td id='td'>tanu</td>
//           <td id='td'>accenture</td>
//         </tr>
//         <tr>
//           <td id='td'>Shivani</td>
//           <td id='td'>Natwest</td>
//         </tr>
//       </table>
//     </div>
//   )
// }
// export default App;





// // render use
// import React from 'react';
// import './App.css'
// function App(){
//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   )
  
// }
// export default App




  
// component  
// import React,{Component} from 'react';
// import './App.css';
// class App extends Component {
//     render(){
//         return (
//             <div>
//                 <h2>welcome to react </h2>
//             </div>
//         )
//     }
// }
// export default App


// multiple component

// import React,{Component} from 'react';
// import './App.css';

// class App extends Component{
//     render(){
//         return (
//             <div>
//                 <Header/>
//                 <Content/>
//             </div>
//         )
//     }
// }
// class Header extends Component {
//     render(){
//         return (
//             <div>
//                 <h1>Header</h1>
//             </div>
//         )
//     }
// }
// class Content extends Component{
//     render(){
//         return (
//             <div>
//                 <h2>Content</h2>
//                 <p>The content text'''</p>
//             </div>
//         )
//     }
// }

// export default App;




// Component constructor
// import React,{Component} from 'react'
// import React from 'react'
// import './App.css';
// import Test from '.component/Test'


// function App(){
//     retrun (
//         <Test/>
//     )
// }
// export default App

// props:-
import React,{Component} from 'react'
// import logo from './logo.svg';
import Profile from './components/Profile'
import './App.css';

import { Component } from "react";
class App extends Component{
    render(){
        return (
            <div className="App">
                <Profile name="pinki"/>
                <Profile name="vicki"/>
                <Profile name="neha"/>
            </div>
        )
    }
}
export default App