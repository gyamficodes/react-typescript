import { useState } from 'react';

import './App.css'

function App() {
const name : string = "John";
const age : number = 40;
const isLogin : boolean = true;
const language : (string | number)[] = ["John", "Yaw", "Kumasi", ];
const [login , setLogin]  = useState<boolean>(false);
const log = () => {
  setLogin(!login);
}

 return(  
    <>
     <h1>{name}</h1>
  <button  onClick={log}>LogIn</button>
  {
    login ? (<><h1>Login succesfully</h1></>) 
    : 
    (<>
    <h1>Login fails please check in your credentials.</h1>
    </>)
  }


{language.map((item) => (<>
 <h1>{item}</h1>
</>))

}

    </>
  )
}

export default App
