import logo from './logo.svg';
import Test from './components/test';
import Clock from './components/Clock';
import ConditionalRenderComponent from './components/Conditional/conditionalRendering';
import { NumberList } from './components/ListKeys/list_keys_component';
import './App.css';

const user = {
  firstName: "Kevin",
  lastName: "Alvarez"
}


const element = (
<h1> Welcome to {user.firstName} first React app!</h1>
);

const numbers = [1, 2, 3, 4, 5];



function App() {
  return (
    <div className="App">
      <Clock />
      <Clock />
      <Clock />
      <ConditionalRenderComponent />
      <NumberList numbers={numbers}/>
    </div>
  );
}

export default App;
