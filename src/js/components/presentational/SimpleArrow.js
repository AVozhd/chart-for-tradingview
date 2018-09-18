import React from 'react';

export default class SimpleArrow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <g key={this.props.index} >
        <line x1={"" + this.props.params.x1}
              y1={"" + this.props.params.y1}
              x2={"" + this.props.params.x2}
              y2={"" + this.props.params.y2-2} />
        <polygon points={this.props.params.x2 + "," +
                         (this.props.params.y2-1) + " " +
                         (this.props.params.x2 - 3) + "," +
                         (this.props.params.y2 - 8) + " " +
                         (this.props.params.x2 + 3) + "," +
                         (this.props.params.y2 - 8)} />
      </g>
    )
  }
}

/*
<g key={this.props.index} transform={"translate(" + this.props.params.x + "," + this.props.params.y + ")"} >
  <line x1="0" y1="0" x2="0" y2="23" />
  <polygon points="-2,23 2,23 0,28" />
</g>
*/
