const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment: "pioneering cortisone",
  },
  {
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

function App() {
  const listItems = people.map((person) => {
    return <li> {person} </li>;
  });

  const chemists = people.filter((person) => person.profession === "chemist");

  const list = chemists.map((chemist) => {
    return (
      <li>
        <p>
          <b> {chemist.name}: </b> {" " + chemist.profession + " "}
          known for {chemist.accomplishment}{" "}
        </p>{" "}
      </li>
    );
  });

  return <ul> {list} </ul>;
}

export default App;
