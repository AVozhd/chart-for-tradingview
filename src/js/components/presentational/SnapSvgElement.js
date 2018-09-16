import React from 'react';
import Snap from 'snapsvg';
import $ from 'jquery';

export default class SnapSvgElement extends React.Component {
  
  constructor(props) {
    super(props);
    this.svgDivRef = React.createRef();
  }
  
  svgRender() {
    let paper = Snap(this.svgsvgDivRef);
    let rect = paper.rect(0, 0, 100, 50);
    // Snap.load("images/map.svg", function(data){
    //   if (element) {
    //     element.append(data);
    //   }
    // });
  }
  
  componentDidMount() {
    this.svgRender();
  }
  
  componentDidUpdate() {
    this.svgRender();
  }
  
  render() {
    return  <div ref={this.svgDivRef} />
  }
  
}


/*
export default class SnapSvgElement extends React.Component {
  
  svgRender() {
    let paper = Snap(`#${this.props.id}`);
    // let line = paper.line(50, 50, 100, 100);
    // line.attr({
    //   fill: '#000',
    //   stroke: '#000',
    //   strokeWidth: 2
    // });
    let rect = paper.rect(0, 0, this.props.width, this.props.height);
    rect.attr({
      fill: '#fff',
      stroke: '#000',
      strokeWidth: 2
    });
    let foreignObjSvgTemplate = `<foreignObject width=${this.props.width} height=${this.props.height}>
                                   <body>
                                     <span class="test">
                                       ${this.props.text}
                                     </span>
                                   </body>
                                 </foreignObject>`;
    let text = Snap.parse(foreignObjSvgTemplate);
    let res = paper.append(text);
    // let line = paper.line(this.props.width/2, parseInt(this.props.height), parseInt(this.props.width/2), parseInt(this.props.height*2));
    let line = paper.line(parseInt((this.props.width/2)), parseInt(this.props.height), parseInt(this.props.width/2), parseInt(this.props.height*2));
    line.attr({
      stroke: '#000',
      strokeWidth: 2
    });
    
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
      <svg id={id} width={this.props.width} height={this.props.height} />
    )
  }
}

// height="300px"
*/
