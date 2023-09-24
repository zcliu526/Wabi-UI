import React from "react";
// import Button, { ButtonType, ButtonSize } from './components/Button/Button';
import Input from "./components/Input";


function App() {
  return (
    <>
       <Input
       style={{width: 300}}
      defaultValue="large size"
      size="lg"
    />
    <Input
      placeholder="small size"
      size="sm"
    />

    </>
  );
}

export default App;
