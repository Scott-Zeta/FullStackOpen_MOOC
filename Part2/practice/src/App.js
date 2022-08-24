import './App.css';

function App(props) {
  const { notes } = props

  const animals = [
    { name: "A", species: "dog", weight: 5 },
    { name: "B", species: "cat", weight: 1 },
    { name: "C", species: "cat", weight: 2 },
    { name: "D", species: "dog", weight: 3 },
    { name: "E", species: "fish", weight: 4 }
  ];

  // const isDog = function (animal) {
  //   return animal.species === 'dog'
  // }

  const dog = animals.filter(function (animal) {
    return animal.species === 'dog'
  });
  console.log(dog);

  const names = animals.map(function (animals) {
    return animals.name;
  })
  console.log(names);

  let totalWeight = animals.reduce((sum, animal) => sum + animal.weight, 0);
  console.log(totalWeight);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/* <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li> */}
        {notes.map(note =>
          <li key={note.id}>
            {note.content}
          </li>)}
      </ul>
    </div>
  )
}

export default App;
