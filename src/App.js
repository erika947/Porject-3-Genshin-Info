import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Todos from './components/Todos';
import Todo from './components/Todo';
import Edit from './components/Edit';
import Weapons from './components/Weapons';
import Weapon from './components/Weapon';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='subHeader'>
      <h1>Genshin Impact</h1>
        </div>
      <p>Genshin Impact is a free-to-play action role-playing game developed and published by miHoYo co.</p>
      <p>The game is a open world with a fantasy theme. Players can collect characters, weapons, artifacts, and many other resources. The combat in the game is based on elemental magic so each character will have there own type of element such as pyro(Fire),cryo(Ice), Anemo(Wind), and Dendro(Grass).  </p>
      </div>
     
      <Router>
        <Routes>
          <Route path='/' element={<Todos />} />
          <Route path='/:id' element={<Todo />} />
          <Route path='/:id/edit' element={<Edit />} />
          <Route path='/weapons' element={<Weapons />} />
          <Route path='/weapons/:id' element={<Weapon />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
