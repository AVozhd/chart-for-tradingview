import React from 'react';

export default class Block extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    return(
      <g key='test' transform={"translate(" + 100 + "," + 1 + ")"}>
        <rect height="50" width="100" x="-50" y="0" />
        <text x="0" y="30" >test</text>
      </g>
    )
  }
}

// <g key={index} transform={"translate(" + block.x + "," + block.y + ")"}>
//  <rect height="50" width="100" x="-50" y="0" />
//  <text x="0" y="30" >{block.title}</text>
// </g>
