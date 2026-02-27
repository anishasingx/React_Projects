import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [users, setUsers] = useState([]);
  const getcards = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setUsers(response.data);
  };

  return (
    <>
      <button className="btn btn-primary mb-4" onClick={getcards}>
        Get
      </button>
      <div className="row justify-content-center gx-4">
        {users.map((user) => (
          <div className="card col-10 col-md-4 col-lg-3">
            <img
              src={user.download_url}
              className="card-img-top"
              alt="..."
              style={{ height: "300px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{user.author}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
