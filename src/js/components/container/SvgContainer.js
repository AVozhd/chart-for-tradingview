import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as svgActions from '../../actions/svgActions';
import Block from '../presentational/Block';

class SvgContainer extends React.Component {
  
  constructor(props, context) {
    super(props, context);
    this.addBlock = this.addBlock.bind(this);
    this.draw = this.draw.bind(this);
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
  
  addBlock(event) {
    let blocks = this.state.blocks;
    blocks.push({
      title: 'buy',
      x: 100,
      y: Math.random() * 100
    });
    
    // console.log(blocks);
    // course.title = event.target.value;
    // console.log(course);
    // this.setState((prevState, props) => ({
    //   course: prevState.course + props.course
    // }));
    this.setState({ blocks: blocks });
    this.draw();
  }
  
  draw() {
    this.props.createBlock(this.state.blocks);
  }
  // onClickSave() {
  //   this.props.createBlock(this.state.blocks);
  // }
  
  componentDidMount() {
    this.draw();
  }
  
  drawBlock(blocks) {
    let arr = [];
    Object.values(blocks).forEach(function (element, index) {
      arr.push(
        <g key={index} transform={"translate(" + element.x + "," + element.y + ")"}>
          <rect height="50" width="100" x="-50" y="0" />
          <text x="0" y="30" >{element.title}</text>
        </g>
      )});
    return [...arr];
  }
  
  render() {
    return(
      <div>
        <div>
          <button onClick={this.addBlock}>add block</button>
        </div>
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 300 500" className={"svg" + this.props.type} >
          {this.props.blocks.map(this.drawBlock)}
        </svg>
      </div>
    );
  }
}

SvgContainer.propTypes = {
  blocks: PropTypes.array,
  createBlock: PropTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
    blocks: state.blocks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createBlock: (block) => dispatch(svgActions.createBlock(block))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SvgContainer);
