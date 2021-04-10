import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import login from'./login.jpg'
import validator from 'validator'
import { Link } from "react-router-dom";
import { DataContext } from "../Provider/DataProvider";


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState(null)
    const [data, setData] = useContext(DataContext);

   const history = useHistory();
    
      console.log(errorMessage)

      const submitHandler=(e) => {
        e.preventDefault();

        if (validator.isStrongPassword(password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
          })) {
            setErrorMessage('Is Strong Password')
            setData({...data, name, email, password, phone, id: Math.random() });
            history.push("/home");
          } else {
            setErrorMessage('password length min 8 char, alteast 1uppercase, 1lowercase, symbol')
          }
      }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-4">
          <div className="text-center">
          <Link className="btn" to="/home">
            <h1 className="orange-color">&#60;Hyper<span style={{color: "#0d6efd"}}>Learn</span>&#92;&#62;</h1>
            </Link>
          </div>
          <div style={{margin: "0 auto"}}>
          <img src={login} alt="login" className="img-fluid" />
          </div>
          <div style={{width:"300px", margin: "0 auto"}}>
              
          <h1>Welcome Back!</h1>
          <p>
            HyperLearn helps you connect <br /> and learn with the best mentor
            <br /> out there.
          </p>
          </div>
          
        </div>
        <div className="col-md-6 mt-4">
            <h1 className="text-center">Create New Account</h1>
            <div className="shadow p-3 mb-5 bg-body rounded">
          <form className="row g-3 needs-validation" onSubmit={submitHandler} novalidate>
            <div className="col-12">
              <label for="validationCustom01" className="form-label para">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                name="name"
                required
                value={name}
                onChange={ e =>{setName(e.target.value)}}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-12">
              <label for="validationCustom02" className="form-label para">
                  Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="validationCustom02"
                name="email"
                required
                value={email}
                onChange={e =>{setEmail(e.target.value)}}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-12">
              <label for="validationCustomUsername" className="form-label para">
                Phone Number
              </label>
              <div className="input-group has-validation">
                
                <input
                  type="tel"
                  className="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  maxlength="10" pattern="\d{10}"
                  required
                  name="phone"
                  value={phone}
                  onChange={e =>{setPhone(e.target.value)
                    
                }}
                />
                <div className="invalid-feedback">
                  please enter valid phone number.
                </div>
              </div>
            </div>
            <div className="col-12">
              <label for="validationCustom03 " className="form-label para">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="validationCustom03"
                name="password"
                required
                onChange={(e) =>  setPassword(e.target.value)
                 }
              /> 
              <small>{errorMessage}</small>
              
              <div className="invalid-feedback">
                Please provide a valid Phone Password.
              </div>
            </div>

            <div className="col-12">
              <button className=" btn btn-purple mb-1" type="submit">
                Sign Up
              </button>
            </div>
          </form>
          <div className="col-12 text-center">
          <p className="para">Already have an Account?</p>
          <button className="btn btn-white shadow-sm">Login</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
