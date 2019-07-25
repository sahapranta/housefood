import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import CountryCodePicker from './CountryCodePicker';
import {login} from '../../Store/Actions/AuthAction';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            phone:"",
            password:"",
            country_code:"",
            isBusy: false,
            remeber:false,
            next:false
        }
        this.inputChange = this.inputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.toggleRemeber = this.toggleRemeber.bind(this);
        this.setCountryCode = this.setCountryCode.bind(this);
    }
    toggleRemeber(){
        this.setState({remeber:!this.remeber});
    }
    inputChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    setCountryCode(value){
        this.setState({country_code:value});
    }
    submitForm(){
        this.props.login(this.state).then(()=>
            this.setState({next:true})
        )
    }
    render() {
        const {phone, password, remeber, next} = this.state;
        if (next) {
            return <Redirect to="congratulations" />
        }
        return (
            <div>
                <h1>L<span className="red-line">ogin</span></h1>
                <div className="form-group phone mt-4 pb-2">
                    <div className="input-group">
                        <div className="d-flex pp">
                            <CountryCodePicker inputChange={this.setCountryCode}/>
                        </div>
                        <div className="phone-addon">
                            <input
                                className= {"form-control border-left-none " + (phone.length > 9 ? "is-valid" : phone.length > 0 ? "is-invalid" :"")}
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
                <div className="form-group">
                    <input 
                        type="password"
                        value={password}
                        className={"form-control " + (password.length > 5 ? "is-valid" : password.length > 0 ? "is-invalid" :"")}
                        placeholder="**********"
                        name="password"
                        onChange={this.inputChange.bind(this)} />
                        {password?'':<img src="img/lock.png" className="input-attach" alt="phone"/>}
                    <span className="invalid-feedback mt-0">Incorrect Password</span>
                    <small className="float-right mt-2"><a href="/forget">Forget Password?</a></small>
                </div>
                <div className="remeber">
                    <label className="switch">
                        <input
                            type="checkbox"
                            defaultChecked={remeber}
                            onChange={this.toggleRemeber}/>
                        <span className="slider round"></span>
                    </label>
                    <p className="text-muted ml-2 mt-1">Remeber me</p>
                </div>
                <div className="form-group">
                    <button className="btn btn-danger btn-red btn-block"
                        onClick={this.submitForm}>Login</button>
                </div>
                <div className="form-group social text-center p-4">
                    <p className="text-muted">Or login with</p>
                    <img src="img/facebook.svg" alt="facebook"/>
                    <img src="img/google-plus.svg" alt="facebook"/>
                    <img src="img/twitter.svg" alt="facebook"/>
                </div>
            </div>
        )
    }
}

export default connect(null, {login})(LoginForm);