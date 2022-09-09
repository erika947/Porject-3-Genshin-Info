import { getWeapon, deleteTodo} from '../services/todos-api'
import { useState, useEffect } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import './weaponInfo.css'

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
            <h3>Rarity:</h3>
                    <img className="stars" id='stars' src={weapon.rarity}></img>
                <div className='box2'>

                    <div className='container2'>
                    <h2>{weapon.tool}</h2>
                    <br />
                    <br />
                    <div className='object'>
                    <img className="picture2" src={weapon.image}></img>
                    </div>
                    <br />
                    
                    </div>
                    <div className='fadedBackground'>
                    <h2 className="fontColor">Info:</h2>
                    <h3 className='information2'>{weapon.info}</h3>
                    </div>
                </div>
        </div>
    )
}

export default Weapon