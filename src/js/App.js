import React from 'react';
import SvgInstanceExample from './components/presentational/SvgInstanceExample';
import SnapSvgContainer from './components/container/SnapSvgContainer';
import ContainerDimensions from 'react-container-dimensions';
import StaticFlowChart from './components/container/StaticFlowChart';

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="svg-container">
          <StaticFlowChart type="Buy" />
          {/*<ContainerDimensions>
            { ({ width, height }) => <StaticFlowChart containerWidth={width} containerHeight={height} /> }
          </ContainerDimensions>*/}
        </div>
        <div className="svg-container">
          <StaticFlowChart type="Sell" />
        </div>
      </div>
    )
  }
}
