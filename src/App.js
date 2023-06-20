import { useState } from "react";
import "./App.css";
import Button from "./Component/Button";
// import ListItem from './Component/ListItems';
// import Login from './Component/Login';

// Dashboad Components
// function Dashboard(props) {
//   return <div>
//     <p>Logged User: {props.userData}</p>
//     <ListItem />
//   </div>
// }

function App() {
  const [count, setCount] = useState(0);
  const name = "musa";
  return (
    <div>
      <p>App</p>
      <Button data={name} count={count} setCount={setCount} />
    </div>
  );
}

// conditional Rendering
// function App() {
//   const isLoggedIn = true;
//   const [user, setUser] = useState("ibrahim")

//   // Conditional rendering
//   // if (isLoggedIn === true) {
//   //   return <Dashboard />
//   // } else {
//   //   return <Login />
//   // }
//   return isLoggedIn ? <Dashboard userData={user} /> : <Login />
// }

// Initial Example
// function App() {
//   return (
//     <div className="App">
//       <h1>React Tutorial</h1>
//       <Button data={btnData} /> {/* Nested Component */}
//       <Login />
//     </div>
//   );
// }

// Local Data
// const btnData = {
//   title: "Click Me1",
//   variant: 'success'
// }

export default App;
