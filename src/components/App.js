import React, {Component} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const relativeList = ['Relative 1', 'Relative 2', 'Relative 3', 'Relative 4', 'Relative 5', 'Relative 6'];
        return (
          <div id="main">
            <ol key="relativeList">
              {relativeList.map((relative, idx) => (
                <li key={`relativeListItem${idx+1}`}>{relative}</li>
              ))}
            </ol>
          </div>
        );
    }
}


export default App;
