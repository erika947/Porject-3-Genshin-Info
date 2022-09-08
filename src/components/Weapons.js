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
            <h3>Claymore Suitable for Diluc and Noelle</h3>
            <div className='box'>
                <ul className='container2'>
                    {weapons.map((weapon) => {
                        return (

                            <li>{weapon.claymore}
                                <br />
                                <a href={`/weapons/${weapon._id}`}>
                                    <img className="picture" src={weapon.claymoreImage}></img></a>

                            </li>

                        )
                    })}

                </ul>
            </div>
            <div className='contain'>
                <h3>Polearms Suitable for ...</h3>
                <ul className='container2'>
                    {weapons.map((weapon) => {
                        return (

                            <li className='outline2'>{weapon.polearm}
                                <br />
                                <a href={`/weapons/${weapon._id}`}>
                                    <img className="picture2" src={weapon.polearmImage}></img></a>

                            </li>

                        )
                    })}

                </ul>
            </div>
        </div>
    )

}