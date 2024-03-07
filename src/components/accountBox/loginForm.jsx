import React, { useContext , useState } from "react";
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

import { message } from "antd";
import { useHistory } from 'react-router-dom';
export function LoginForm(props) {
  
  const { switchToSignup } = useContext(AccountContext);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const history = useHistory();
  const handleLogin = async (e) => {
    e.preventDefault();
    let data; // Declare data outside the block
    
    try {
      console.log("aaya");
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        data = await response.json();
        console.log(data);
        
        if (data && data.user) {
          console.log("User data:", data.user);
          
          localStorage.setItem(
            "user",
            JSON.stringify({
              userId: data.user.userId,
              username: data.user.username,
            })
            );
            // const history = useHistory();
            // history.push("/"); // Navigate using React Router
            message.success("Login success");
            history.push('/');
        
          } else {
            console.error("Invalid response format");
            message.error("Login failed");
          }
        } else {
          console.error("Network response was not ok");
          message.error("Login failed");
        }
      } catch (error) {
        message.error("Something went wrong");
        console.error("Error during login:", error);
      }
      window.location.reload();
      message.success("Login success");
    };
    return (
      <BoxContainer>
       <FormContainer onSubmit={handleLogin}>
   
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
      
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Login</SubmitButton>
    </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      
      <LineText>
        Don't have an accoun?{" "}
        <BoldLink onClick={switchToSignup} href="#">
          Signup
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}