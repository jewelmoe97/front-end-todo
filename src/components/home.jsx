import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import pencil from '../photo/pencil.png';
import del from '../photo/del.png';


function Home() {
  const [list, setlist] = useState([]);

  const [add_list, setadd_list] = useState("");

  const navigate = useNavigate();

  function edit_page(id) {
    navigate("/edit/" + id);
  }

  const Url = "http://localhost:9292/todo";

  function display() {
    fetch(Url, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })

      .then((result) => {
        setlist(result);
        console.log(result);
      })

      .catch((err) => {
        console.log(err);
      });
  }

  function add_to(e) {
    e.preventDefault();
    console.log(add_list);

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

    let Url2 = `http://localhost:9292/todo/${id}`;

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

  useEffect(() => {
    return display();
  }, [list]);

  return (
    <React.Fragment>
      <div className="home mt-5">
      <h1 className="text-center" style={{color : 'pink'}}>My Todo List </h1>
      


      <div className="container mt-5">
        <div className="row d-flex flex-column justify-content-center">
          <form action="" onSubmit={add_to}>
            <div className="col-12 text-center mx-auto">
              <input
                type="text"
                placeholder="Example: Mathematics"
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

          <br />

         <div className="container">
          <div className="row ">
            <div className="col d-flex flex-cloumn justify-content-center">
            <Link className="shop rounded text-center " to='/shopping'> <span>Shopping List</span>
            <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
    </svg>

             </Link>
          

            </div>
          </div>
         </div>

          <div className="col-12 text-center mx-auto rounded" style={{borderRadius: 25+'px'}}>
            <table class="table table-bordered mt-5 bg" style={{color : 'skyblue', borderColor : 'skyblue'}} >
              <thead>
                <tr>
                  <th scope="col" className="h3 p-4"  style={{color : 'white'}}>No.</th>
                  <th scope="col" className="h3 p-4"  style={{color : 'white'}}> Todo </th>
                 
                  <th scope="col" className="h3 p-4" style={{color : 'white'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {list.length > 1 &&
                  list.map((one, index) => {
                    return (
                      <tr key={one.id}>
                        <th scope="row" className="h5 p-4">{one.id}</th>
                        <td className="h5 p-4"> {one.name}</td>
                       
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
      </div>
    </React.Fragment>
  );
}

export default Home;

