import React, { Component, Fragment } from "react";
import ReactCodeInput from "react-code-input";
import CountryCodePicker from './CountryCodePicker';
import { Redirect } from "react-router-dom";

export default class SignUpForm extends Component {
  constructor() {
    super();
    this.state={
      next:true,
      phone:'',
      country_code:'',
      redirect:false
    }
    this.inputChange = this.inputChange.bind(this);
    this.setCountryCode = this.setCountryCode.bind(this);
    this.goNext = this.goNext.bind(this);
    this.codeVerification = this.codeVerification.bind(this);
  }
  inputChange(e){
    this.setState({[e.target.name]:e.target.value});
  }
  setCountryCode(value){
    this.setState({country_code:value});
  }
  goNext(){
    this.setState({next:!this.state.next});
  }
  codeVerification(){
    this.setState({redirect:true});
  }
  render() {
    const {phone, next, country_code, redirect}= this.state;
    let phoneInput = (
        <Fragment>
           <p className="text-center mt-4">
              Enter Phone Number
            </p>
            <div className="form-group phone mt-4 pb-2">
                <div className="input-group">
                    <div className="d-flex pp">
                        <CountryCodePicker inputChange={this.setCountryCode}/>
                    </div>
                    <div className="phone-addon">
                        <input
                            className= {"form-control border-left-none " + (phone.length > 9 && country_code !== '' ? "is-valid" : phone.length > 0 ? "is-invalid" :"")}
                            type="tel"
                            placeholder="1924565378"
                            name="phone"
                            value={phone}
                            onChange={this.inputChange.bind(this)}/>
                            {phone?'':<img src="img/phone.png" alt="lock" className="input-attach"/>}
                        <span className="invalid-feedback mt-0 phone_feedback">Incorrect Phone Number</span>
                    </div>                        
                </div>
            </div>
            <div className="form-group mt-3">
                <button className="btn btn-block btn-danger btn-red" onClick={this.goNext}>Continue</button>
            </div>
            <div className="form-group mt-4">
                <button className="btn btn-block btn-outline-dark">Cancel</button>
            </div>
        </Fragment>
      );
      let codeInput =(
        <Fragment>
          <p className="text-center mt-4">
          Enter 4- Digit Code <br />
          <span>We have sent to your phone</span>
        </p>
        <div className="">
            <ReactCodeInput
                type="number"
                inputStyle={{
                    paddding: "10px",
                    textAlign: "center",
                    fontSize: "2.3em",
                    margin: "8px",
                    width: "50px",
                    borderRadius: "5px",
                    height: "55px",
                    boxShadow:"inset 0 0 40px 40px rgba(0,0,0,0.05)",
                    background:"#fff"
                }}
                className="d-flex justify-content-center"
                fields={4}
                />
                <div className="form-group mt-3">
                    <button className="btn btn-block btn-danger btn-red" onClick={this.codeVerification}>Continue</button>
                </div>
                <div className="form-group mt-4">
                    <button className="btn btn-block btn-outline-dark">
                        Change Number
                    </button>
                </div>
                <div className="form-group mt-4">
                    <button className="btn btn-block btn-outline-dark">Cancel</button>
                </div>
            </div>
          </Fragment>
      );
    if(redirect){
      return <Redirect to="/congratulations"/>
    }
      
    return (
      <div className="right-parent">
        <h1 style={{textAlign:'left'}}>
          C<span className="red-line">reat</span>e an account
        </h1>
        {next?phoneInput:codeInput}
      </div>
    );
  }
}



