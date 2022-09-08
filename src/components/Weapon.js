//need to get this to connect so images apear


// import { getWeapon} from '../services/todos-api'
// import { useState, useEffect } from 'react'
// import { useParams} from 'react-router-dom'
// import './infoPage.css'

// function Weapon() {
//     const { id } = useParams()
//     const [weapon, setWeapon] = useState({})
//     useEffect(() => {
//         getWeapon(id)
//             .then(res => setWeapon(res.data))
//     }, [])

//     return (
//         <div >
//             <div className='wrapper'>
//                 <nav id="sidebar">
//                     <div className='title'>side menu</div>
//                     <ul className=' list-items'>
//                         <li><a href='/'> Home</a></li>
//                         <li><a href='/weapons'> Weapons</a></li>
                        
//                     </ul>
//                 </nav>
//             </div >
//                 <div className='box'>

//                     <div className='container'>
//                     <h2>{weapon.claymore}</h2>
//                     <br />
//                     <img className="picture" src={weapon.claymoreImage}></img>
//                     <br />
//                     </div>
//                 </div>
//             <br />
            
//         </div>
//     )
// }

// export default Weapon