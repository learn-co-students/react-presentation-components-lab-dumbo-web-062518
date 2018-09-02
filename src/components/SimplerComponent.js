// Code SimplerComponent Here
import React, { Component } from 'react';

// export default class SimplerComponent extends Component {
//   render() {
//     return (
//       <div onClick={this.undefined}>I am just happy</div>
//     )
//   }
// }

const SimplerComponent = ({handleClick}) => {
  return (
    <div onClick={handleClick}>I am just happy</div>
  )
}
export default SimplerComponent;
