import React from 'react';
import classNames from 'classnames/bind';

export default class Block extends React.Component {
  
  render() {
    if(this.props.params.blockType === 'simple') {
      return(
        <g key={this.props.index}
           transform={"translate(" + this.props.params.x + "," + this.props.params.y + ")"}>
          <rect height={this.props.params.height}
                width={this.props.params.width}
                x={this.props.params.width - this.props.params.width*1.5 + ""}
                y="0" />
          <text x="0"
                y={this.props.params.height - this.props.params.height/2.5} >
            {this.props.params.title}
          </text>
        </g>
      )
    } else if(this.props.params.blockType === 'complex') {
      return(
        <g key={this.props.index}
           transform={"translate(" + this.props.params.x + "," + this.props.params.y + ")"}>
          <rect height={this.props.params.height}
                width={this.props.params.width}
                onClick={(event) => this.props.changeFormState(event.target, this.props.blockStateKey)}
                className="block-cursor-pointer"
                x={"-" + this.props.params.width/2}
                y="0" />
          <text x="0"
                y={this.props.params.height - this.props.params.height/2.5} >
            and
          </text>
          <g transform={"translate(" + "-" + this.props.params.width/2 + ",0)"}>
            <polyline points="0,50 0,0 100,0 100,50 0,50 0,100 100,100 100,50"
                      className={classNames({
                        'deactived': this.props.params.options.left.title === 'none'
                      })} />
            <text className={classNames({
                    'deactived-text': this.props.params.options.left.title === 'none'
                  })}
                  x="50"
                  y="30" >{this.props.params.options.left.title}</text>
            <text x="50"
                  y="80"
                  {...(this.props.params.options.left.param1.length > 10 ? {textLength: '96'} : {})}
                  {...(this.props.params.options.left.param1.length > 10 ? {lengthAdjust: 'spacing'} : {})} >
              {this.props.params.options.left.param1}
            </text>
          </g>
          <g transform={"translate(" +  this.props.params.width*0.1 + ",0)"}>
            <polyline points="0,50 0,0 100,0 100,50 0,50 0,100 100,100 100,50"
                      className={classNames({
                        'deactived': this.props.params.options.right.title === 'none'
                      })} />
            <text className={classNames({
                    'deactived-text': this.props.params.options.right.title === 'none'
                  })}
                  x="50"
                  y="30" >{this.props.params.options.right.title}</text>
            <text x="50"
                  y="80"
                  {...(this.props.params.options.right.param1.length > 10 ? {textLength: '96'} : {})}
                  {...(this.props.params.options.right.param1.length > 10 ? {lengthAdjust: 'spacing'} : {})} >
              {this.props.params.options.right.param1}
            </text>
          </g>
          <polyline points={`0,0 ${this.props.params.width},0 ${this.props.params.width},${this.props.params.height} 0,${this.props.params.height} 0,0`}
                    transform={`translate(-${this.props.params.width/2},0)`}
                    className={classNames({
                      'active': this.props.blockStateKey === this.props.form.currentBlock,
                      'undisplayed': this.props.blockStateKey !== this.props.form.currentBlock
                    })} />
          <g className="addBlockBtn"
             transform={"translate(" + (this.props.params.width/2 + 20) + "," + (this.props.params.height/2 + this.props.params.height/6) + ")"}
             onClick={() => this.props.addBlock()} >
            <circle cx="0"
                    cy="0"
                    r={this.props.params.height/10 + ""} />
            <line x1={"-" + (this.props.params.height/10 - 5)}
                  y1="0"
                  x2={"" + (this.props.params.height/10 - 5)}
                  y2="0" />
            <line x1="0"
                  y1={"" + (this.props.params.height/10 - 5)}
                  x2="0"
                  y2={"-" + (this.props.params.height/10 - 5)} />
          </g>
          <g className="removeBlockBtn"
             transform={"translate(" + (this.props.params.width/2 + 20) + "," + (this.props.params.height/2 - this.props.params.height/6) + ")"}
             onClick={() => this.props.removeBlock(this.props.params.key)} >
            <circle cx="0"
                    cy="0"
                    r={this.props.params.height/10 + ""} />
            <line x1={"-" + (this.props.params.height/10 - 5)}
                  y1="0"
                  x2={"" + (this.props.params.height/10 - 5)}
                  y2="0" />
          </g>
        </g>
      )
    }
  }
}
