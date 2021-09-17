
function UserTable({ users, deleteUser,editRow }) {

    const handleDeleteUser = id => {
        let answer = window.confirm('Вы увeрены ?')
        if (answer) {
            deleteUser(id)
        }
    }

    return (
       
        <table className="table  align-middle">
            <thead>
                <tr className="table-secondary">
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Email</th>
                    <th>Телефон</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody className="table-light">
                {users.length > 0 ? (
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <div className="d-flex justify-content-evenly">
                                    <button className="btn btn-secondary"
                                onClick={() => editRow(user)}
                                >
                                    Редактировать
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteUser(user.id)}
                                >
                                    Удалить
                                </button>
                                </div>
                                
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>Нет контактов</td>
                    </tr>
                )}
            </tbody>
        </table>
       
    )
}

export default UserTable;