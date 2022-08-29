import "./App.css";

function App() {
  const handleGetUser = () => {
    fetch("https://https://simple-project-test-api.herokuapp.com//getUser")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <h1>App works !</h1>
      <button onClick={() => handleGetUser()}>Get User Infos</button>
    </div>
  );
}

export default App;
