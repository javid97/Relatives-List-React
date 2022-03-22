import React, {Component, useState} from "react";
import '../styles/App.css';
import List from "./List";

class App extends Component {
    render() {
        const relativeList = ['Relative 1', 'Relative 2', 'Relative 3', 'Relative 4', 'Relative 5', 'Relative 6'];
        return(
            <div id="main">
                <ol>
                    {
                        relativeList.map((relative, idx) => <List key={`relativeListItem${idx+1}`} relative={relative} />)
                    }
                </ol>
            </div>
        )
    }
}


export default App;
