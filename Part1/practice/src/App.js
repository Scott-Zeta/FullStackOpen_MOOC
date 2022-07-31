import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>Hello</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const Knock = (props) => {
  return (
    <div>
      <p>knock {props.name}, at {props.address}</p>
    </div>
  )
}

const App = (props) => {
  console.log("Hello from component APP")
  const now = new Date();
  const a = 20;
  const b = 60;
  const {counter} = props
  return (
    <>
      <p>
        Hello, it is {now.toString()}
      </p>
      <p>
        {counter}
      </p>
      <p>
        {a} + {b} equal {a + b}
      </p>
      <Knock name = "King DDD" address = "Adelaide Uni"/>
      <Knock name = "Kirby" address = {a+b} />
      <Knock />
    </>
  )
}

export default App;
