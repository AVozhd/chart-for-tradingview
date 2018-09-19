import React from 'react';
import { connect } from 'react-redux';
import Block from '../presentational/Block';
import SimpleArrow from '../presentational/SimpleArrow';

export default class BuyChart extends React.Component {
  constructor(props) {
    super(props);
    this.addBlock = this.addBlock.bind(this);
    this.removeBlock = this.removeBlock.bind(this);
  }
  
  addBlock() {
    let blocks = this.props.options.blocks.slice(0, this.props.options.blocks.length - 1);
    blocks.push({
      key: blocks[blocks.length - 1].key + 1,
      blockType: 'complex',
      x: 0,
      y: blocks[blocks.length - 1].y + blocks[blocks.length - 1].height + 50,
      width: 250,
      height: 100,
      leftParamsTitle: 'RS1',
      rightParamsTitle: 'BB'
    });
    blocks.push({
      key: blocks[blocks.length - 1].key + 1,
      blockType: 'simple',
      title: 'finish',
      x: 0,
      y: blocks[blocks.length - 1].y + blocks[blocks.length - 1].height + 50,
      width: 100,
      height: 50
    });
    let newBlock = blocks[blocks.length - 1];
    let lastBlock = blocks[blocks.length - 2];
    let arrows = this.props.options.arrows;
    arrows.push({
      x1: lastBlock.x,
      y1: lastBlock.y + lastBlock.height,
      x2: newBlock.x,
      y2: newBlock.y
    });
    this.props.onChange({blocks, arrows});
    
    let newTotalHeight = [];
    blocks.map((block) => newTotalHeight.push(block.height));
    newTotalHeight = newTotalHeight.reduce((accumulator, currentValue) => accumulator + currentValue);
    newTotalHeight = newTotalHeight + arrows.length * 50;
    this.props.recalcSvgParams({width: this.props.svgParams.width, height: newTotalHeight + 2});
  }
  
  removeBlock(blockId) {
    let arrows = this.props.options.arrows;
    let blocks = this.props.options.blocks;
    blocks = blocks.filter(block => block.key !== blockId);
    this.props.removeBlock({blocks, arrows});
  
    /*let newTotalHeight = [];
    blocks.map((block) => newTotalHeight.push(block.height));
    newTotalHeight = newTotalHeight.reduce((accumulator, currentValue) => accumulator + currentValue);
    newTotalHeight = newTotalHeight + arrows.length * 50;
    this.props.recalcSvgParams({width: this.props.svgParams.width, height: newTotalHeight + 2});*/
  }
  
  
  render() {
    return(
      <g transform="translate(130,1)">
        {this.props.options.blocks.map((elem, index) => <Block addBlock={this.addBlock}
                                                               removeBlock={this.removeBlock}
                                                               params={elem}
                                                               key={index}
                                                               index={index} />)}
        {this.props.options.arrows.map((elem, index) => <SimpleArrow params={elem}
                                                                     key={index}
                                                                     index={index} />)}
      </g>
    )
  }
}

