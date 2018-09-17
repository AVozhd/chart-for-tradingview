import React from 'react';

export default class SimpleArrow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <g key={this.props.index} transform={"translate(" + this.props.params.x + "," + this.props.params.y + ")"} >
        <line x1="0" y1="0" x2="0" y2="23" />
        <polygon points="-2,23 2,23 0,28" />
      </g>
    )
  }
}
