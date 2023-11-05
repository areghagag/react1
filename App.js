import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import CounterFc from './components/counterfc';
import Signin from'./components/sign';
import Form from './components/form';
import AgeCounter from './components/age';
import ToggleButton from './components/toggleButton';
function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <CounterFc/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Signin/>
      <br/>
      <br/>
      <Form/>
      <br/>
      <br/>
      <AgeCounter/>
      <br/>
      <br/>
      <ToggleButton/>
    </div>
  );
}

export default App;
