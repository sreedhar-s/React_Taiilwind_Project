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
import HomePage from "./Pages/Home.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      {/* <Route path="/"  exact component={Name} />
      <Route path="/movie" exact component={Name2} /> */}

      <DefaultHOC path="/" exact component={HomePage} />
    </>
  );
}

export default App;
