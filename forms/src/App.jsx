import { useState } from "react";


const App = () => {

  const [myInput,setMyInput] = useState([]);
  const [name,setName] = useState("");

   const handleChange = (e) =>{
    setName(e.target.value);
   }

   const handlesubmit = (e)=>{
    e.preventDefault();
    setMyInput([...myInput,name]);
    setName("");
    
   }

  return (
    <>
      <div className="display-2 text-center">React Forms</div>
    
      <form className="col-10 container " onSubmit={handlesubmit}>
        <label className="form-label">Name</label><br />
        <input type="text" className="form-control my-4" onChange={handleChange} value={name} />
        <label className="form-label">You Are Typing {name}</label><br />
        <button type="button" className="btn btn-primary mb-4" onClick={handlesubmit} >Add</button>
      </form>

      <div className="list-group  container col-10 col-md-5 my-4">
        <li className="list-group-item active">Your List</li>
        {myInput.map((item, index)=> <li key={index} className="list-group-item">{item}</li>)}
      </div>
    </>
  );
};

export default App;
