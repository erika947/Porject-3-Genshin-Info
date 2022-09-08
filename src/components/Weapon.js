import { getWeapon, deleteTodo} from '../services/todos-api'
import { useState, useEffect } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import './infoPage.css'

function Weapon() {
    const nav = useNavigate
    const { id } = useParams()
    const [weapon, setWeapon] = useState({})
    useEffect(() => {
        console.log('in useeffect')
        getWeapon(id)
            .then(res => setWeapon(res.data))
    }, [])

    const deleteTheTodo = () => {
        deleteTodo(id) // service in todos-api
        nav('/') // take us back to home screen
    }
console.log('weapon', weapon)
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
                    <h2>{weapon.claymore}</h2>
                    <br />
                    <img className="picture" src={weapon.claymoreImage}></img>
                    <br />
                    </div>
                </div>
            <br />
            <div className="text-right">
                <button type="button" className="btn btn-primary" onClick={() => { nav(`/${id}/edit`) }}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={deleteTheTodo}>Delete</button>
            </div>
        </div>
    )
}

export default Weapon