import StatusBar from "./Components/StatusBar";
function App() {
  return (
    <div className="App">
      <StatusBar name="Magia" amount="20%" color="blue"/>
      <StatusBar name="Fada" amount="70%" color="green"/> 
    </div>
  );
}

export default App;
