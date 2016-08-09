import React, {Component} from 'react';
import { Link,  IndexLink  } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><IndexLink  to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/info" activeClassName="active">Info</Link></li>
          <li><Link to="/graphs" activeClassName="active">Graphs</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default App;
