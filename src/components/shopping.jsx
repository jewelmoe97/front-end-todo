import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {Navigate, useNavigate } from "react-router-dom";

function Shopping() {
  const [list, setlist] = useState([]);

  const [add_list, setadd_list] = useState("");

  const navigate = useNavigate();

  function edit_page(id) {
    navigate("/shopping/" + id);
     console.log(id);
  }

  const Url = "http://localhost:9292/shopping";

  function display() {
    fetch(Url, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })

      .then((result) => {
        console.log(result);
        setlist(result);
      })

      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    display();
  }, [list]);

   function add_item(e){
    e.preventDefault();
    console.log('submit works');
    let data = {
      name: add_list,
    };

    fetch(Url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((result) => {
        console.log(result.status);

        setadd_list("");
      })

      .catch((err) => {
        console.log(err);
      });
   }

   function del_list(id) {
    let a = window.confirm("Are you sure to delete??");

    let Url2 = `http://localhost:9292/shopping/${id}`;

    if (a == true) {
      fetch(Url2, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((result) => {
          setadd_list("");
          console.log(result);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  }



  return (
    <React.Fragment>
      <div className="cate mt-5">
        <h1  className="text-center" style={{color : 'pink'}}>My shopping list </h1>

        <div className="container mt-5 rounded">
          <div className="rwo">
            <div className="col">
            <form action="" onSubmit={add_item}>
            <div className="col-12 text-center mx-auto">
              <input
                type="text"
                placeholder="Example: Makeup Buy"
                className="px-5 py-3 ip rounded"
                required
                autoFocus
                value={add_list}
                onChange={(e) => setadd_list(e.target.value)}
              />
            </div>

            <div className="col-6 mx-auto text-center mt-4">
            <button type="submit" className="ab rounded py-2 px-5"> Add to list
</button>
            </div>
          </form>

            </div>
          </div>
        </div>

       <Link className="back btn btn-primary mt-4 px-5 py-3" to='/'><i class="fa-solid fa-arrow-left fa-lg"></i> &nbsp; Go back</Link>
       
       <div className="container">
       <div className="col-12 text-center mx-auto">
            <table  class="table table-bordered mt-5 bg2" style={{color : 'skyblue', borderColor : 'skyblue'}}>
              <thead>
                <tr>
                  <th scope="col" className="h3 p-4"  style={{color : 'white'}}>No.</th>
                  <th scope="col" className="h3 p-4"  style={{color : 'white'}} > Todo </th>
                 
                  <th scope="col" className="h3 p-4"  style={{color : 'white'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {list.length > 1 &&
                  list.map((one, index) => {
                    return (
                      <tr key={one.id}>
                        <th scope="row"  className="h5 p-4"> {one.id}</th>
                        <td  className="h5 p-4"> {one.name}</td>
                       
                        <td className="p-4">
                          
                          <i class="fa-solid hoo fa-pen-to-square text-primary fa-2xl" onClick={() => edit_page(one.id)}></i>
                         
                          &nbsp;   &nbsp;   &nbsp;
                        

                          <i class="fa-solid hoo fa-trash text-danger fa-2xl" onClick={() => del_list(one.id)}></i>

                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        
      </div>
      </div>
    </React.Fragment>
  );
}

export default Shopping;
