import './App.css';
import { Route } from 'react-router-dom';
import { Landing, Home, Detail, Form } from './views/index';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing} />
      <Route path='/home' component={Home} />
      <Route exact path='/detail' component={Detail} />
      <Route exact path='/create' component={Form} />
    </div>
  );
}

export default App;

