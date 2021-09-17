import React, { useState, useEffect } from 'react'

function EditUserForm(props) {

    const [user, setUser] = useState(props.currentUser)

    useEffect(
        () => { setUser(props.currentUser) },
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
            <div className="d-flex justify-content-evenly">
            <button  className="btn btn-success">Обновить</button>
            <button
                onClick={() => props.setEditing(false)}
                className="btn btn-secondary"
            >
                Отмена
            </button>
            </div>
        </form>
    )
}

export default EditUserForm;