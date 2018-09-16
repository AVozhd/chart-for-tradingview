import React from 'react';
import SvgInstanceExample from './components/presentational/SvgInstanceExample';
import SnapSvgContainer from './components/container/SnapSvgContainer';
import ContainerDimensions from 'react-container-dimensions';

export default class App extends React.Component {
  
  render() {
    return (
      <div className="container">
        <div className="svg-container">
          <SvgInstanceExample />
          {/*<ContainerDimensions>*/}
            {/*{ ({ width, height }) => <SnapSvgContainer width={width} height={height} /> }*/}
          {/*</ContainerDimensions>*/}
        </div>
      </div>
    )
  }
}
