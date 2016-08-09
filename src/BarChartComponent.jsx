import React, {Component} from 'react';
var BarChart = require('react-chartjs').Bar;

class BarChartComponent extends Component{
  constructor(props){
    super(props)
  }

  render() {
    return <BarChart data={this.props.chartData} width="600" height="250"/> //options={chartOptions}
  }
}

export default BarChartComponent;
