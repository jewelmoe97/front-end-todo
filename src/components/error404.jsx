import React from "react";

import error from "../photo/error.png";
import { Link } from "react-router-dom";


function Error404() {
 

  
    return (
      <div className="err">
        <div className="container p-5">
          <div className="row d-flex flex-column justify-content-center text-center">
            <div className="col">
              <h1 className="text-center text-danger">
                Error 404 Page Not Found!
              </h1>
            </div>

            <div className="col">
            
                <img src={error} alt="" className="img-fluid" />
              
            </div>

            <div className="col mt-3">
              <Link className="fs-2 text-warning" style={{textDecoration: 'overline'}} to="/">
                Go Back
              </Link>
            </div>
          </div>
        </div>

      
      </div>
    );
  }


export default Error404;
