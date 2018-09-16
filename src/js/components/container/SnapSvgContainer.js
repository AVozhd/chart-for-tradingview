import React from 'react';

export default class SnapSvgContainer extends React.Component {
  
  render() {
    return (
      <svg version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 268 268" >
        <circle r="130" cx="134" cy="134" />
        <line x1="47" y1="198" x2="221" y2="198" />
        <polygon points="52,190 134,30 216,190" />
        <text x="134" y="142" >SVG</text>
        <g className="first triangle_group"
           transform="translate(45,67) rotate(10 12.5 12.5)" >
          <polygon points="7,10 12,0 17,10" />
          <polygon points="0,25 5,15 10,25" />
          <polygon points="15,25 20,15 25,25" />
        </g>
        <g className="second triangle_group"
           transform="translate(198,67) rotate(-10 12.5 12.5)" >
          <polygon points="7,10 12,0 17,10" />
          <polygon points="0,25 5,15 10,25" />
          <polygon points="15,25 20,15 25,25" />
        </g>
        <g className="third triangle_group"
           transform="translate(121.5,211) scale(0.6) translate(8,8)" >
          <polygon points="7,10 12,0 17,10" />
          <polygon points="0,25 5,15 10,25" />
          <polygon points="15,25 20,15 25,25" />
        </g>
        <g transform="translate(30,70)">
          <path d="M7,10 L7,10 L12,0 L17,10 Z" />
        </g>
      </svg>
    )
  }
  
}

/*<svg ref={this.svgRef}
 width={this.props.width}
 height={this.props.height}
 version="1.1"
 xmlns="http://www.w3.org/2000/svg" >
 <rect height="80" width="100" />
 <rect height="60" width="80" fill="white" x="10" y="10" />
 <rect x="5"
 y="150"
 height="100"
 width="70"
 fill="white"
 stroke="#FF2626"
 stroke-width="10"
 rx="5" />
 <circle cx="40" cy="105" r="3" />
 </svg>*/
