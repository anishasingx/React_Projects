import React, { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const success = () => toast.success('Successfully created!', {duration:2000});
  const failed = () => toast.error('SLogin Failed!', {duration:2000});

  const emailElement = useRef("");
  const passwordElement = useRef("");

  let handleLogin = (e) =>{
    e.preventDefault();

    let email = emailElement.current.value;
    let password = passwordElement.current.value;
    if(email === "user@gmail.com" && password === "12345")
    {
      success();
    }
    else
    {
      failed();
    }

    console.log(`Your email is ${email} and password is ${password}`);

    emailElement.current.value="";
    passwordElement.current.value="";

  }

  return (
    <div className='container col-8 col-md-4 col-lg-4 min-vh-100 d-flex flex-column justify-content-center'>
      <div className="shadow-lg border p-4 rounded">
       <h1 className='text-center bg-info w-100 text-light p-2 '>Login Here</h1>
        <form onSubmit={handleLogin} >
          <label className='form-label'>Email</label>
          <input type="email" className='form-control mb-2' ref={emailElement} />
          <label className='form-label'>Password</label>
          <input type="password" className='form-control mb-2'  ref={passwordElement} />
          <button type='submit' className='btn btn-primary'>Login</button>
          <Toaster />
        </form>
      </div>
    </div>
  )
}

export default App
