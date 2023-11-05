import React, { useState }from 'react'

function Form(){

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user, email)

  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>UserName:    </label>
            <input type="text" placeholder="enter your name"  onChange={(e) => {setUser(e.target.value)}} value ={user} required />
            <br/>
            <br/>
            
            <label>Email:    </label>   
            <input type="email" placeholder="enter your email" onChange={(e)  => {setEmail(e.target.value)}} value={email} required />
            <br/>
            <br/>
            <button type="submit">Submit</button>
            
        </form>

    </div>
  )
}

export default Form;