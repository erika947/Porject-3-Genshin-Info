import { getTodos } from '../services/todos-api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Create from './Create'

export default function Todos() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        getTodos()
            .then(res => setTodos(res.data))
    }, [])
    console.log(todos)
    return (
        <div>
            <button type="button" class="btn btn-primary">Primary</button>
            <div className='wrapper'>
                <nav id ="sidebar">
                    <div className='title'>side menu</div>
                    <ul className=' list-items'>
                        <li><Link to='/'> Home</Link></li>
                        <li><Link to='/weapons'> Weapons</Link></li>
                        <li><Link to='/'> Artifacts</Link></li>
                    </ul>
                </nav>
            </div >
                <div className='columns'>
            <ul >
                {todos.map((todo) => {
                    return (
                        <li>{todo.name}
                         <br />
                         <a href={`/${todo._id}`}>
                        <img className="picture" src={todo.portrait}></img></a>
                        </li>
                        
                        )
                    })}

            </ul>

                    </div>
            {/* <Create /> */}
        </div>
    )

}
