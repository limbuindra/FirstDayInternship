import { createContext, useState } from "react";

export const StepperContext = createContext({});

export const StepperProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [activeStep, setActiveStep] = useState(1); // Steps start from 1

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const handleSubmit = () => {
    console.log("Final Form Submitted:", formData);
    alert("Form Submitted Successfully!");
    setActiveStep(4); // Assume last step is step 4 (Completion)
  };

  return (
    <StepperContext.Provider value={{ formData, setFormData, activeStep, handleNext, handleBack, handleSubmit }}>
      {children}
    </StepperContext.Provider>
  );
};
