import logo from './logo.svg';
import './App.css';
import Greet from './components/hello.js';
import Greetings from './components/class.js';
import Guten from './components/Guten.js';
import Follow from './components/follow.js';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Greet></Greet>
        <Greetings></Greetings>
        <Guten work="a Chef"></Guten>
        <Guten work="a Pilot"></Guten>
        <Guten work="a engineering"></Guten>
        <Follow/>
    </div>
  );
}

export default App;
