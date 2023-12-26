import { Route,Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Authentication from './Components/Authentication/Authentication';
import './App.css';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={true?<HomePage /> : <Authentication />}>

        </Route>
      </Routes>


    </div>
  );
}

export default App;
