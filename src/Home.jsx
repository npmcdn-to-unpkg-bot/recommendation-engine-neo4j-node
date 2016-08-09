import React, {Component} from 'react';
import SearchBar from './SearchBar.jsx';
import BarChartComponent from './BarChartComponent.jsx';
import Hero from './Hero.jsx';

class Home extends Component{
  constructor(props){
      super(props);
      this.state = {searchBarText:'',
                    chartData: {
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [{
                              label: 'My First dataset',
                              backgroundColor: [
                                  'rgba(255, 99, 132, 0.2)',
                                  'rgba(54, 162, 235, 0.2)',
                                  'rgba(255, 206, 86, 0.2)',
                                  'rgba(75, 192, 192, 0.2)',
                                  'rgba(153, 102, 255, 0.2)',
                                  'rgba(255, 159, 64, 0.2)'
                              ],
                              borderColor: [
                                  'rgba(255,99,132,1)',
                                  'rgba(54, 162, 235, 1)',
                                  'rgba(255, 206, 86, 1)',
                                  'rgba(75, 192, 192, 1)',
                                  'rgba(153, 102, 255, 1)',
                                  'rgba(255, 159, 64, 1)'
                              ],
                              borderWidth: 1,
                              data: [65, 59, 80, 81, 56, 55, 40]
                          }]
                    }

    };
  }

  _handleTextInput = (text) => {
    debugger;
    this.setState({searchBarText: text });
    this.setState({
      chartData: {
        labels: [text, 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
                label: 'My First dataset',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                data: [65, 59, 80, 81, 56, 55, 40]
            }]
      }
    });
  }

  render() {
      return (

        <div>
          <Hero />
          <SearchBar
            handleTextInput={this._handleTextInput}
            searchBarValue={this.state.searchBarText}
          />
          <BarChartComponent
            chartData={this.state.chartData}
          />
        </div>
      );
    }
}

export default Home
