import React from 'react';
import SnapSvgContainer from './components/container/SnapSvgContainer';
import FormContainer from './components/container/FormContainer';
import HignChartContainer from './components/container/HignChartContainer';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <SnapSvgContainer id="Buy" text="Buy"  width="100" height="50" />
        </div>
        {/*<FormContainer />*/}
        {/*<HignChartContainer />*/}
      </div>
    )
  }
}

export default App;
