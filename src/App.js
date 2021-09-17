import { useState } from 'react';
import AddUserForm from './forms/AddUserForm';
import UserTable from './tables/UserTable';
import EditUserForm from './forms/EditUserForm';
import './App.css';

function App() {

  const userData = [
    { id: 1, name: 'Igor', surname: 'Reshetnikov', email: 'reshetnikovia@outlook.com', phone: '89878303777' },
    { id: 2, name: 'Sveta', surname: 'Svetlana', email: 'sveta1@outlook.com', phone: '89079878790' },
  ]

  const [users, setUsers] = useState(userData)
  const [editing, setEditing] = useState(false)

  const initialFormState = { id: null, name: '', surname: '', email: '', phone: '' }

  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setEditing(false)
    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, surname: user.surname, email: user.email, phone: user.phone })
  }

  return (
    <div className="container">
      <h1>Handbook</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Редактировать</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Добавить контакт</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>Просмотр контактов</h2>
          <UserTable
            users={users}
            editRow={editRow}
            deleteUser={deleteUser}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
