import React, { Component } from 'react';
import axios from 'axios';
import { Button, Dimmer, Grid, Header, Loader, Segment } from 'semantic-ui-react';

class App extends Component {

  state = { haiku: [] }

  componentDidMount() {
    this.generate()
  }

  generate = () => {
    this.setState({ haiku: [] })
    axios.get("/api/haiku")
      .then( res => this.setState({ haiku: res.data }) )
  }

  render() {
    const { haiku } = this.state
    var msg = new SpeechSynthesisUtterance(haiku);
    if ( haiku.length )
      return (
        <Grid>
          <Grid.Column width={6} />
          <br/>
          <Grid.Column width={4} textAlign="center" as={Segment}> 
            { haiku.map( (line, index) => 
              <div key={index}>
                <Header textAlign="center" content={ line.map( (word, i) => 
                  i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) + " " : word + " "
                ) }/>
                <br/>
              </div>
            ) }
            <Button fluid basic content="Read haiku" onClick={() => window.speechSynthesis.speak(msg)}/><br/>
            <Button fluid primary content="Generate new haiku" onClick={this.generate}/>
          </Grid.Column>
          <Grid.Column width={6} />            
        </Grid>
      );
    else
      return (
        <Dimmer inverted active>
          <Loader>Generating haiku</Loader>
        </Dimmer>
      )
  }
}

export default App;
