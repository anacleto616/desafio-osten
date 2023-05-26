import styled from "styled-components";

export const Form = styled.form`
  max-width: 500px;
  margin: 0 auto 24px;
  
 input, select {
    width: 100%;
    border: none;
    background: #fff;
    border: 2px solid #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    height: 52px;
    border-radius: 4px;
    outline: none;
    padding: 0 16px;
    font-size: 16px;
    transition: border-color 0.2s ease-in;
   }
   
   input:focus {
      border-color: #112e5c;
   }
   
   p {
      color: red;
      font-weight: bold;
      margin-top: 4px;
      margin-bottom: 16px;
   }

 button {
    height: 52px;
    border: none;
    padding: 0 16px;
    background: #112e5c;
    font-size: 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    font-weight: bold;
    color: #fff;
    border-radius: 4px;
    transition: background 0.2s ease-in;
 }

 button:hover {
    background: #3E66A5;
 }

 button:active {
    background: #051633;
 }
`;