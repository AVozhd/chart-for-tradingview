import React from 'react';
import Snap from 'snapsvg';

export default class SnapSvgContainer extends React.Component {
  
  svgRender() {
    let paper = Snap(`#${this.props.id}`);
    let rect = paper.rect(0, 0, 150, 150);
    rect.attr({
      fill: '#fff',
      stroke: '#000',
      strokeWidth: 2
    });
    // let text = paper.text(x, y, text);
    // let circle = snp.circle(150, 150, 100);
    // circle.attr({
    //   fill: '#fff',
    //   stroke: '#000',
    //   strokeWidth: 2
    // });
  }
  
  componentDidMount() {
    this.svgRender();
  }
  
  componentDidUpdate() {
    this.svgRender();
  }
  
  // componentDidUpdate(prevProps, prevState) {
  //   if (!_.isEqual(prevProps,this.props)) {
  //     this.svgRender()
  //   }
  // }
  
  render() {
    let {id} = this.props;
    return (
      // <div ref={d=>this.svgDiv=d} />
      <svg id={id} />
    )
  }
}

// height="300px"
