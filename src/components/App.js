import React from 'react';
import '../styles/App.css';
import PlayListItem from './PlayListItem.js'
import NavBar from './NavBar.js'
import PlayList from './PlayList.js'
import PlayListForm from './PlayListForm'

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(props) {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar/>
        </div>
        <div className="bucket">
          <div className="form" >
            <PlayListForm/>
          </div>
          <div className="results">
            <PlayList/>
          </div>
        </div>

      </div>
    );
  }
}
