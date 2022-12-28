import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


          




// simple element
// const element=<h1 className='testclass'>hello</h1>;
// ReactDOM.render(element,document.getElementById('root'))


// differnet Container
// const element =<h1 className='testclass'>hello pinki</h1>
// ReactDOM.render(element,document.getElementById('root'))
// const newElement =<h1 className='testclass'>hello pinki</h1>
// ReactDOM.render(newElement,document.getElementById('apple'))

// one container
// const element=(
//   <div className='testclass'>
//     <h1>hello pinki</h1>
//     <h2>how are you</h2>
//   </div>
// )
// ReactDOM.render(element,document.getElementById('root'))



// plain javascript
// const element=React.createElement("h1",null,"welcome to my programming")
// ReactDOM.render(element,document.getElementById('root'))




// contain one container
// const element=React.createElement("div",{className:"testclass"},
// React.createElement("h1",null,"hello jaan"),
// React.createElement("h2",null,"hello jaan"))
// ReactDOM.render(element,document.getElementById('root'))




// import React,{Component} from 'react';
// import './App.css';
// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }

// export default Car






// function component:-
// import Heading from './Heading'
// import Para from './Para'
// ReactDOM.render(
//   <>
//   <Heading></Heading>
//   <Para></Para>
  
//   </>,
//   document.getElementById('root')
// )

 
// multiple component
// ReactDOM.render(<App/>,document.getElementById('root'))
// reportWebVitals();



// ReactDOM.render(
//         <div>
//         <App/><App/>
//         </div>,document.getElementById('root'))
// reportWebVitals()



// import React from 'react';
// import React, { Component } from 'react';  

// class Test extends Component{
//     constructor (props){
//         super(props);
//         this.state=
//         {
//             data:"pinki"
//         }
//     }
//     render(){
//         return (
//             <h1>pinki</h1>
//         )
//     }
// }
// export default Test




import React from 'react'

export default function Profile(props)
{
    return(
        <div>
            <h1>{props.text}</h1>
        </div>
    )
}