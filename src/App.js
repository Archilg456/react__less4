import React, { Component } from 'react';
import './App.css';



let generateUsers = () => [
  {id:1, name: "elle", age: 44},
  {id:2, name: "joel", age: 22},
  {id:3, name: "fedra", age:10 },
  {id:4, name: "tommy", age:12 },
  {id:5, name: "tess", age:25 },
  {id:6, name: "lee", age:48 },
];

 



export default class App extends Component{

constructor() {
  super();
  this.state = {showUsersList: true};
}
onChangedShowUsers = () => {
  this.setState({showUsersList: !this.state.showUsersList });
};
render(){

  let {showUsersList} = this.state;
  return (
    <div className='info_div'>
    <button onClick={this.onChangedShowUsers}> Changed Show Value </button>
    {showUsersList && <Child />}  
    </div>
  );
 }
}


class Child extends Component {

  constructor() {
    super();
    this.state = {userList: [] };
  }

  componentDidMount(){
    this.setState({userList: generateUsers() });
  }

  componentDidUpdate(_, prevState){
    if (prevState.userList !== this.state.userList) {
      document.title =  this.state.userList.length ;
    }
  }

  componentWillUnmount(){
    document.title = " Unmounting ";
  }


  onRemoveUser = () => {
    this.setState((prevState) => {
      let randomIndex = Math.floor(
        Math.random() * prevState.userList.length
      );
      let newUsersList = prevState.userList.filter(
        (_, ind) => ind !== randomIndex
      );
      return{
          userList: newUsersList, 
      };
    });
  };



  render() {
    let { userList } = this.state
    return(
      <div className='info_div'>
        {userList.map((user) =>{
          let {name, id, age} = user;
          return <h1 key={id}> {name}, {age} </h1>
        })}
        <button onClick={this.onRemoveUser}>Remove Random User</button>
      </div>
    );
  }


 }