
import { useState } from "react";
function Signin () {
    const [signedin, setSignedin] = useState(false)

    const Signin = () => {
        setSignedin(true)
    }

    const Signout = () => {
        setSignedin(false)
    }
  return (
         <div>
           { signedin ? ( 
        <div>
            <button type="button" onClick={Signout}>Sign Out</button>
            <p>Welcome ,Signed In</p>
        </div>) :
        
        (<div>
            <button type="button"onClick={Signin}>Sign In</button>
            <p>Please Sign in</p>
        </div>)
           }
        </div>
  )
}
export default Signin;