import React from 'react';

export default class Block extends React.Component {
  constructor(props) {
    super(props);
  
    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      status: ''
    };
  }
  
  handleClick(event) {
    this.setState({
      status: 'active'
    });
  }
  
  render() {
    if(this.props.params.blockType === 'simple') {
      return(
        <g key={this.props.index}
           transform={"translate(" + this.props.params.x + "," + this.props.params.y + ")"}>
          <rect className={this.state.status}
                height={this.props.params.height}
                width={this.props.params.width}
                x={this.props.params.width - this.props.params.width*1.5 + ""}
                y="0"
                onClick={this.handleClick} />
          <text x="0"
                y={this.props.params.height - this.props.params.height/2.5} >
            {this.props.params.title}
          </text>
        </g>
      )
    } else if(this.props.params.blockType === 'complex') {
      return(
        <g key={this.props.index} transform={"translate(" + this.props.params.x + "," + this.props.params.y + ")"}>
          <rect height={this.props.params.height}
                width={this.props.params.width}
                x={"-" + this.props.params.width/2}
                y="0" />
          <text x="0"
                y={this.props.params.height - this.props.params.height/2.5} >
            and
          </text>
          <g transform={"translate(" + "-" + this.props.params.width/2 + ",0)"}>
            <rect className={this.state.status}
                  height="100"
                  width="100"
                  x="0"
                  y="0"
                  onClick={this.handleClick} />
            <line x1="1" y1="50" x2="99" y2="50" />
            <text x="50" y="30" >{this.props.params.leftParamsTitle}</text>
            <text x="50" y="80" >Params</text>
          </g>
          <g transform={"translate(" +  this.props.params.width*0.1 + ",0)"}>
            <rect className={this.state.status}
                  height="100"
                  width="100"
                  x="0"
                  y="0"
                  onClick={this.handleClick}/>
            <line x1="1" y1="50" x2="99" y2="50" />
            <text x="50" y="30" >{this.props.params.rightParamsTitle}</text>
            <text x="50" y="80" >Params</text>
          </g>
        </g>
      )
    }
  }
}
