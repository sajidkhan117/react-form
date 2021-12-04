import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {

    return this.state.isLoggedIn && <div>welcome khan </div>

    // ternary operator ----------
    // return(

    //     this.state.isLoggedIn ?
    //     <div>welcome sajid</div> :
    //     <div>welcome Guest</div>
    // )
 






    // simple if else statement

    // if (this.state.isLoggedIn) {
    //   return <div>welcome sajid</div>;
    // } else {
    //   return <div>welcome Guest</div>;
    // }



    // return (
    //     <>
    //     <div> welcome sajid </div>
    //     <div> welcome Guest</div>
    //     </>
    // )
  }
}

export default UserGreeting;
