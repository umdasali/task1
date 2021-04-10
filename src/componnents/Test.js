import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const users = res.data;
      setData(users);
    });
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-12 mt-2">
                <Link to="/home" className="btn btn-sm-purple mx-2">
                  home
                </Link>
                
              </div>
          <div className="col-12 mt-4 mb-3">
              <h1> JSON Placeholder</h1>
              <p>fetching user data using Axios</p>
              <hr/>
          </div>
        {data && data.map(detail => 
          <div className="col-md-4 mt-4">
            <div className="card border-info mb-3">
              <div className="card-header">{detail.name}</div>
              <div className="card-body">
                <h5 className="card-title">user name:{detail.username}</h5>
                <p className="card-text">
                 Address: {detail.address.street}
                </p>
                <p className="card-text">
                 company: {detail.company.name}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Test;
