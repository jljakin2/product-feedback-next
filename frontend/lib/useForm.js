import { useState } from "react";

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name } = e.target;

    setInputs({
      // copy existing state
      ...inputs,
      // this syntax allows us to dynamically update the input that is changing based on the
      // e.target.name of the input that changes. then we just update its state to the current e.target.value
      [name]: value,
    });
  }

  function handleDropdownChange(e) {
    let value = e.target.getAttribute("data-value"); // get the value of the clicked on dropdown item
    let name = e.target.getAttribute("data-name"); // get the name of the clicked on dropdown item

    setInputs({
      // copy existing state
      ...inputs,
      // this syntax allows us to dynamically update the input that is changing based on the
      // e.target.name of the input that changes. then we just update its state to the current e.target.value
      [name]: value,
    });
  }

  // reset the form. we will use this after the form is submitted
  function resetForm() {
    setInputs(initial);
  }

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    handleDropdownChange,
    resetForm,
    setInputs,
  };
}
