import React, { Component, useState, useEffect, useRef } from "react";
import Users from "./Components/Users";
import classes from "./App.module.css";
import Login from "./Components/Login";
const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    localStorage.getItem("isAuth") && setIsAuth(true);
  }, []);
  return (
    <div className="container">
      {isAuth ? <Users /> : <Login setAuth={setIsAuth} />}
    </div>
  );
};

///////////////////////////////////////////////////////////////////
// const App = ({ text }) => {
//   const ref = useRef("Hi");
//   const [users, setUsers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//   const [show, setShow] = useState(true);
//   const [title, setTitle] = useState("Test");
//   const handleClick = (e) => {
//     // debugger;
//     // console.log(e);
//     const newUsers = [...users];
//     const newUser = newUsers.length + 1;
//     if (e.target.innerText === "Add") {
//       newUsers.push(newUser);
//       setUsers(newUsers);
//     } else {
//       setShow(!show);
//       //   newUsers.pop();
//     }
//   };

//   const handleButton = () => {
//     ref.current = "Hello";
//   };

//   useEffect(() => {
//     console.log("App.js useEffect called.");
//   }, [users]);

//   console.log("App.js Rendered.");
//   return (
//     <div>
//       <h1 className={classes.h1Text}>{text}</h1>
//       <h2>{title}</h2>
//       <h2>{ref.current}</h2>
//       <button onClick={handleButton}>Change Title</button>
//       <button onClick={handleClick}>Add</button>
//       <button onClick={handleClick}>Sub</button>
//       <Users name="Ali" users={users} />
//       {show && <Users name="Khan" users={users} />}
//     </div>
//   );
// };

// class App extends Component {
//   constructor(props) {
//     console.log("App.js constructor");
//     super(props);
//     this.state = {
//       users: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//       show: true,
//       title: "Test",
//     };
//   }
//   //   state = {
//   //     users: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   //   };

//   componentDidMount() {
//     console.log("App Component Did Mount");
//     // setTimeout(() => {
//     //   this.setState({
//     //     users: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
//     //   });
//     // }, 5000);
//   }

//   componentDidUpdate() {
//     console.log("App Component Did Update");
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("App Should Component Update");
//     return true;
//   }

//   componentWillUnmount() {
//     console.log("App Component Will Unmount");
//   }

//   handleClick = (e) => {
//     // debugger;
//     // console.log(e);
//     const newUsers = [...this.state.users];
//     const newUser = newUsers.length + 1;
//     if (e.target.innerText === "Add") {
//       newUsers.push(newUser);
//     } else {
//       this.setState({ show: false });
//       //   newUsers.pop();
//     }
//     this.setState({ users: newUsers });
//   };

//   render() {
//     console.log("App Render");

//     return (
//       <div>
//         <h1 className={classes.h1Text}>{this.props.text}</h1>
//         {this.state.title}
//         <button onClick={() => this.setState({ title: "Hello" })}>
//           Change Title
//         </button>
//         <button onClick={this.handleClick}>Add</button>
//         <button onClick={this.handleClick}>Sub</button>
//         <Users name="Ali" users={this.state.users} />
//         {this.state.show && <Users name="Khan" users={this.state.users} />}
//         {/* <ul>
//           {this.state.users.map((user) => (
//             <li key={user}>{user}</li>
//           ))}
//         </ul> */}
//         {/* <ul>
//         {this.state.arr.map((user) => (
//           <li key={user}>{user}</li>
//         ))}
//       </ul> */}
//       </div>
//     );
//   }
// }

export default App;
