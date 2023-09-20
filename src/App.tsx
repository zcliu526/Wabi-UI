import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Link} href='https://www.google.com' disabled>Google Link</Button>
        
      </header>
    </div>
  );
}

export default App;
