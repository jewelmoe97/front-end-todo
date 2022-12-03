import React from "react";
import "../style/edit.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Edit_page() {
  let navigate = useNavigate();

  const { id } = useParams();

  const Url = `http://localhost:9292/todo/${id}`;

  const [items, setitems] = useState("");

  function display() {
    fetch(Url, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })

      .then((result) => {
        console.log(result);
        setitems(result);
      })

      .catch((err) => {
        console.log(err);
      });
  }

  function handlesubmit(e) {
    e.preventDefault();

    let data = {
      name: items,
    };

    let b = JSON.stringify(data);

    fetch(`http://localhost:9292/todo/${id}`, {
      method: "PATCH",
      body: b,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((r) => r.json())

      .then((a) => {
        console.log(a);
        navigate("/");
      })

      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    display();
  }, []);

  return (
    <React.Fragment>
      <div className="container border border-primary p-5 mt-5 bg3 rounded" >
        <h1 style={{color : 'pink'}}>Todo Edit Page</h1> <br />
        <form action="" onSubmit={handlesubmit}>
          <input
            type="text"
           
            className="px-5 py-3 ip rounded"
             autoFocus
            placeholder={items.name}
            required
            onChange={(e) => setitems(e.target.value)}
          />{" "}
          <br /> <br />
          <button type="submit" className="ab rounded py-2 px-5">Change
</button> <br />
        </form>{" "}
        <br />
        <Link className="back btn btn-primary mt-4 px-5 py-3" to='/'><i class="fa-solid fa-arrow-left fa-lg"></i> &nbsp; Go back</Link>
      </div>
    </React.Fragment>
  );
}

export default Edit_page;
