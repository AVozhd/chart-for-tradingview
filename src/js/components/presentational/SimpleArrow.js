import React from 'react';

export default class SimpleArrow extends React.Component {
  
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
