import React, { useState } from 'react'

function AddUserForm({addUser}) {


    const initialFormState = { id: null, name: '', surname: '', email: '', phone: '' }

    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.currentTarget
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!user.name || !user.surname || !user.email || !user.phone) return
        addUser(user)
        setUser(initialFormState)
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
            <button>Добавить новй контакт</button>
        </form>
    )
}

export default AddUserForm;