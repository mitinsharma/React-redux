import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { addUser, deleteUser, updateUser } from './features/Users';

function App() {

  const usersList = useSelector((state) => state.users.value  );
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [newUsername, setNewUsername] = useState();

  return (
    <div className="App">
      {" "}
      <div className='addUser'>
        <input type="text" placeholder='Name..' onChange={(event) => { setName(event.target.value) }}/>
        <input type="text" placeholder='Username..' onChange={(event) => { setUsername(event.target.value) }}/>
        <button onClick={() => { dispatch(addUser({id: (usersList.length === 0) ? 0 : usersList[usersList.length - 1].id + 1, name, username}))}}>Add User</button>
      </div>
      <div className='displayUsers'>
        {usersList.map((user) => {
          return (
            <div>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
              <input type="text" placeholder='New Username...' onChange={(event) => {
                setNewUsername(event.target.value);
              }}/>
              <button onClick={() => { dispatch(updateUser({id: user.id, username: newUsername})); }}>Update Username</button>
              <button onClick={() => { dispatch(deleteUser({id: user.id})); }}>Delete User</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
