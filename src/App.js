
import './App.scss';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Provider} from 'react-redux'
import store from './store';
import Navbar from './components/navbar/Navbar';

import AddTodo from './components/addTodo/AddTodo';
import HeroSection from './components/herosection/HeroSection';

function App() {
  return (
    <Router>
    <Provider store={store}>
    <div className='todo-app'>
      <div className='todo-app-list'>
        <Navbar/>
      <div className='main-hero-section'>
        <Routes>
          <Route excat path='/' Component={AddTodo} />
          <Route path="/todo" Component={ HeroSection} />
        </Routes>
        
       
      

      </div>
      </div>
     
    </div>
    </Provider>
    </Router>
  );
}

export default App;
