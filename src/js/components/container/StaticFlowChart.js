import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

export default class StaticFlowChart extends React.Component {
  constructor(props) {
    super(props);
    // this.test = this.test.bind(this);
    // this.dim = "0 0 " + props.containerWidth + " " + props.containerHeight;
  }

  // test() {
  //   if (this.props.type === "Buy") {
  //     $('.svgSell').addClass('hidden');
  //     $('.svgBuy').removeClass('hidden');
  //   } else {
  //     $('.svgSell').removeClass('hidden');
  //     $('.svgBuy').addClass('hidden');
  //   }
  // }
  
  // test = (event) => {
  //   console.log(123);
  // };

  render() {
    // let {containerWidth, containerHeight} = this.props;
    // console.log("containerWidth ", containerWidth);
    // console.log("containerHeight ", containerHeight);
    // console.log(dim);
  
    const test = (event) => {
      console.log(123);
    };
    
    return(
      <svg version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 300 500" className={"svg" + this.props.type} >

        <g onClick={test} className="typeRect pointer" transform="translate(150,1)">
          <rect height="50" width="100" x="-50" y="0" />
          <text x="0" y="30" >{this.props.type}</text>
        </g>

        <g transform="translate(150,50)">
          <line x1="0" y1="0" x2="0" y2="23" />
          <polygon points="-2,23 2,23 0,28" />
        </g>

        <g className="typeMixRect" transform="translate(100,80)">
          <rect height="100" width="250" x="-75" y="0" />
          <text x="50" y="55" >and</text>
          <g className="typeRect pointer" transform="translate(-75,0)">
            <rect height="100" width="100" x="0" y="0" />
            <text x="50" y="30" >RS1</text>
            <line x1="0" y1="50" x2="100" y2="50" />
            <text x="50" y="80" >Params</text>
          </g>
          <g className="typeRect pointer" transform="translate(75,0)">
            <rect height="100" width="100" x="0" y="0" />
            <text x="50" y="30" >BB</text>
            <line x1="0" y1="50" x2="100" y2="50" />
            <text x="50" y="80" >Params</text>
          </g>
        </g>

        <g transform="translate(150,180)">
          <line x1="0" y1="0" x2="0" y2="23" />
          <polygon points="-2,23 2,23 0,28" />
        </g>

        <g className="typeRect pointer" transform="translate(150,210)">
          <rect height="100" width="100" x="-50" y="0" />
          <text x="0" y="30" >Market {this.props.type}</text>
          <line x1="-50" y1="50" x2="50" y2="50" />
          <text x="0" y="80" >Params</text>
        </g>

        <g transform="translate(150,310)">
          <line x1="0" y1="0" x2="0" y2="23" />
          <polygon points="-2,23 2,23 0,28" />
        </g>

        <g className="typeRect pointer" transform="translate(150,340)">
          <rect height="50" width="100" x="-50" y="0" />
          <text x="0" y="30" >Finish</text>
        </g>

      </svg>
    )
  }
}

StaticFlowChart.propTypes = {
  type: PropTypes.string
};

// <g transform="translate(100,5)">
// </g>
// <path x="2" y="2" d="M0,0 L0,0 L100,0 L100,50 L0,50 L0,0 Z" />
// <line x1="47" y1="198" x2="221" y2="198" />
// <text x="134" y="142" >Buy</text>


