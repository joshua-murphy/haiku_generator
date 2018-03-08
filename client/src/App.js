import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = { haiku: [] }

  componentDidMount() {
    axios.get("/api/haiku")
      .then( res => this.setState({ haiku: res.data }) )
  }

  render() {
    return (
      this.state.haiku.map( line => 
        <div>
          { line.map( word => 
            word + " "
          ) }
          <br/>
        </div>
      )
    );
  }
}

export default App;
