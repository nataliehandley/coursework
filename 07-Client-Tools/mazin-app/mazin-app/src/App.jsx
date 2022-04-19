import "./App.css";
import Nav from "./components/Nav/Nav";
import Routes from "./containers/Routes";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <>
      <UserProvider/>
    </>
  );
}

export default App;
