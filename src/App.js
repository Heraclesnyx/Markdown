import React, { Component } from 'react';
import './App.css';


/* Importation de marked pour traduire en html */
import marked from 'marked'; 

import DOMPurify from 'dompurify';

import { sampleText } from './sampleText';

class App extends Component {
  state= {
    text: sampleText
  }

  /*Cycle de vie*/
  componentDidMount() {
    const text = localStorage.getItem('text')

    if(text){
      this.setState({ text }) /*Ici on garde les modification dans le localStorage */
    }else{
      this.setState({ text: sampleText }) /*Si il n'y a pas de texte recharge moi mon fichier sampleText par defaut*/
    }
    
  }

  componentDidUpdate(){
    const { text } = this.state
    localStorage.setItem('text', text)
  }


  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
  }

  renderText = text => {
    const textModif = DOMPurify.sanitize(text);
    return marked(textModif);
  }

  render() {
    return(
      <div className="container">  {/* Mode JSX */}
        <div className="row">
          <div className="col-sm-6">
            <textarea
              onChange={this.handleChange}
              value= {this.state.text}
              className="form-control"
              rows="35" />
          </div>

          <div className="col-sm-6"> 
          {/* dangerous prend en param 1 objet(ici __html) ac sa valeur (appel a notre méthode renderText() qui appel notre librairie Marked)*/}
            <div dangerouslySetInnerHTML={{ __html: this.renderText(this.state.text) }}> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
