import React, { useState } from 'react'

function AddUserForm({ addUser }) {


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
            <div className="mb-3">
                <label className="form-label" >Имя</label>
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Фамилия</label>
                <input
                    className="form-control"
                    type="text"
                    name="surname"
                    value={user.surname}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    className="form-control"
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Телефон</label>
                <input
                    className="form-control"
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleInputChange}
                />
            </div>

            <button className="btn btn-success">
                Добавить контакт
            </button>

        </form>
    )
}

export default AddUserForm;