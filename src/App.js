import "./App.css"
import WouldYouRather from "./WouldYouRather";
import list from "./List.js"



function App() { 

  return (
    <div className="App">
      <WouldYouRather list={list} />
    </div>
  );
}

export default App;
