// import React, { Component } from "react";

// class Practice extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       LoggedIn: false,
//     };
//   }

  
//   render() {
//       // ternary operator
//     // return this.state.LoggedIn ? <h1>let him</h1> : <h2>let him go</h2>; //ternary operator

//     // simple if else condition
//     // if(this.state.LoggedIn)
//     // {
//     //     return <div>let him go</div>
//     // }
//     // else{
//     //     return <div> <b>let him plz </b></div>
//     // }
//   }
// }

// export default Practice;
import {React,useState} from 'react'

const Practice = () => {
    const [LoggedIn,setLoggedIn] = useState(3)

    // if(LoggedIn){
    //     return <h1>you are pass</h1>
    // }
    // else {
    //     return <h1>you are fail</h1>
    // }




    return (
        <div>
         {LoggedIn==1 ? <h1>welcome Sajid </h1>  :LoggedIn==2? <h1>welcome Guest</h1> : <h1>welcome 3 </h1>}
        </div>
    )
}

export default Practice

