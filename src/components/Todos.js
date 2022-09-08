import { getTodos } from '../services/todos-api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Create from './Create'
import './homepage.css'

export default function Todos() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        getTodos()
            .then(res => setTodos(res.data))
    }, [])
    console.log(todos)
    return (
        <div>
            
            <div className='wrapper'>
                <nav id="sidebar">
                    <div className='title'>side menu</div>
                    <ul className=' list-items'>
                        <li><a href='/'> Home</a></li>
                        <li><a href='/weapons'> Weapons</a></li>
                        
                    </ul>
                </nav>
            </div >
            <div>
                <div className='box' id='profiles' >

                    <ul className='container'>
                        {todos.map((todo) => {
                            return (
                                <li className='outline'>{todo.name}
                                    <br />
                                    <a href={`/${todo._id}`}>
                                        <img className="picture" src={todo.portrait}></img></a>
                                </li>

                            )
                        })}

                    </ul>
                </div>

            </div>
            {/* <Create /> */}
        </div>
    )

}
