import { useState } from 'react'

const App = () => {

  const [name,setName] = useState("");
  const[age,setAge] = useState("");
  const[course,setCourse] = useState("");

  const handlechange = (e) =>{
    const {name,value} = e.target;
    if(name === "name")
    {
      setName(value);
    }
    else if(name === "age")
    {
      setAge(value);
    }
    else
    {
      setCourse(value);
    }

  }

  let handlesubmit = (e) =>{
    e.preventDefault();
    console.log(name+age+course);
    fetch("http://localhost/Reactcrud/createStudent.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name : name,
      age : age,
      course: course

      
    })
    
    
});

  }
  return (
    <div className="col-10 col-md-5 container shadow-lg my-5 rounded p-5">
      <h1 className='text-center fw-bold'>Create New Student</h1>
      <form action="" onSubmit={handlesubmit}>
        <label className="form-label fw-mediun text-secondary">Name</label>
        <input type="text" className='form-control mb-3'name="name" onChange={handlechange}  />
        <label className="form-label fw-mediun text-secondary">Age</label>
        <input type="text" className='form-control mb-3'name="age" onChange={handlechange}  />
        <label className="form-label fw-mediun text-secondary">Course</label>
        <input type="text" className='form-control mb-3'name="course" onChange={handlechange}  />
        <button type='button' className='btn btn-primary' onClick={handlesubmit} >Add Student</button>
      </form>
      
    </div>
  )
}

export default App
