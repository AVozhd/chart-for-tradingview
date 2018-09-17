import React from 'react';

export default class SimpleBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <g key={this.props.index} transform={"translate(" + this.props.params.x + "," + this.props.params.y + ")"}>
        <rect height="50" width="100" x="-50" y="0" />
        <text x="0" y="30" >{this.props.params.title}</text>
      </g>
    )
  }
}
