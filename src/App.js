import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Todos from './components/Todos';
import Todo from './components/Todo';
import Edit from './components/Edit';
import Weapons from './components/Weapons';

function App() {
  return (
    <div className="App">
      <h1>Genshin Impact</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Todos />} />
          <Route path='/:id' element={<Todo />} />
          <Route path='/:id/edit' element={<Edit />} />
          <Route path='/weapons' element={<Weapons />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
