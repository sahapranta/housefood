import React, { Component, Fragment } from "react";
import {country_code} from './Country_code.js';

class CountryCodePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,      
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: '',
      error:false
    };
  }

  onChange = e => {
    const userInput = e.currentTarget.value;
    const filteredSuggestions = country_code.filter(
      c =>
        c.name.indexOf(userInput) > -1 || c.code.indexOf(userInput) > -1 || c.dialCode.indexOf(userInput) > -1
    );
    
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput:userInput
    }, this.checkInput());
    
  };

  
  onClick = e => {   
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText.split(':')[0]
    }, ()=>this.props.inputChange(this.state.userInput));
  };

  
  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;
    
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion].dialCode
      }, ()=>this.props.inputChange(this.state.userInput));
    }
    
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  checkInput(){
    if (this.state.userInput) {
      const code = country_code.some(c=>c.dialCode===this.state.userInput);
      if(!code){
        this.setState({error:false});
      } else{
        this.setState({error:true});
      }
    }
  }

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;
             
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li
                  className={className}
                  key={suggestion.code}
                  onClick={onClick}
                >
                  {suggestion.dialCode}: {suggestion.name}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>Country not Matched!</em>
          </div>
        );
      }
    }
    return (
      <Fragment>
        <input
          type="text"
          className={"form-control tel-border-right" + (this.state.error ?'invalid':'')}
          placeholder="+880"
          onChange={onChange}
          name="country_code"
          onKeyDown={onKeyDown}          
          value={userInput}
        />
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default CountryCodePicker;