import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="container">  {/* Mode JSX */}
        <div className="row">
          <div className="col-sm-6">
            <textarea
              className="form-control"
              rows="35" />
          </div>

          <div className="col-sm-6">
             <h1>Résultat</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
