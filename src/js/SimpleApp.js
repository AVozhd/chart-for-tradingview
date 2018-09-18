import React from 'react';
import Block from './components/presentational/Block';
import SimpleArrow from './components/presentational/SimpleArrow';

export default class SimpleApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.showBuy = this.showBuy.bind(this);
    this.showSell = this.showSell.bind(this);
    this.addBlock = this.addBlock.bind(this);
    this.drawArrow = this.drawArrow.bind(this);
    
    this.state = {
      chartType: 'buy',
      arrows: [
        {
          x1: 0,
          y1: 50,
          x2: 0,
          y2: 100
        },
        {
          x1: 0,
          y1: 200,
          x2: 0,
          y2: 250
        }
      ],
      blocks: [
        {
          blockType: 'simple',
          title: 'buy',
          x: 0,
          y: 0,
          width: 100,
          height: 50
        },
        {
          blockType: 'complex',
          x: 0,
          y: 100,
          width: 250,
          height: 100,
          leftParamsTitle: 'RS1',
          rightParamsTitle: 'BB'
        },
        {
          blockType: 'simple',
          title: 'finish',
          x: 0,
          y: 250,
          width: 100,
          height: 50
        }
      ]
    }
  }
  
  showBuy() {
    if(this.state.chartType !== 'buy') {
      this.setState({
        chartType: 'buy'
      });
    }
  }
  
  showSell() {
    if(this.state.chartType !== 'sell') {
      this.setState({
        chartType: 'sell'
      });
    }
  }
  
  addBlock() {
    let blocks = this.state.blocks;
    let newBlocksState = blocks.slice(0, blocks.length - 1);
    newBlocksState.push({
      blockType: 'complex',
      x: 0,
      y: newBlocksState[newBlocksState.length - 1].y + newBlocksState[newBlocksState.length - 1].height + 50,
      width: 250,
      height: 100,
      leftParamsTitle: 'RS1',
      rightParamsTitle: 'BB'
    });
    newBlocksState.push({
      blockType: 'simple',
      title: 'finish',
      x: 0,
      y: newBlocksState[newBlocksState.length - 1].y + newBlocksState[newBlocksState.length - 1].height + 50,
      width: 100,
      height: 50
    });
    this.setState({
      blocks: newBlocksState
    });
    this.drawArrow(newBlocksState);
  }
  
  drawArrow(blocks) {
    let newBlock = blocks[blocks.length - 1];
    let lastBlock = blocks[blocks.length - 2];
    let arrows = this.state.arrows;
    arrows.push({
      x1: lastBlock.x,
      y1: lastBlock.y + lastBlock.height,
      x2: newBlock.x,
      y2: newBlock.y
    });
    this.setState({
      arrows: arrows
    });
  }
  
  render() {
    return(
      <div className="container">
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 300 500"
             className={"svg" + this.props.type} >
          <g transform="translate(150,1)">
            {this.state.blocks.map((elem, index) => <Block params={elem} index={index} />)}
            {this.state.arrows.map((elem, index) => <SimpleArrow params={elem} index={index} />)}
          </g>
        </svg>
        <div>
          <button className="btn btn-outline-primary" onClick={this.showBuy}>Buy</button>
          <button className="btn btn-outline-primary" onClick={this.showSell}>Sell</button>
          <button className="btn btn-outline-primary" onClick={this.addBlock}>add block</button>
        </div>
      </div>
    )
  }
}
