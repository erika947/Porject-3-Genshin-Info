import { getTodo, deleteTodo } from '../services/todos-api'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'


function Todo() {
    const nav = useNavigate()
    const { id } = useParams()
    const [todo, setTodo] = useState({})
    useEffect(() => {
        getTodo(id)
        .then(res => setTodo(res.data))
    }, [])

    const deleteTheTodo = () => {
        deleteTodo(id) // service in todos-api
        nav('/') // take us back to home screen
    }

    return (
        <div>
            <h1>Todo:</h1>
            <h2>{todo.name}</h2>
            <h3>{todo.element}</h3>
            <br />
            <h3>{todo.weapon}</h3>
            <br />
            <h3>{todo.info}</h3>
            <br />
            <img className="picture" src={todo.image}></img>
            <br />
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteTheTodo}>Delete</button>
            <br />
            <Link to='/'> Go Back to main</Link>
        </div>
    )
}

export default Todo