import logo from './logo.svg';
import './App.css';
import UserGreeting from './Component/Conditional rendering/UserGreeting'; 
import Practice from './Component/Practice/Practice'
import Form from './Component/Form/Form';




function App() {
  return (
    <div className="App">
        <Form/>
        {/* <UserGreeting />  */}
        {/* <Practice /> */}
    </div>
  );
}

export default App;
