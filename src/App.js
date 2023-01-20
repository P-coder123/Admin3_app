import "./styles.css";
//import Admin from "./Components/Admin";
//import Employe from "./Components/Employe";
//import Vendor from "./Components/Vendor";

function App() {
  return (
    <div className="App">
      <h1>Welcome to This Page</h1>
      <button type="button" className="btn btn-info m-3">
        Admin
      </button>

      <button type="button" className="btn btn-secondary m-3">
        Vendor
      </button>

      <button type="button" className="btn btn-warning m-3">
        Employe
      </button>
    </div>
  );
}
export default App;
