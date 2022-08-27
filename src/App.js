import "./App.css";
import Home from "./components/Home";
import DataProvider from "./context/DataProvider";

function App() {
  //data will be used in all components
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
