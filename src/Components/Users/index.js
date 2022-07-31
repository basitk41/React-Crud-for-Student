import { Component, memo, useEffect, useState, useId } from "react";
import classes from "./index.module.css";
import axios from "axios";

const Users = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(0);
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => setTodos(res.data))
  //     .catch((err) => console.log(err));
  // }, []);
  const handleAddTodo = () => {
    const newTodos = [...todos, { id: new Date().getTime(), title }];
    setTodos(newTodos);
    setTitle("");
  };
  const pages = Array.from(Array(Math.ceil(todos.length / 10)).keys());
  const paginatedTodos = todos.slice(page * 10, (page + 1) * 10);
  return (
    <div className="row">
      <div className="col-sm-8">
        <h3>Users List</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTodos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav aria-label="...">
          <ul className="pagination">
            {pages.map((x) => (
              <li key={x} className={`page-item ${page === x ? "active" : ""}`}>
                <button className="page-link" onClick={() => setPage(x)}>
                  {x + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="col-sm-4">
        <h3>Add Todo</h3>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <button className="btn btn-primary" onClick={handleAddTodo}>
            Add todo
          </button>
        </div>
      </div>
    </div>
  );
};

/////////////////////////////////////////////////
// const Users = ({ name, users = [] }) => {
//   const arr = [1, 2, 3];
//   console.log("Users.js render");

//   useEffect(() => {
//     console.log("Users.js useEffect called.");
//     return () => {
//       console.log("Users.js useEffect cleanup");
//     };
//   }, []);

//   return (
//     <div>
//       <h1 className={classes.h1Text}>Hello {name}.</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user}>{user}</li>
//         ))}
//       </ul>
//       <ul>
//         {arr.map((user) => (
//           <li key={user}>{user}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// class Users extends Component {
//   componentWillUnmount() {
//     console.log("Users Component Will Unmount");
//     // clean up
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("Users Should Component Update");
//     const { users } = this.props;
//     if (users !== nextProps.users) {
//       return true;
//     }
//     return false;
//   }

//   render() {
//     console.log("Users Rendered.");
//     const { name, users = [] } = this.props;
//     return (
//       <div>
//         <h1 className={classes.h1Text}>Hello {name}.</h1>
//         <ul>
//           {users.map((user) => (
//             <li key={user}>{user}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

export default memo(Users);
