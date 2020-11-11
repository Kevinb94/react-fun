import logo from './logo.svg';
import Test from './components/test';
import Clock from './components/Clock';
import ConditionalRenderComponent from './components/Conditional/conditionalRendering';

import './App.css';

const user = {
  firstName: "Kevin",
  lastName: "Alvarez"
}


const element = (
<h1> Welcome to {user.firstName} first React app!</h1>
);

function App() {
  return (
    <div className="App">
      <Clock />
      <Clock />
      <Clock />
      <ConditionalRenderComponent />
    </div>
  );
}

export default App;
