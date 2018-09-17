import React from 'react';
import SvgInstanceExample from './components/presentational/SvgInstanceExample';
import SnapSvgContainer from './components/container/SnapSvgContainer';
import ContainerDimensions from 'react-container-dimensions';
import StaticFlowChart from './components/container/StaticFlowChart';
import CoursesPage from './examples/CoursesPage';
import SvgContainer from './components/container/SvgContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.addBlock = this.addBlock.bind(this);
  }
  
  
  render() {
    return (
      <div className="container">
        <SvgContainer />
        {/*<div>
          <button onClick={this.addBlock} >Add block</button>
        </div>*/}
      </div>
    )
  }
}

// <CoursesPage />

/*
<div className="container">
  <div className="svg-container">
    <StaticFlowChart type="Buy" />
    /!*<ContainerDimensions>
     { ({ width, height }) => <StaticFlowChart containerWidth={width} containerHeight={height} /> }
     </ContainerDimensions>*!/
  </div>
  <div className="svg-container">
    <StaticFlowChart type="Sell" />
  </div>
</div>*/
