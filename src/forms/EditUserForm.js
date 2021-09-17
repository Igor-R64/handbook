import React, { useState, useEffect } from 'react'

function EditUserForm(props) {

    const [user, setUser] = useState(props.currentUser)

    useEffect(
        () => {setUser(props.currentUser)},
        [props]
        )

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!user.name || !user.surname || !user.email || !user.phone) return

        props.updateUser(user.id, user)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Имя</label>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
            />
            <label>Фамилия</label>
            <input
                type="text"
                name="surname"
                value={user.surname}
                onChange={handleInputChange}
            />
            <label>email</label>
            <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleInputChange}
            />
            <label>Телефон</label>
            <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleInputChange}
            />
            <button>Обновить</button>
            <button
                onClick={() => props.setEditing(false)}
                className="button muted-button"
            >
                Отмена
            </button>
        </form>
    )
}

export default EditUserForm;