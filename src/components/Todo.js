import { getTodo, deleteTodo } from '../services/todos-api'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import './infoPage.css'

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
        <div >
            <div className='wrapper'>
                <nav id="sidebar">
                    <div className='title'>side menu</div>
                    <ul className=' list-items'>
                        <li><a href='/'> Home</a></li>
                        <li><a href='/weapons'> Weapons</a></li>

                    </ul>
                </nav>
            </div >
            <div className='box'>

                <div className='container'>
                    <h2>Name:</h2>
                    <h3>{todo.name}</h3>
                    <br />
                    <h2>Vision:</h2>
                    <h3>{todo.element}</h3>
                    <br />
                    <h2>Weapon:</h2>
                    <h3>{todo.weapon}</h3>
                    <br />
                    <h3 className='information'>{todo.info}</h3>
                    <sup id='cite_ref-1' className='reference'>
                        <a href='https://genshin.hoyoverse.com/en/character/mondstadt?char=0'>[1]</a>
                    </sup>
                    <br />
                    <img className="picture" src={todo.image}></img>
                    <br />
                </div>
            </div>
            <div className="text-right">
                <button type="button" className="btn btn-primary" onClick={() => { nav(`/${id}/edit`) }}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={deleteTheTodo}>Delete</button>
            </div>
            <br />
            <Link to='/'> Go Back to main</Link>
        </div>
    )
}

export default Todo