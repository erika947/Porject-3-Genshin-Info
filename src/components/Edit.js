import { getTodo, editTodo } from '../services/todos-api'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
    const { id } = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getTodo(id) // get the todo that matches this id
            .then(res => setData(res.data)) // updating the state to the todo we get back
    }, []) // prevent a continous loop

    const editTheTodo = (e) => {
        e.preventDefault()
        const updatedTodo = { name: e.target.name.value }
        editTodo(id, updatedTodo)
        nav(`/${id}`)
    }

    return (
        <div>
            <form onSubmit={editTheTodo}>
                <input type='text' name='name' defaultValue={data.name} />

                <input type='submit' />
            </form>
        </div>
    )
}

export default Edit