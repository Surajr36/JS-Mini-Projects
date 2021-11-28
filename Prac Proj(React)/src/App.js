import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [Users, SetUsers] = useState([]);

  const AddUserHandler = (Uname, Uage) => {
    const userObject = {
      name: Uname,
      age: +Uage,
      id: Math.random().toString(),
    };
    SetUsers((prevUsersList) => {
      return [...prevUsersList, userObject];
    });
  };

  return (
    <div>
      <AddUser UserAdd={AddUserHandler} />
      <UserList UserBase={Users}></UserList>
    </div>
  );
}

export default App;
