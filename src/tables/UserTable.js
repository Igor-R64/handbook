
function UserTable({ users, deleteUser,editRow }) {

    const handleDeleteUser = id => {
        let answer = window.confirm('Вы увeрены ?')
        if (answer) {
            deleteUser(id)
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>email</th>
                    <th>Телефон</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? (
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button className="button muted-button"
                                onClick={() => editRow(user)}
                                >
                                    Редактировать
                                </button>
                                <button
                                    className="button muted-button"
                                    onClick={() => handleDeleteUser(user.id)}
                                >
                                    Удалить
                                </button>
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