import React, { Component } from "react";

class Outside extends Component {
  render(){
    return(
      <>
        - This is a import from outer file that are not included in 'src' folder.
      </>
    );
  }
}

export default Outside;