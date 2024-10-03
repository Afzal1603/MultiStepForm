import { createContext, useState } from "react";

const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    country: "",
    age: "",
    Dob: "",
  });
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const handleChange = (name) => (event) => {
    setDetails((prev) => {
      return { ...prev, [name]: event.target.value };
    });
  };

  return (
    <AppContext.Provider
      value={{
        details,
        setDetails,
        nextStep,
        prevStep,
        handleChange,
        step,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, ContextProvider };
