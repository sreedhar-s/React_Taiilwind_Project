// import {Route} from "react-router-dom";

// function Name(){
//   return <h1>Hello Root</h1>;
// }

// function Name2(){
//   return <h1>Hello Movie</h1>
// }

//HOC
import  DefaultHOC from "./HOC/Default.HOC";

//Components
import Temp from "./components/temp";

function App() {
  return (
    <>
      {/* <Route path="/"  exact component={Name} />
      <Route path="/movie" exact component={Name2} /> */}

      <DefaultHOC path="/" exact component={Temp} />
    </>
  );
}

export default App;
