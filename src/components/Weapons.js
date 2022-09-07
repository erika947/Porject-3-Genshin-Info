import { getWeapons } from '../services/todos-api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


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
                <nav id ="sidebar">
                    <div className='title'>side menu</div>
                    <button type="button" class="btn btn-primary">Primary</button>
                    <ul className=' list-items'>
                        <li><Link to='/'> Home</Link></li>
                        <li><Link to='/weapons'> Weapons</Link></li>
                        <li><Link to='/'> Artifacts</Link></li>
                    </ul>
                </nav>
            </div>
            <h3>Claymore Suitable for Diluc and Noelle</h3>
            <ul>
                {weapons.map((weapon) => {
                    return (
                        
                        <li>{weapon.claymore}
                         <br />
                         <a href={`/${weapon._id}`}>
                        <img className="picture" src={weapon.claymoreImage}></img></a>
                         
                        </li>
                        
                    )
                })}

            </ul>
            <h3>Polearms Suitable for ...</h3>
            <ul>
                {weapons.map((weapon) => {
                    return (
                        
                        <li>{weapon.polearm}
                         <br />
                         <a href={`/${weapon._id}`}>
                        <img className="picture" src={weapon.polearmImage}></img></a>
                         
                        </li>
                        
                    )
                })}

            </ul>
            </div>
    )

}