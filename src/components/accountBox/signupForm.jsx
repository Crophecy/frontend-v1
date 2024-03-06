import React, { useContext , useState} from "react";

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from './accountContext';

export function SignupForm(props) {
  
  const { switchToSignin } = useContext(AccountContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "", // Fix the name here
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSignup = async (e) => {
    e.preventDefault();
  
    // Add form validation logic
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      // Display an error message or handle the error as needed
      console.error("All fields are required");
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      // Display an error message or handle the error as needed
      console.error("Passwords do not match");
      return;
    }
  
    try {
      console.log("aaya");
      const response = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Handle success, e.g., redirect to login page
      } else {
        const errorData = await response.text(); // Change to text() to capture non-JSON responses
        console.error(errorData);
        // Handle errors, e.g., display error messages to the user
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  


  return (
    <BoxContainer>
    <FormContainer onSubmit={handleSignup}>
      <Input
        type="text"
        name="name"
        placeholder="Full name"
        onChange={handleInputChange}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleInputChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleInputChange}
      />
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        onChange={handleInputChange}
      />
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
    </FormContainer>
    <Marginer direction="vertical" margin="5px" />
    <LineText>
      Already have an account?{" "}
      <BoldLink onClick={switchToSignin} href="#">
        Signin
      </BoldLink>
    </LineText>
  </BoxContainer>
  );
}