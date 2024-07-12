import React, { useState } from "react";

interface User {
  name: string;
  text: string;
  id: number 
}

const Form: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [todo, setTodos] =  useState<string[] >([]);
  

  function generateId(){
   return Math.floor(Math.random() * 100)  
}

const removeTodo = (id: User) => setTodos((todo) => todo.filter((data) => data.id !== id ))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = {
      name: name,
      text: text,
      id:generateId()
    };

    setTodos((prevTodos : any) => [...prevTodos, newUser])
  
  };

  return (
<>
<form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text"
      />
      <button type="submit">Submit</button>
    </form>
    { todo.map(({name , text, id}) => (
       <div key={id}>
        <li>{name}</li>
    <button onClick={() => removeTodo(id)}>Delete</button>
        <li>{text}</li>
       </div>
    ))
      
    }
</>

  );
};

export default Form;
