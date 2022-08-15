import logo from './logo.svg';
import './App.css';

function App() {
  const animals = [{ name: "A", species: "dog" },
  { name: "B", species: "cat" },
  { name: "C", species: "cat" },
  { name: "D", species: "dog" },
  { name: "E", species: "fish" }
  ];

  // const isDog = function (animal) {
  //   return animal.species === 'dog'
  // }

  const dog = animals.filter(function (animal) {
    return animal.species === 'dog'
  });
  console.log(dog);

  const names = animals.map(function (animals){
    return animals.name;
  })
  console.log(names);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
