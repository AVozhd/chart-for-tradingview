import React from 'react';
import Highcharts from 'highcharts';

class HignChart extends React.Component {
  
  state = {
    config: {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Jane',
        data: [1, 0, 4]
      }, {
        name: 'John',
        data: [5, 7, 3]
      }]
    }
  };
  
  componentDidMount() {
    this.drawChart();
  }
  
  drawChart() {
    let {id} = this.props;
    Highcharts.chart(id, this.state.config);
  }
  
  render() {
    return (
      <div id={this.props.id} />
    )
  }
  
}

export default HignChart;
