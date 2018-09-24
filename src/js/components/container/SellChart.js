import React from 'react';
import { connect } from 'react-redux';
import Block from '../presentational/Block';
import SimpleArrow from '../presentational/SimpleArrow';
import $ from 'jquery';

export default class BuyChart extends React.Component {
  constructor(props) {
    super(props);
    this.addBlock = this.addBlock.bind(this);
    this.removeBlock = this.removeBlock.bind(this);
    this.changeFormState = this.changeFormState.bind(this);
  }
  
  changeFormState(eventTarget, blockIndex) {
    this.props.changeFormState({
      active: true,
      top: Math.floor($(eventTarget).position().top) - 5,
      currentBlock: blockIndex,
    });
    this.props.hideResultScript({
      active: false
    });
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
      options: {
        left: {
          title: 'condition',
          param1: 'none',
        },
        right: {
          title: 'condition',
          param1: 'none',
        },
      },
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
    this.recalcSvgParams(blocks, arrows);
  }
  
  removeBlock(blockId) {
    let blocks = this.props.options.blocks;
    let arrows = [];
    blocks = blocks.filter(block => block.key !== blockId);
    blocks.map((block, index) => {
      if(index > 0) {
        block.y = blocks[index-1].y + blocks[index-1].height + 50;
        arrows.push({
          x1: blocks[index-1].x,
          y1: blocks[index-1].y + blocks[index-1].height,
          x2: block.x,
          y2: block.y
        });
      }
    });
    this.props.removeBlock({blocks, arrows});
    this.recalcSvgParams(blocks, arrows);
  }
  
  recalcSvgParams(blocks, arrows) {
    let newTotalHeight = [];
    blocks.map((block) => newTotalHeight.push(block.height));
    newTotalHeight = newTotalHeight.reduce((accumulator, currentValue) => accumulator + currentValue);
    newTotalHeight = newTotalHeight + arrows.length * 50;
    this.props.recalcSvgParams({
      buyChart: this.props.svgParams.buyChart,
      sellChart: {
        width: this.props.svgParams.sellChart.width,
        height: newTotalHeight + 2,
      },
    });
  }
  
  
  render() {
    return(
      <g transform="translate(130,1)">
        {this.props.options.blocks.map((elem, index) => <Block addBlock={this.addBlock}
                                                               removeBlock={this.removeBlock}
                                                               changeFormState={this.changeFormState}
                                                               params={elem}
                                                               key={index}
                                                               index={index}
                                                               blockStateKey={ this.props.options.blocks[index].key }
                                                               form={ this.props.form } />)}
        {this.props.options.arrows.map((elem, index) => <SimpleArrow params={elem}
                                                                     key={index}
                                                                     index={index} />)}
      </g>
    )
  }
}

