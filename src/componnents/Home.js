import React, { useContext, useState } from 'react'
import { Link, useHistory} from 'react-router-dom';
import { DataContext } from '../Provider/DataProvider'


function Home() {
   
   const [data, setData] = useContext(DataContext);
   const [newName,setNewName] = useState();
   const [newEmail,setNewEmail] = useState();
   const [newPhone,setNewPhone] = useState();

   const {name, email, phone} = data;

   const updateName = (e)=>{
    e.preventDefault();
     setData({
       name: newName,
       email: newEmail,
       phone: newPhone
     })
   }
   const history = useHistory();
  
    return (
        <div className="container-fluid">
            <div className="row">
              <div className="col-12 mt-2">
                <Link to="/test" className="btn btn-sm-purple mx-2">
                  Test
                </Link>
              </div>
              <div className="col-12 text-center"><h1>User Information</h1></div>
                    <div className="col-md-6 mt-4">
                    <h1>Name {name}</h1>
                    <h5>email {email}</h5>
                    <h5>phone Number {phone}</h5>
                   </div>
  
                <div className="col-md-6 mt-4">
              <form onSubmit={updateName}>
              <div className="col-12">
              <label for="validationCustom01" className="form-label para">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                name="name"
                value={newName}
                onChange={ e =>{setNewName(e.target.value)}}
                required
              
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
                value={newEmail}
                onChange={e =>{setNewEmail(e.target.value)}}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-12">
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
                  value={newPhone}
                  onChange={e =>{setNewPhone(e.target.value)
                    
                }}
                />
                <div className="invalid-feedback">
                  please enter valid phone number.
                </div>
              </div>
            </div>
            <div className="col-12">
               <button className=" btn btn-primary mt-1" type="submit">
                Update
              </button>
            </div>
                    </form>
                </div>
            </div>
        </div>
    )
              
}

export default Home

