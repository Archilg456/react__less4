import React, { useState, useEffect } from 'react';
import './App.css';



let generateUsers = () => {

return [

  {id:1, name: "elle", age: 44},
  {id:2, name: "joel", age: 22},
  {id:3, name: "fedra", age:10 },
  {id:4, name: "tommy", age:12 },
  {id:5, name: "tess", age:25 },
  {id:6, name: "lee", age:48 },
  {id:7, name: "abel", age: 33},
  {id:8, name: "anna", age:54 },
  {id:9, name: "sam", age: 39},
  {id:10, name: "marlen", age: 59},
  {id:11, name: "kim", age: 60},
  {id:12, name: "bill", age:29 },
];
};

function App() {

let [users, setUsers] = useState([]);

let onRemoveUser = () => {
  setUsers((prevUsers) => {
    let index = Math.floor(Math.random() * prevUsers.length);
    let newUsersArray = prevUsers.filter((_.ind ) => ind !== index );
    return newUsersArray;
  });
};


useEffect(()=>{
setUsers(generateUsers());
},[])

useEffect(()=>{

  document.title = `${users.length} Users Left `;


},[users]);

  return (
    <div className="App">

      <button onClick={onRemoveUser}> Remove User </button>

        {users.map(({id,age , name})=>(
          <h1 key={id}> {name}, {age} </h1>
        ))}



    </div>
  );
};

export default App;
