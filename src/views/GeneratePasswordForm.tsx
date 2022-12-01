import { Form } from "../components";
import Lottie from "lottie-react";
import passwordAnimation from "../assets/lotties/password.json";

const GeneratePasswordForm = (): JSX.Element => {
  return (
    <>
      <Lottie
        animationData={passwordAnimation}
        loop={true}
        style={{ height: "150px" }}
      />
      <h1>Password Generator</h1>
      <Form />
    </>
  );
};

export default GeneratePasswordForm;
