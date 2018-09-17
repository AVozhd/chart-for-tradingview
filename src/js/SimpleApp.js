import React from 'react';

export default class SimpleApp extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.addBlock = this.addBlock.bind(this);
    // this.draw = this.draw.bind(this);
    
    this.state = {
      blocks: [
        {
          title: 'buy',
          x: 100,
          y: 1
        }
      ]
    }
    
  }
  
  addBlock() {
    let blocks = this.state.blocks;
    let newBlockY = blocks[blocks.length - 1].y + 100;
    blocks.push({
      title: 'buy',
      x: 100,
      y: newBlockY
    });
    this.setState({ blocks: blocks });
    
    /*this.setState((prevState, props) => ({
      blocks: prevState.blocks.push({
        title: 'buy',
        x: 100,
        y: prevState.blocks[prevState.blocks.length - 1].y + 100
      })
    }));*/
  }
  
  drawBlock(block, index) {
    return (
      <g key={index} transform={"translate(" + block.x + "," + block.y + ")"}>
        <rect height="50" width="100" x="-50" y="0" />
        <text x="0" y="30" >{block.title}</text>
      </g>
    )
  }
  
  render() {
    return(
      <div className="container">
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 300 500" className={"svg" + this.props.type} >
          {this.state.blocks.map(this.drawBlock)}
        </svg>
        <div>
          <button onClick={this.addBlock}>add block</button>
        </div>
      </div>
    )
  }
}
