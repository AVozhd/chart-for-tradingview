import React from 'react';
import SnapSvgContainer from './components/container/SnapSvgContainer';
import FormContainer from './components/container/FormContainer';
import HignChartContainer from './components/container/HignChartContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <SnapSvgContainer id="test" />
        {/*<FormContainer />*/}
        {/*<HignChartContainer />*/}
      </div>
    )
  }
}

export default App;
