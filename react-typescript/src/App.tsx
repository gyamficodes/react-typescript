import { useState } from 'react';
import Person from './assets/Components/Person';
import Button from './assets/Components/Button';
import './App.css'
import Form from './assets/Components/Form';

function App() {
const name : string = "John";
const age : number = 40;
const isLogin : boolean = true;
const language : (string | number)[] = ["John", "Yaw", "Kumasi", ];
const [login , setLogin]  = useState<boolean | string>(false);
const log = () => {
  setLogin(!login);
}

 return(  
    <>
      <Button style={{backgroundColor:"red", color:"white" , fontSize: 30}}/>
    <Form/>
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

<Person prof={"FullStack Developer"} isMarried={false} Year={2021}/>
{/* <Person prof={"FullStack Developer"} isMarried={true} Year={2021}/> */}
    </>
  )
}


export default App
