import './App.scss';
import Message from "./Message";

function App(props) {
  return (
    <div className="App">
      <header
          className={`App-header ${props.showred ? 'header-red' : 'header-blue'}`}
          style={{top: props.topPosition || '10px' }}
      >
          My first React App
          <h3>Hello, {props.name}</h3>
          <Message text={'Задание 1'}/>
      </header>
    </div>
  );
}

export default App;
