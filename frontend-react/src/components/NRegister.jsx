import React, { useState } from 'react'
import axios from 'axios'

const NRegister = () => {
  const [username , setUsername] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [errors, setErrors]=useState({})
  const [sucess , setSucess]=useState(false)
  const handleRegistration= async (e)=> {
    e.preventDefault()
    const userData={
      username,email,password
    }
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/',userData)
      console.log("response.data==>",response.data)
      console.log("Resitration succesful")
      setSucess(true)
    }
    catch(error){
      setErrors(error.response.data)
      console.error("Registraion Error :" ,error)

    }
  }
  return (
    
    <>
    <div className='container' >
        <div className='row justify-content-center'>
            <div className='col-md-6'>
                <h3 className='text-dark text-center mb-4' > Create an Account</h3>
                <form onSubmit={handleRegistration}>
                    <input type='text' className='form-control mb-3' placeholder='Enter username' value={username} onChange={(e)=> setUsername(e.target.value)}/>
                    <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>
                    <input type='email' className='form-control mb-3' placeholder='Email adress' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <small>{errors.email && <div className='text-danger'>{errors.email}</div>}</small>
                    <input type='password' className='form-control mb-5' placeholder='Set password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
                    {sucess && <div className='alert alert-success'> Registraion Sucessfull</div>}
                    <button type='submit' className='btn btn-info d-block mx-auto' >Register</button>
                </form>

            </div>

        </div>

    </div>
    </>
  )
}

export default NRegister