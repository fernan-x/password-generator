import { Form } from "./components";
import Lottie from "lottie-react";
import passwordAnimation from "./assets/lotties/password.json";

function App() {
  return (
    <div className="App">
      {/* <div className="menu"></div> */}
      <Lottie
        animationData={passwordAnimation}
        loop={true}
        style={{ height: "150px" }}
      />
      <h1>Password Generator</h1>
      <Form />
    </div>
  );
}

export default App;
