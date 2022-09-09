import { getWeapons } from '../services/todos-api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './weapons.css'

export default function Weapons() {
    const [weapons, setWeapons] = useState([])
    useEffect(() => {
        getWeapons()
            .then(res => setWeapons(res.data))
    }, [])
    console.log(weapons)
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
            <div className='box'>
                <ul className='container2'>
                    {weapons.map((weapon) => {
                        return (

                            <li>{weapon.tool}
                                <br />
                                <a href={`/weapons/${weapon._id}`}>
                                    <img className="picture" src={weapon.image}></img></a>

                            </li>

                        )
                    })}

                </ul>
            </div>
            
        </div>
    )

}